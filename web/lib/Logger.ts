import { GIT_SHA, LOG_LEVEL, VERSION } from "generated/constants";
import React from "react";
import { postLog } from "./api/logs";
import { toast } from "./widgets";

/** Provides logging functionality for client-side JavaScript errors. */
enum LogLevel {
    Critical = "critical",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug",
}

interface ILogResult {
    success: boolean;
}

type LogTags = Record<string, string | number | Date | object | undefined | null>;

export default class Logger {
    private static logLevelOrdering = [LogLevel.Debug, LogLevel.Info, LogLevel.Warning,
                                       LogLevel.Error, LogLevel.Critical];

    private static logLevelOrder: number = Logger.logLevelOrdering.indexOf(LOG_LEVEL as LogLevel);

    /**
     * Logging class for client-side errors that will be posted to the server.
     *
     * @param module the name of the module from which the log messages originate.
     * @param toConsole whether to also print messages to the console
     * @param shouldToast whether to display a toast message
     */
    constructor(private module: string, private toConsole = false, private shouldToast = true) {
    }

    public logCritical(message: string, tags: LogTags = {}) {
        const level = LogLevel.Critical;
        this.toast(level, message);
        return this.log(level, message, tags);
    }

    public logError(message: string, tags: LogTags = {}) {
        const level = LogLevel.Error;
        this.toast(level, message);
        return this.log(level, message, tags);
    }

    public logWarning(message: string, tags: LogTags = {}) {
        const level = LogLevel.Warning;
        this.toast(level, message);
        return this.log(level, message, tags);
    }

    public logInfo(message: string, tags: LogTags = {}) {
        return this.log(LogLevel.Info, message, tags);
    }

    public logDebug(message: string, tags: LogTags = {}) {
        return this.log(LogLevel.Debug, message, tags);
    }

    private async log(level: LogLevel, message: string, tags: LogTags) {
        if (this.toConsole) {
            console.log(`${level.toUpperCase()} ${new Date()} ${this.module}: ${message}`);
        }
        if (Logger.logLevelOrdering.indexOf(level) >= Logger.logLevelOrder) {
            tags.fullVersion = `${VERSION}-${GIT_SHA}`;
            try {
                const response: ILogResult = await postLog({
                    level,
                    // @ts-ignore
                    message: message instanceof Object ? "" : message,
                    module: this.module,
                    url: window.location.pathname,
                    tags,
                });
                if (!response.success) {
                    this.toast(LogLevel.Error, "Failed to send client-side logs to server.");
                }
            } catch (e) {
                this.toast(LogLevel.Error,
                           `Failed to send client-side logs to server: ${e.message}`);
            }
        }
    }

    private toast(level: LogLevel, message: string) {
        if (this.shouldToast) {
            toast(`${level.toUpperCase()}: ${message}`);
        }
    }
}

/**
 * Logging hook for posting client-side logs to the server.
 *
 * @param module the name of the module from which the log messages originate.
 * @param toConsole whether to also print messages to the console
 * @param shouldToast whether to display a toast message
 */
export const useLogger = (module: string, toConsole = false, shouldToast = false) => {
    const [logger, _] = React.useState(new Logger(module, toConsole, shouldToast));
    return logger;
};
