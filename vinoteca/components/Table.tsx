import * as React from "react";
import { IChildrenProp } from "./IProps";

export interface IColumnHeader {
    name: string;
    isNumCol?: boolean;
}

interface ITableProps extends IChildrenProp {
    columns: (string | IColumnHeader)[];
}

export const Table: React.FunctionComponent<ITableProps> = (props) => {
    return (
        <table className="highlight responsive condensed">
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
    );
};
