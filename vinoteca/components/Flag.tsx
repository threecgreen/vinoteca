import * as React from "react";
import Logger from "../lib/Logger";

interface IFlagProps {
    region: string;
}

interface IFlagState {
    exists: boolean;
}

export class Flag extends React.Component<IFlagProps, IFlagState> {
    public logger: Logger;
    constructor(props: IFlagProps) {
        super(props);
        this.state = { exists: false };
        this.logger = new Logger(this.constructor.name);
    }

    // public componentDidMount() {
    // }

    public render() {
        // if (!this.state.exists) {
        //     return null;
        // }
        return (
            <img src={ `/static/img/flags/${ this.props.region }.svg` }
                alt={ `Flag of ${this.props.region}` }
                className="circle z-depth-2 img-responsive region-flag"
                onError={ undefined }
            />
        );
    }
}
