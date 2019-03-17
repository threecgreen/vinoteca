import * as React from "react";
import { GrapeItem } from "./GrapesApp";
import { GrapesListItem } from "./GrapesListItem";

interface IGrapesListProps {
    grapes: GrapeItem[];
    onChange: (id: number, name: string) => void;
    handleEdit: (e: React.MouseEvent, id: number) => void;
    handleSave: (e: React.MouseEvent, id: number) => void;
}

export class GrapesList extends React.Component<IGrapesListProps, {}> {
    public render() {
        return <table className="responsive highlight condensed">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit / Save</th>
                </tr>
            </thead>
            <tbody>
                {this.props.grapes.map((grape) => {
                    return (<GrapesListItem key={ grape.id }
                                            id={ grape.id }
                                            name={ grape.name }
                                            isEditable={ grape.isEditable }
                                            onChange={ this.props.onChange }
                                            handleEdit={ this.props.handleEdit }
                                            handleSave={ this.props.handleSave } />);
                })}
            </tbody>
        </table>;
    }
}
