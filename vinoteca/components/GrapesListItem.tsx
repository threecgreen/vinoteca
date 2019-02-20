import * as React from "react";
import { IGrapeItemProps } from "./GrapesList";

export class GrapesListItem extends React.Component<IGrapeItemProps, {}> {
    public render() {
        return <tr>
            <td>{ this.props.name }</td>
            <td>
                <a href="#" onClick={ () => this.props.handler(this.props.id) }
                   className="waves-effect waves-light btn-floating small green-bg">
                    <i className="material-icons">edit</i>
                </a>
            </td>
        </tr>;
    }
}
