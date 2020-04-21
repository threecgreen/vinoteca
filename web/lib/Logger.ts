import { postLog } from "./RestApi";
import { IDict } from "./utils";
import { toast } from "./widgets";
import React from "react";

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

type LogTags = IDict<string | number | Date | object | undefined | null>;

export default class Logger {
    /**
     * Logging class for client-side errors that will be posted to the server
     * for logging to the same file as all other vinoteca logs.
     *
     * @param module the name of the module from which the log messages originate.
     * @param toConsole whether to also print messages to the console
     * @param shouldToast whether to display a toast message
     */
    constructor(private module: string, private toConsole = false, private shouldToast = true) {
    }

    /**
     * Meant for irrecoverable or truly exceptional errors. A toast with the
     * log message will be displayed and the log will be sent back to the server
     * for posterity.
     */
    public logCritical(message: string, tags: LogTags = {}) {
        const level = LogLevel.Critical;
        this.toast(level, message);
        return this.log(level, message, tags);
    }

    /**
     * A toast with the log message will be displayed and the log will be sent
     * back to the server for posterity.
     */
    public logError(message: string, tags: LogTags = {}) {
        const level = LogLevel.Error;
        this.toast(level, message);
        return this.log(level, message, tags);
    }

    /**
     * A toast with the log message will be displayed and the log will be sent
     * back to the server for posterity.
     */
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
        const strTags: IDict<string> = {};
        Object.entries(tags).forEach(([k, v]) => {
            strTags[k] = v instanceof Object ? JSON.stringify(v) : v ?.toString() ?? "";
        });
        try {
            const response: ILogResult = await postLog({
                level,
                // @ts-ignore
                message: message instanceof Object ? "" : message,
                module: this.module,
                url: window.location.pathname,
                tags: strTags,
            });
            if (!response.success) {
                this.toast(LogLevel.Error, "Failed to send client-side logs to server.");
            }
        } catch (e) {
            this.toast(LogLevel.Error, `Failed to send client-side logs to server: ${e.message}`);
        }
    }

    private toast(level: LogLevel, message: string) {
        if (this.shouldToast) {
            toast(`${level.toUpperCase()}: ${message}`);
        }
    }
}

export const useLogger = (module: string, toConsole = false, shouldToast = false) => {
    const [logger, _] = React.useState(new Logger(module, toConsole, shouldToast));
    return logger;
}
