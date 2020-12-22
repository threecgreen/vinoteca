import { FloatingBtn } from "components/Buttons";
import { MaterialIcon } from "components/MaterialIcon";
import { NumCell, TextCell } from "components/TableCells";
import { IGrape } from "generated/rest";
import React from "react";

interface IProps {
    grape: IGrape;
    onEditClick: (id: number) => void;
    onDeleteClick: (id: number) => void;
}

export const GrapesListItem: React.FC<IProps> = ({grape, onEditClick, onDeleteClick}) => {
    return (
        <tr>
            <TextCell text={ grape.name } />
            <NumCell num={ grape.wineCount }
                maxDecimals={ 0 }
            />
            <td>
                <FloatingBtn onClick={ () => onEditClick(grape.id) }
                    classes={ ["small", "yellow-bg"] }
                >
                    <MaterialIcon iconName="edit" />
                </FloatingBtn>
            </td>
            <td>
                <FloatingBtn onClick={ () => onDeleteClick(grape.id) }
                    classes={ ["small", "red-bg"] }
                    enabled={ grape.wineCount === 0 }
                >
                    <MaterialIcon iconName="delete" />
                </FloatingBtn>
            </td>
        </tr>
    );
};
GrapesListItem.displayName = "GrapesListItem";
