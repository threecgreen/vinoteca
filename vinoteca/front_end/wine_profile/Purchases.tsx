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
                        { purchases.map((purchase) => (
                            <tr key={ purchase.id }>
                                <td>
                                    <Btn classes={ ["btn-small", "yellow-bg"] }
                                        onClick={ (e) => {e.preventDefault(); onEditClick(purchase.id);} }
                                    >
                                        <MaterialIcon iconName="edit" />
                                    </Btn>
                                    <Btn classes={ ["btn-small", "red-bg"] }
                                        onClick={ (e) => {e.preventDefault(); onDeleteClick(purchase.id);} }
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
