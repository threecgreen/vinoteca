import * as React from "react";

interface IMaterializeIconProps {
    iconName: string;
}

export class MaterialIcon extends React.Component<IMaterializeIconProps, {}> {
    public render() {
        return <i className="material-icons">{ this.props.iconName }</i>;
    }
}
