import { FloatingBtn } from "components/Buttons";
import { MaterialIcon } from "components/MaterialIcon";
import { TextCell } from "components/TableCells";
import { IRestModel } from "lib/api/common";
import React from "react";

interface IProps {
    record: IRestModel;
    onEditClick: (id: number) => void;
    onDeleteClick: (id: number) => void;
}

export const ListItem: React.FC<IProps> = ({record, onEditClick, onDeleteClick}) => (
    <tr>
        <TextCell text={ record.name } />
        <td>
            <FloatingBtn onClick={ () => onEditClick(record.id) }
                classes={ ["small", "yellow-bg"] }
            >
                <MaterialIcon iconName="edit" />
            </FloatingBtn>
        </td>
        <td>
            <FloatingBtn onClick={ () => onDeleteClick(record.id) }
                classes={ ["small", "red-bg"] }
            >
                <MaterialIcon iconName="delete" />
            </FloatingBtn>
        </td>
    </tr>
);
ListItem.displayName = "ListItem";
