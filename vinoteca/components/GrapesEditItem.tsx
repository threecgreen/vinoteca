import * as React from "react";
import { IGrapeItemProps } from "./GrapesList";

export class GrapesEditItem extends React.Component<IGrapeItemProps, {}> {
    public render() {
        const inputId = `grape-name-${this.props.id}`;
        return <tr>
            <td>
                <form id={ `grape-{this.props.id}` }>
                    <input type="text"
                           id={ inputId }
                           onChange={ (e) => this.props.onChange(this.props.id,
                                                                 e.target.value) }
                           value={ this.props.name } />
                    <label htmlFor={ inputId }>Name</label>
                </form>
            </td>
            <td>
                <a href="#" onClick={ () => this.props.handler(this.props.id) }
                   className="waves-effect waves-light btn-floating small green-bg">
                    <i className="material-icons">save</i>
                </a>
            </td>
        </tr>;
    }
}
