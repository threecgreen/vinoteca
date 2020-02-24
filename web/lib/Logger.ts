import { post } from "./ApiHelper";
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
    public logCritical(message: string) {
        const level = LogLevel.Critical;
        this.toast(level, message);
        return this.log(level, message);
    }

    /**
     * A toast with the log message will be displayed and the log will be sent
     * back to the server for posterity.
     */
    public logError(message: string) {
        const level = LogLevel.Error;
        this.toast(level, message);
        return this.log(level, message);
    }

    /**
     * A toast with the log message will be displayed and the log will be sent
     * back to the server for posterity.
     */
    public logWarning(message: string) {
        const level = LogLevel.Warning;
        this.toast(level, message);
        return this.log(level, message);
    }

    public logInfo(message: string) {
        return this.log(LogLevel.Info, message);
    }

    public logDebug(message: string) {
        return this.log(LogLevel.Debug, message);
    }

    private async log(level: LogLevel, message: string) {
        if (this.toConsole) {
            console.log(`${level.toUpperCase()} ${new Date()} ${this.module}: ${message}`);
        }
        const response: ILogResult = await post("/rest/logs", {
            level,
            // @ts-ignore
            message: message instanceof Object ? "" : message,
            module: this.module,
            url: window.location.pathname,
        });
        if (!response.success) {
            this.toast(LogLevel.Error, "Failed to send client-side logs to server.");
        }
    }

    private toast(level: LogLevel, message: string) {
        if (this.shouldToast) {
            toast(`${level.toUpperCase()}: ${message}`);
        }
    }
}
