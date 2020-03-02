import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, ProducerCell, RegionCell, YearCell } from "../../components/TableCells";
import { SortingState, TableHeader } from "../../components/TableHeader";
import { IInventoryWine } from "../../lib/Rest";

export enum InventoryChange {
    Increase,
    Decrease
};

enum SortingValue {
    Inventory,
    Color,
    NameAndType,
    Producer,
    Region,
    Vintage,
    PurchaseDate,
    Price,
};

interface IProps {
    wines: IInventoryWine[],
    onInventoryChange: (id: number, change: InventoryChange) => void,
}

interface IState {
    ascending: boolean,
    sorting: SortingValue,
}

export class InventoryTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ascending: true,
            sorting: SortingValue.PurchaseDate,
        };
    }

    public render() {
        return (
            <table className="responsive highlight condensed">
                <thead>
                    <tr>
                        <th>Modify</th>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Inventory)} isNumCol >
                            Inventory
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Color)}>
                            Color
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.NameAndType)}>
                            Name and Type
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Producer)}>
                            Producer
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Region)}>
                            Region
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Vintage)} isNumCol>
                            Vintage
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.PurchaseDate)}>
                            Purchase Date
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Price)} isNumCol>
                            Price
                        </TableHeader>
                    </tr>
                </thead>
                <tbody>
                    { this.sortedWines.map((wine) => {
                        return (
                            <tr key={ wine.id }>
                                <td className="inventory-plus-minus">
                                    <FloatingBtn classes={ ["green-bg", "btn-small"] }
                                        onClick={
                                            () => this.props.onInventoryChange(
                                                wine.id, InventoryChange.Increase
                                            )
                                        }
                                    >
                                        <MaterialIcon iconName="add_circle" />
                                    </FloatingBtn>
                                    <FloatingBtn classes={ ["red-bg", "btn-small"] }
                                        onClick={
                                            () => this.props.onInventoryChange(
                                                wine.id, InventoryChange.Decrease
                                            )
                                        }
                                    >
                                        <MaterialIcon iconName="do_not_disturb_on" />
                                    </FloatingBtn>
                                </td>
                                <NumCell num={ wine.inventory }
                                    maxDecimals={ 0 }
                                />
                                <ColorCell color={ wine.color } />
                                <NameAndTypeCell id={ wine.id }
                                    name={ wine.name }
                                    wineType={wine.wineType}
                                />
                                <ProducerCell id={ wine.producerId }
                                    name={ wine.producer }
                                />
                                <RegionCell id={ wine.regionId }
                                    name={ wine.region }
                                />
                                <YearCell year={ wine.lastPurchaseVintage } />
                                <DateCell date={ wine.lastPurchaseDate } />
                                <PriceCell price={ wine.lastPurchasePrice } />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    private get sortedWines() {
        const ascendingMultiplier = this.state.ascending ? 1 : -1;
        switch (this.state.sorting) {
            case SortingValue.Inventory:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.inventory) > (w2.inventory) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.Color:
                return this.props.wines.sort((w1, w2) => {
                    return w1.color.localeCompare(w2.color) * ascendingMultiplier;
                })
            case SortingValue.NameAndType:
                return this.props.wines.sort((w1, w2) => {
                    // Sort by wineType then name
                    const wineTypeComparison = (w1.wineType ?? "").localeCompare(w2.wineType ?? "") * ascendingMultiplier;
                    if (wineTypeComparison === 0) {
                        // Name comparison
                        if (w1.name && w2.name) {
                            return w1.name.localeCompare(w2.name) * ascendingMultiplier
                        }
                        if (w1.name) {
                            return ascendingMultiplier;
                        }
                        if (w2.name) {
                            return -ascendingMultiplier;
                        }
                    }
                    return wineTypeComparison;
                })
            case SortingValue.Producer:
                return this.props.wines.sort((w1, w2) => {
                    return w1.producer.localeCompare(w2.producer) * ascendingMultiplier;
                })
            case SortingValue.Region:
                return this.props.wines.sort((w1, w2) => {
                    return w1.region.localeCompare(w2.region) * ascendingMultiplier;
                })
            case SortingValue.Vintage:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchaseVintage ?? 0) > (w2.lastPurchaseVintage ?? 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.PurchaseDate:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchaseDate ?? 0) > (w2.lastPurchaseDate ?? 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.Price:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchasePrice ?? 0) > (w2.lastPurchasePrice ?? 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            default:
                return this.props.wines;
        }
    }

    private onHeaderClick(e: React.MouseEvent, sortingVal: SortingValue) {
        e.preventDefault();
        if (sortingVal === this.state.sorting) {
            this.setState((prevState) => ({ascending: !prevState.ascending}));
        } else {
            this.setState({
                ascending: true,
                sorting: sortingVal,
            });
        }
    }

    private tableHeaderProps(sortingVal: SortingValue):
        {sortingState: SortingState, onClick: (e: React.MouseEvent) => void} {

        if (this.state.sorting === sortingVal) {
            const sortingState = this.state.ascending ? SortingState.Ascending : SortingState.Descending;
            return {
                sortingState,
                onClick: (e) => this.onHeaderClick(e, sortingVal),
            };
        }
        return {
            sortingState: SortingState.NotSorted,
            onClick: (e) => this.onHeaderClick(e, sortingVal),
        };
    }
}