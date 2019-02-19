import * as React from "react";
import { GrapesListItem, IGrapesListItemProps } from "./GrapesListItem";

export interface IGrapesListProps {
    grapes: IGrapesListItemProps[];
}

export class GrapesList extends React.Component<IGrapesListProps, {}> {
    public render() {
        return <table className="highlight responsive-table" hidden>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {this.props.grapes.map((grape) => {
                return (<GrapesListItem id={grape.id} name={grape.name} key={grape.id} />);
            })}
        </tbody>
    </table>;
    }
}
