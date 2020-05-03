import React from "react";
import Logger from "../lib/Logger";

interface IState {
    hasThrown: boolean
    error: Error | null,
    errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<{}, IState> {
    private readonly logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = {
            hasThrown: false,
            error: null,
            errorInfo: null,
        };
        this.logger = new Logger("ErrorBoundary", false, false);
    }

    public async componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        if (error.message.startsWith("Loading chunk ")) {
            await this.logger.logCritical(`App crashed with loading chunk: ${error.message}.\nReloading...`);
            location.reload();
        } else {
            this.setState({hasThrown: true, error, errorInfo});
            this.logger.logCritical(`App crashed with ${error.message}.\nTraceback: ${error.stack}\nInfo: ${errorInfo.componentStack}`);
        }
    }

    public render() {
        if (this.state.hasThrown) {
            return (
                <div className="container" style={ {maxWidth: "750px"} }>
                    <h3 className="center light">Sorry&hellip;</h3>
                    <h1 className="center bold">
                        <span className="brand-logo">vinoteca</span> has crashed :(
                    </h1>

                    <br />

                    <h4><strong>{ this.state.error?.name }:</strong> { this.state.error?.message }</h4>
                    <h6 className="bold">Traceback</h6>
                    {/* Render \n as newlines */}
                    <p style={ {whiteSpace: "pre-wrap", fontFamily: "monospace"} }>
                        {  this.state.error?.stack }
                    </p>

                    <h6 className="bold">Error info</h6>
                    <p style={ {whiteSpace: "pre-wrap", fontFamily: "monospace"} }>
                        {  this.state.errorInfo?.componentStack }
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}
