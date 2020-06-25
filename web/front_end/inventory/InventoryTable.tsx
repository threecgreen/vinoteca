import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Table } from "../../components/Table";
import { ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, ProducerCell,
         RegionCell, YearCell } from "../../components/TableCells";
import { SortingState, TableHeader } from "../../components/TableHeader";
import { IInventoryWine } from "../../lib/api/Rest";
import { deserializeDate } from "../../lib/date";
import { useLocalStorageReducer } from "../../lib/local_storage";

const LOCAL_STORAGE_KEY = "InventoryTableSorting";

export enum InventoryChange {
    Increase,
    Decrease,
}

enum SortingValue {
    Inventory,
    Color,
    NameAndType,
    Producer,
    Region,
    Vintage,
    PurchaseDate,
    Price,
}

interface IProps {
    wines: IInventoryWine[];
    onInventoryChange: (id: number, change: InventoryChange) => void;
}

interface IState {
    ascending: boolean;
    sorting: SortingValue;
}

type Action =
    | { type: "setAscending", ascending: boolean }
    | { type: "setSorting", sorting: SortingValue };

const reducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setAscending":
            return { ...state, ascending: action.ascending };
        case "setSorting":
            return {
                ...state,
                sorting: action.sorting,
                // Default to descending with dates, otherwise ascending
                ascending: action.sorting !== SortingValue.PurchaseDate
                    && action.sorting !== SortingValue.Vintage,
            };
        default:
            return state;
    }
};

export const InventoryTable: React.FC<IProps> = ({ wines, onInventoryChange }) => {
    const [state, dispatch] = useLocalStorageReducer(LOCAL_STORAGE_KEY, reducer,
        () => ({ ascending: false, sorting: SortingValue.PurchaseDate }));

    // TODO: combine with WinesTable logic
    const getSortedWines = () => {
        const ascendingMultiplier = state.ascending ? 1 : -1;
        switch (state.sorting) {
            case SortingValue.Inventory:
                return wines.sort((w1, w2) => {
                    return w1.inventory - w2.inventory * ascendingMultiplier;
                });
            case SortingValue.Color:
                return wines.sort((w1, w2) => {
                    return w1.color.localeCompare(w2.color) * ascendingMultiplier;
                });
            case SortingValue.NameAndType:
                return wines.sort((w1, w2) => {
                    // Sort by wineType then name
                    const wineTypeComparison = (w1.wineType ?? "").localeCompare(w2.wineType ?? "")
                        * ascendingMultiplier;
                    if (wineTypeComparison === 0) {
                        // Name comparison
                        if (w1.name && w2.name) {
                            return w1.name.localeCompare(w2.name) * ascendingMultiplier;
                        }
                        if (w1.name) {
                            return ascendingMultiplier;
                        }
                        if (w2.name) {
                            return -ascendingMultiplier;
                        }
                    }
                    return wineTypeComparison;
                });
            case SortingValue.Producer:
                return wines.sort((w1, w2) => {
                    return w1.producer.localeCompare(w2.producer) * ascendingMultiplier;
                });
            case SortingValue.Region:
                return wines.sort((w1, w2) => {
                    return w1.region.localeCompare(w2.region) * ascendingMultiplier;
                });
            case SortingValue.Vintage:
                return wines.sort((w1, w2) => {
                    // Sort NV firt
                    return (w1.lastPurchaseVintage ?? 3000) - (w2.lastPurchaseVintage ?? 3000)
                        * ascendingMultiplier;
                });
            case SortingValue.PurchaseDate:
                return wines.sort((w1, w2) => {
                    // Wines with NULL purchase date should be considered the
                    // least recent
                    const defaultDateStr = "1900-01-01";
                    const date1 = w1.lastPurchaseDate ?? new Date(defaultDateStr);
                    const date2 = w2.lastPurchaseDate ?? new Date(defaultDateStr);
                    return (date1.getTime() - date2.getTime()) * ascendingMultiplier;
                });
            case SortingValue.Price:
                return wines.sort((w1, w2) => {
                    return (w1.lastPurchasePrice ?? 0) - (w2.lastPurchasePrice ?? 0)
                        * ascendingMultiplier;
                });
            default:
                return wines;
        }
    };

    const onHeaderClick = (e: React.MouseEvent, sorting: SortingValue) => {
        e.preventDefault();
        if (sorting === state.sorting) {
            dispatch({ type: "setAscending", ascending: !state.ascending });
        } else {
            dispatch({ type: "setSorting", sorting });
        }
    };

    const getTableHeaderProps = (sortingVal: SortingValue):
        { sortingState: SortingState, onClick: (e: React.MouseEvent) => void } => {

        if (state.sorting === sortingVal) {
            const sortingState = state.ascending ? SortingState.Ascending : SortingState.Descending;
            return {
                sortingState,
                onClick: (e) => onHeaderClick(e, sortingVal),
            };
        }
        return {
            sortingState: SortingState.NotSorted,
            onClick: (e) => onHeaderClick(e, sortingVal),
        };
    };

    return (
        <Table condensed>
            <thead>
                <tr>
                    <th>Modify</th>
                    <TableHeader {...getTableHeaderProps(SortingValue.Inventory)} isNumCol >
                        Inventory
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.NameAndType)}>
                        Name and Type
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.Color)}>
                        Color
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.Producer)}>
                        Producer
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.Region)}>
                        Region
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.Vintage)} isNumCol>
                        Vintage
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.PurchaseDate)}>
                        Purchase Date
                    </TableHeader>
                    <TableHeader {...getTableHeaderProps(SortingValue.Price)} isNumCol>
                        Price
                    </TableHeader>
                </tr>
            </thead>
            <tbody>
                {getSortedWines().map((wine) => {
                    return (
                        <tr key={wine.id}>
                            <td className="inventory-plus-minus">
                                <FloatingBtn classes={["green-bg", "btn-small"]}
                                    onClick={
                                        () => onInventoryChange(
                                            wine.id, InventoryChange.Increase,
                                        )
                                    }
                                >
                                    <MaterialIcon iconName="add_circle" />
                                </FloatingBtn>
                                <FloatingBtn classes={["red-bg", "btn-small"]}
                                    onClick={
                                        () => onInventoryChange(
                                            wine.id, InventoryChange.Decrease,
                                        )
                                    }
                                >
                                    <MaterialIcon iconName="do_not_disturb_on" />
                                </FloatingBtn>
                            </td>
                            <NumCell num={wine.inventory}
                                maxDecimals={0}
                            />
                            <NameAndTypeCell id={wine.id}
                                name={wine.name}
                                wineType={wine.wineType}
                            />
                            <ColorCell color={wine.color} />
                            <ProducerCell id={wine.producerId}
                                name={wine.producer}
                            />
                            <RegionCell id={wine.regionId}
                                name={wine.region}
                            />
                            <YearCell year={wine.lastPurchaseVintage} />
                            <DateCell date={wine.lastPurchaseDate} />
                            <PriceCell price={wine.lastPurchasePrice} />
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
InventoryTable.displayName = "InventoryTable";
