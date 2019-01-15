/** Provides logging functionality for client-side JavaScript errors. */
enum LogLevel {
    Critical = "critical",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug",
}

export default class Logger {
    /**
     * Logging class for client-side errors that will be posted to the server
     * for logging to the same file as all other vinoteca logs.
     *
     * @param module name of the module from which the log messages originate.
     */
    constructor(private module: string) {
    }

    public logCritical(message: string) {
        return this.log(LogLevel.Critical, message);
    }

    public logError(message: string) {
        return this.log(LogLevel.Error, message);
    }

    public logWarning(message: string) {
        return this.log(LogLevel.Warning, message);
    }

    public logInfo(message: string) {
        return this.log(LogLevel.Info, message);
    }

    public logDebug(message: string) {
        return this.log(LogLevel.Debug, message);
    }

    private log(level: LogLevel, message: string) {
        return $.post("/rest/logs/client/", {level, module: this.module, message});
    }
}
