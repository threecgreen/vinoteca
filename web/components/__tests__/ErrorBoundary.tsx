/* eslint-disable @typescript-eslint/no-var-requires -- fresh modules per simulated page load */
import React from "react";

jest.mock("lib/Logger");

const reload = jest.fn();
const originalLocation = window.location;
const chunkError = () => new TypeError(
    "Failed to fetch dynamically imported module: https://vinoteca.example/static/chunks/old.js");

interface IPage {
    container: HTMLElement;
    teardown: () => void;
}

type Child = (react: typeof React) => React.ReactElement;

// Each call is a fresh page load: module state resets, sessionStorage persists.
async function loadPage(child: Child): Promise<IPage> {
    jest.resetModules();
    const FreshReact: typeof React = require("react");
    const { act } = require("react-dom/test-utils");
    const { createRoot } = require("react-dom/client");
    const { ErrorBoundary } = require("components/ErrorBoundary");
    const { installStaleChunkReload } = require("lib/staleChunkReload");

    const uninstall = installStaleChunkReload();
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
        root.render(
            <ErrorBoundary>
                <FreshReact.Suspense fallback="loading">{ child(FreshReact) }</FreshReact.Suspense>
            </ErrorBoundary>,
        );
    });
    return {
        container,
        teardown: () => {
            act(() => root.unmount());
            container.remove();
            uninstall();
        },
    };
}

// Mirrors Vite's __vitePreload wrapper: dispatch vite:preloadError, then rethrow.
const failingLazyRoute: Child = (react) => {
    const Route = react.lazy(() => Promise.reject(chunkError()).catch((err: unknown) => {
        const event = new Event("vite:preloadError", { cancelable: true });
        Object.assign(event, { payload: err });
        window.dispatchEvent(event);
        throw err;
    }));
    return <Route />;
};

const Boom: React.FC = () => {
    throw new Error("unrelated render bug");
};

let pages: IPage[] = [];
let now = 1_000_000;

beforeAll(() => {
    // @ts-expect-error jsdom's location is not configurable, so replace it wholesale
    delete window.location;
    window.location = { ...originalLocation, reload } as Location;
});

afterAll(() => {
    window.location = originalLocation;
});

beforeEach(() => {
    sessionStorage.clear();
    jest.spyOn(Date, "now").mockImplementation(() => now);
    jest.spyOn(console, "error").mockImplementation(() => undefined);
});

afterEach(() => {
    pages.forEach((page) => page.teardown());
    pages = [];
    jest.restoreAllMocks();
});

const load = async (child: Child) => {
    const page = await loadPage(child);
    pages.push(page);
    return page;
};

test("stale chunk reloads the page once instead of showing the crash page", async () => {
    const page = await load(failingLazyRoute);
    expect(reload).toHaveBeenCalledTimes(1);
    expect(page.container.textContent).not.toContain("has crashed");
});

test("stale chunk right after a reload shows the crash page instead of looping", async () => {
    await load(failingLazyRoute);
    expect(reload).toHaveBeenCalledTimes(1);

    now += 2_000;
    const secondLoad = await load(failingLazyRoute);
    expect(reload).toHaveBeenCalledTimes(1);
    expect(secondLoad.container.textContent).toContain("has crashed");
    expect(secondLoad.container.textContent)
        .toContain("Failed to fetch dynamically imported module");
});

test("stale chunk after a later deploy reloads again", async () => {
    await load(failingLazyRoute);
    now += 60_000;
    await load(failingLazyRoute);
    expect(reload).toHaveBeenCalledTimes(2);
});

test("unrelated render error shows the crash page without reloading", async () => {
    const page = await load(() => <Boom />);
    expect(reload).not.toHaveBeenCalled();
    expect(page.container.textContent).toContain("unrelated render bug");
});
