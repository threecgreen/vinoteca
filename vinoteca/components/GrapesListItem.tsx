import * as React from "react";

export interface IGrapesListItemProps {
    id: number;
    name: string;
}

export class GrapesListItem extends React.Component<IGrapesListItemProps, {}> {
    public render() {
        return <tr>
            <td></td>
            <td>{ this.props.name }</td>
        </tr>;
    }
}
