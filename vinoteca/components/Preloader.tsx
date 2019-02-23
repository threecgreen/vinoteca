import * as React from "react";

export class Preloader extends React.Component {
    public render() {
        return <div className="progress">
            <div className="indeterminate"></div>
        </div>;
    }
}
