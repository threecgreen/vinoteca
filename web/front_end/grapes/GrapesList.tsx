import { Table } from "components/Table";
import { SortingState, TableHeader } from "components/TableHeader";
import { IGrape } from "generated/rest";
import { compareNums } from "lib/component_utils";
import React from "react";
import { GrapesListItem } from "./GrapesListItem";

enum SortingValue {
    Name,
    Wines,
}

interface IProps {
    grapes: IGrape[];
    onEditClick: (id: number) => void;
    onDeleteClick: (id: number) => void;
}

export const GrapesList: React.FC<IProps> = ({grapes, onEditClick, onDeleteClick}) => {
    const [sortingValue, setSortingValue] = React.useState(SortingValue.Name);
    const [isAscending, setIsAscending] = React.useState(true);

    const sortedGrapes = () => {
        const ascendingMultiplier = isAscending ? 1 : -1;
        switch (sortingValue) {
            case SortingValue.Name:
                return grapes.sort((g1, g2) =>
                    g1.name.localeCompare(g2.name) * ascendingMultiplier);
            case SortingValue.Wines:
                return grapes.sort((g1, g2) =>
                    compareNums(g1.wineCount ?? 0, g2.wineCount ?? 0) * ascendingMultiplier);
            default:
                return grapes;
        }
    };

    const onHeaderClick = (e: React.MouseEvent, clickedHeader: SortingValue) => {
        e.preventDefault();
        if (sortingValue === clickedHeader) {
            setIsAscending(!isAscending);
        } else {
            setIsAscending(true);
            setSortingValue(clickedHeader);
        }
    };

    const sortingStateForHeader = (header: SortingValue): SortingState => {
        if (sortingValue === header) {
            return isAscending ? SortingState.Ascending : SortingState.Descending;
        }
        return SortingState.NotSorted;
    };

    return (
        <Table condensed>
            <thead>
                <tr key="headers">
                    <TableHeader sortingState={ sortingStateForHeader(SortingValue.Name) }
                        onClick={ (e) => onHeaderClick(e, SortingValue.Name) }
                    >
                        Name
                    </TableHeader>
                    <TableHeader sortingState={ sortingStateForHeader(SortingValue.Wines) }
                        onClick={ (e) => onHeaderClick(e, SortingValue.Wines) }
                        isNumCol
                    >
                        Wines
                    </TableHeader>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {sortedGrapes().map((grape) => {
                    return (
                        <GrapesListItem
                            key={ grape.id }
                            grape={ grape }
                            onEditClick={ onEditClick }
                            onDeleteClick={ onDeleteClick }
                        />
                    );
                })}
            </tbody>
        </Table>
    );
};
GrapesList.displayName = "GrapesList";
