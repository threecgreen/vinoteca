import * as React from "react";
import { GrapeItem } from "./GrapesApp";
import { GrapesEditItem } from "./GrapesEditItem";
import { GrapesListItem } from "./GrapesListItem";

export interface IGrapesListProps {
    grapes: GrapeItem[];
    onChange: (id: number, name: string) => void;
    handleEdit: (id: number) => void;
    handleSave: (id: number) => void;
}

export interface IGrapeItemProps extends GrapeItem {
    handler: (id: number) => void;
    onChange: (id: number, name: string) => void;
}

export class GrapesList extends React.Component<IGrapesListProps, {}> {
    public render() {
        return <table className="highlight responsive-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit / Save</th>
                </tr>
            </thead>
            <tbody>
                {this.props.grapes.map((grape) => {
                    if (grape.isEditable) {
                        return (<GrapesEditItem key={grape.id}
                                                id={grape.id}
                                                name={grape.name}
                                                isEditable={grape.isEditable}
                                                onChange={this.props.onChange}
                                                handler={this.props.handleSave} />);
                    } else {
                        return (<GrapesListItem key={grape.id}
                                                id={grape.id}
                                                name={grape.name}
                                                isEditable={grape.isEditable}
                                                onChange={this.props.onChange}
                                                handler={this.props.handleEdit} />);
                    }

                })}
            </tbody>
        </table>;
    }
}
