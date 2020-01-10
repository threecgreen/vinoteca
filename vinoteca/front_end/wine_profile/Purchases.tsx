import React from "react";
import { IPurchase } from "../../lib/Rest";
import { SortingState, TableHeader } from "../../components/TableHeader";
import { DateCell, NumCell, PriceCell, YearCell, TextCell } from "../../components/TableCells";
import { Row, Col } from "../../components/Grid";

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
}

export const Purchases: React.FC<IProps> = ({purchases}) => {
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
    // TODO: floating action buttons
    if (purchases) {
        return (
            <Row>
                <Col s={ 12 }>
                    <h4>Purchases</h4>
                    <table className="responsive highlight">
                        <thead>
                            <tr>
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
                                    <DateCell date={ purchase.date } />
                                    <NumCell num={ purchase.quantity }
                                        maxDecimals={ 0 }
                                    />
                                    <PriceCell price={ purchase.price } />
                                    <YearCell year={ purchase.vintage } />
                                    {/* TODO: Link to store page */}
                                    <TextCell text={ `${purchase.storeId}` } />
                                    <TextCell text={ purchase.memo } />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
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
