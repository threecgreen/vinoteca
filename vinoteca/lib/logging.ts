/** Provides logging functionality for client-side JavaScript errors. */
enum LogLevel {
    Critical = "critical",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug",
}

function log(level: LogLevel, module: string, message: string) {
    return $.post("/rest/logs/client/", {level, module, message});
}

export function logCritical(module: string, message: string) {
    return log(LogLevel.Critical, module, message);
}

export function logError(module: string, message: string) {
    return log(LogLevel.Error, module, message);
}

export function logWarning(module: string, message: string) {
    return log(LogLevel.Warning, module, message);
}

export function logInfo(module: string, message: string) {
    return log(LogLevel.Info, module, message);
}

export function logDebug(module: string, message: string) {
    return log(LogLevel.Debug, module, message);
}
