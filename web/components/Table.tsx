import React from "react";
import { IChildrenProp } from "./IProps";

export interface IColumnHeader {
    name: string;
    isNumCol?: boolean;
}

export const WineTableNumCols: IColumnHeader[] = [
    { name: "Total Quantity", isNumCol: true },
    { name: "Avg Price", isNumCol: true },
    { name: "Rating", isNumCol: true },
]

interface IProps extends IChildrenProp {
    columns: (string | IColumnHeader)[];
    condensed?: boolean;
}

export const Table: React.FC<IProps> = (props) => {
    const condensed = props.condensed ?? true;
    return (
        <div className="table-wrapper">
            <table className={ `highlight ${condensed ? "condensed" : ""}` }>
                <thead>
                    <tr>
                        { props.columns.map((col) => {
                            if (typeof col === "string") {
                                return <th key={ col }>{ col }</th>
                            }
                            return (
                                <th key={ col.name }
                                    className={ col.isNumCol ? "num-col" : "" }>
                                    { col.name }
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    { props.children }
                </tbody>
            </table>
        </div>
    );
};
Table.displayName = "Table";
