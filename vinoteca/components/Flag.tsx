import * as React from "react";

interface IFlagProps {
    region: string;
}

interface IFlagState {
    exists: boolean;
}

export class Flag extends React.Component<IFlagProps, IFlagState> {
    constructor(props: IFlagProps) {
        super(props);
        this.state = { exists: false };
    }

    public render() {
        return (
            <img src={ `/static/img/flags/${ this.props.region }.svg` }
                alt={ `Flag of ${this.props.region}` }
                className="circle z-depth-2 img-responsive region-flag"
                onError={ undefined }
            />
        );
    }
}
