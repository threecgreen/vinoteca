import * as React from "react";
import { FloatingBtn } from "../../components/FloatingBtn";
import { GrapeItem } from "./GrapesApp";
import { MaterialIcon } from "../../components/MaterialIcon";

interface IGrapeItemProps extends GrapeItem {
    onChange: (id: number, name: string) => void;
    handleEdit: (e: React.MouseEvent, id: number) => void;
    handleSave: (e: React.MouseEvent, id: number) => void;
}

export class GrapesListItem extends React.Component<IGrapeItemProps, {}> {
    public renderItem() {
        return `${ this.props.name }`;
    }

    public renderEdit() {
        const inputId = `grape-name-${this.props.id}`;
        return <form id={ `grape-${this.props.id}` }>
                <input type="text"
                       id={ inputId }
                       onChange={ (e) => this.props.onChange(this.props.id,
                                                             e.target.value) }
                       value={ this.props.name } />
                <label htmlFor={ inputId }>Name</label>
        </form>;
    }

    public renderButton() {
        if (this.props.isEditable) {
            return <FloatingBtn onClick={ (e) => this.props.handleSave(e, this.props.id) }
                                classes={ ["small", "green-bg"] }>
                        <MaterialIcon iconName="save" />
                    </FloatingBtn>;
        }
        return <FloatingBtn onClick={ (e) => this.props.handleEdit(e, this.props.id) }
                            classes={ ["small", "red-bg"] }>
                    <MaterialIcon iconName="edit" />
                </FloatingBtn>;
    }

    public render() {
        return <tr>
            <td>
                { this.props.isEditable ? this.renderEdit() : this.renderItem() }
            </td>
            <td>{ this.renderButton() }</td>
        </tr>;
    }
}
