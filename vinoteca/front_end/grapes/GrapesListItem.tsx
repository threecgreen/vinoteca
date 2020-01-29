import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { MaterialIcon } from "../../components/MaterialIcon";
import { NumCell, TextCell } from "../../components/TableCells";
import { IGrape } from "../../lib/Rest";

interface IProps {
    grape: IGrape;
    onEditClick: (id: number) => void;
}

export const GrapesListItem: React.FC<IProps> = ({grape, onEditClick}) => {
    const handleEdit = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onEditClick(grape.id);
    }

    return (
        <tr>
            <TextCell text={ grape.name } />
            <NumCell num={ grape.wineCount }
                maxDecimals={ 0 }
            />
            <td>
                <FloatingBtn onClick={ handleEdit }
                    classes={ ["small", "red-bg"] }
                >
                    <MaterialIcon iconName="edit" />
                </FloatingBtn>
            </td>
        </tr>
    );
}
GrapesListItem.displayName = GrapesListItem.name;
