import React from "react";
import { IPurchase } from "../../lib/Rest";
import { SortingState, TableHeader } from "../../components/TableHeader";
import { DateCell, NumCell, PriceCell, YearCell, TextCell } from "../../components/TableCells";
import { Row, Col } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Btn } from "../../components/Buttons";

enum SortingValue {
    Date,
    Quantity,
    Price,
    Vintage,
    Store,
    Memo,
}

interface IProps {
    purchases: IPurchase[];
    onEditClick: (id: number) => void;
    onDeleteClick: (id: number) => void;
}

export const Purchases: React.FC<IProps> = ({purchases, onEditClick, onDeleteClick}) => {
    const [ascending, setAscending] = React.useState(false);
    const [sorting, setSorting] = React.useState(SortingValue.Date);

    const onHeaderClick = (event: React.MouseEvent, sortingVal: SortingValue) => {
        event.preventDefault();
        if (sortingVal === sorting) {
            setAscending(!ascending);
        } else {
            setSorting(sortingVal);
            setAscending(false);
        }
    }
    const tableHeaderProps = (sortingVal: SortingValue) => {
        if (sorting === sortingVal) {
            const sortingState = ascending ? SortingState.Ascending : SortingState.Descending;
            return {
                sortingState,
                onClick: (e: React.MouseEvent) => onHeaderClick(e, sortingVal),
            };
        }
        return {
            sortingState: SortingState.NotSorted,
            onClick: (e: React.MouseEvent) => onHeaderClick(e, sortingVal),
        };
    }

    const compareDates = (left: Date, right: Date): number => {
        return left.getTime() - right.getTime();
    }

    const sortedPurchases = () => {
        const ascendingMultiplier = ascending ? 1 : -1;
        const defaultDate = new Date('1970-01-01');
        switch (sorting) {
            case SortingValue.Date:
                return purchases.sort((p1, p2) =>
                    compareDates(p1.date ? new Date(p1.date) : defaultDate,
                                 p2.date ? new Date(p2.date) : defaultDate) * ascendingMultiplier);
            case SortingValue.Memo:
                return purchases.sort((p1, p2) => ((p1.memo ?? "").localeCompare(p2.memo ?? "")) * ascendingMultiplier);
            case SortingValue.Price:
                return purchases.sort((p1, p2) => ((p1.price ?? 0) - (p2.price ?? 0)) * ascendingMultiplier);
            case SortingValue.Quantity:
                return purchases.sort((p1, p2) => ((p1.quantity ?? 0) - (p2.quantity ?? 0)) * ascendingMultiplier);
            case SortingValue.Store:
                return purchases.sort((p1, p2) => ((p1.store ?? "").localeCompare(p2.store ?? "")) * ascendingMultiplier);
            case SortingValue.Vintage:
                // Sort NV first
                return purchases.sort((p1, p2) => ((p1.vintage ?? 3000) - (p2.vintage ?? 3000)) * ascendingMultiplier);
            default:
                return purchases;
        }
    }

    if (purchases) {
        return (
            <>
                <table className="responsive highlight">
                    <thead>
                        <tr>
                            <TableHeader sortingState={ SortingState.NotSorted }
                                onClick={ () => null }
                            >
                                Modify
                            </TableHeader>
                            <TableHeader {...tableHeaderProps(SortingValue.Date)}>
                                Date
                            </TableHeader>
                            <TableHeader {...tableHeaderProps(SortingValue.Quantity)}
                                isNumCol
                            >
                                Quantity
                            </TableHeader>
                            <TableHeader {...tableHeaderProps(SortingValue.Price)}
                                isNumCol
                            >
                                Price
                            </TableHeader>
                            <TableHeader {...tableHeaderProps(SortingValue.Vintage)}
                                isNumCol
                            >
                                Vintage
                            </TableHeader>
                            <TableHeader {...tableHeaderProps(SortingValue.Store)}>
                                Store
                            </TableHeader>
                            <TableHeader {...tableHeaderProps(SortingValue.Memo)}>
                                Memo
                            </TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        { sortedPurchases().map((purchase) => (
                            <tr key={ purchase.id }>
                                <td>
                                    <Btn classes={ ["btn-small", "yellow-bg"] }
                                        onClick={ () => onEditClick(purchase.id) }
                                    >
                                        <MaterialIcon iconName="edit" />
                                    </Btn>
                                    <Btn classes={ ["btn-small", "red-bg"] }
                                        onClick={ () => onDeleteClick(purchase.id) }
                                    >
                                        <MaterialIcon iconName="delete" />
                                    </Btn>
                                </td>
                                <DateCell date={ purchase.date } />
                                <NumCell num={ purchase.quantity }
                                    maxDecimals={ 0 }
                                />
                                <PriceCell price={ purchase.price } />
                                <YearCell year={ purchase.vintage } />
                                <TextCell text={ purchase.store } />
                                <TextCell text={ purchase.memo } />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
    return (
        <Row>
            <Col s={ 12 }>
                <h5>No previously recorded purchases</h5>
            </Col>
        </Row>
    )
};
Purchases.displayName = "Purchases";
