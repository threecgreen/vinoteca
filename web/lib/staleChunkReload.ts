import Logger from "./Logger";

const RELOADED_AT_KEY = "vinoteca:staleChunkReloadedAt";
// A second stale-chunk failure this soon after reloading means the reload didn't fix it.
const MIN_RELOAD_INTERVAL_MS = 10_000;

let reloadPending = false;

export function isStaleChunkReloadPending(): boolean {
    return reloadPending;
}

function readReloadedAt(): number {
    try {
        return Number(sessionStorage.getItem(RELOADED_AT_KEY));
    } catch {
        return 0;
    }
}

function writeReloadedAt(now: number): boolean {
    try {
        sessionStorage.setItem(RELOADED_AT_KEY, String(now));
        return true;
    } catch {
        return false;
    }
}

function reloadForStaleChunk(event: Event): void {
    if (reloadPending) {
        return;
    }
    const now = Date.now();
    if (now - readReloadedAt() < MIN_RELOAD_INTERVAL_MS || !writeReloadedAt(now)) {
        return;
    }
    reloadPending = true;
    const { payload } = event as Event & { payload?: unknown };
    new Logger("staleChunkReload", false, false).logError(
        `Failed to load chunk, likely stale after a deploy: ${String(payload)}. Reloading...`);
    location.reload();
}

/**
 * Reloads the page once when Vite fails to load a lazy chunk, which happens when a deploy
 * removes the hashed chunk files the open page references.
 */
export function installStaleChunkReload(): () => void {
    window.addEventListener("vite:preloadError", reloadForStaleChunk);
    return () => window.removeEventListener("vite:preloadError", reloadForStaleChunk);
}
