import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { GrapeItem } from "./GrapesApp";
import { MaterialIcon } from "../../components/MaterialIcon";
import { NumCell } from "../../components/TableCells";

interface IGrapeItemProps {
    item: GrapeItem;
    onChange: (id: number, name: string) => void;
    handleEdit: (e: React.MouseEvent, id: number) => void;
    handleSave: (e: React.MouseEvent, id: number) => void;
}

export class GrapesListItem extends React.Component<IGrapeItemProps, {}> {
    public renderItem() {
        return `${ this.props.item.name }`;
    }

    public renderEdit() {
        const inputId = `grape-name-${this.props.item.id}`;
        return <form id={ `grape-${this.props.item.id}` }>
                <input type="text"
                       id={ inputId }
                       onChange={ (e) => this.props.onChange(this.props.item.id,
                                                             e.target.value) }
                       value={ this.props.item.name } />
                <label htmlFor={ inputId }>Name</label>
        </form>;
    }

    public renderButton() {
        if (this.props.item.isEditable) {
            return (
                <FloatingBtn onClick={ (e) => this.props.handleSave(e, this.props.item.id) }
                    classes={ ["small", "green-bg"] }
                >
                    <MaterialIcon iconName="save" />
                </FloatingBtn>
            );
        }
        return (
            <FloatingBtn onClick={ (e) => this.props.handleEdit(e, this.props.item.id) }
                classes={ ["small", "red-bg"] }
            >
            <MaterialIcon iconName="edit" />
            </FloatingBtn>
        );
    }

    public render() {
        return (
            <tr>
                <td>
                    { this.props.item.isEditable ? this.renderEdit() : this.renderItem() }
                </td>
                <NumCell num={ this.props.item.wines } />
                <td>{ this.renderButton() }</td>
            </tr>
        );
    }
}
