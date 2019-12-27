import * as React from "react";
import { ColorCell, NameAndTypeCell, NumCell, ProducerCell, RegionCell, VitiAreaCell, YearCell } from "../../components/TableCells";
import { FilterHeader, SortingState, TableHeader } from "../../components/TableHeader";
import { Wine } from "../../lib/RestTypes";
import FilterExpr from "../../lib/FilterExpr";

enum SortingValue {
    Inventory,
    Color,
    NameAndType,
    Producer,
    Region,
    VitiArea,
    Vintage,
    Rating
};

interface IProps {
    wines: Wine[];
    predicates: Map<keyof Wine, FilterExpr>;
    onFilterChange: (column: keyof Wine, filterExpr: FilterExpr) => void;
    onEmptyFilter: (columnName: keyof Wine) => void;
    currentPage: number;
    winesPerPage: number;
}

interface IState {
    ascending: boolean;
    sorting: SortingValue;
    colorSelection: string;
}

export class WinesTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ascending: true,
            sorting: SortingValue.NameAndType,
            colorSelection: "",
        };
    }

    public render() {
        return (
            <table className="responsive highlight condensed">
                <thead>
                    <tr key="headers">
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
                        <TableHeader {...this.tableHeaderProps(SortingValue.VitiArea)}>
                            Viticultural Area
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Vintage)} isNumCol>
                            Vintage
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(SortingValue.Rating)} isNumCol>
                            Rating
                        </TableHeader>
                    </tr>
                    <tr key="filters">
                        <FilterHeader { ...this.filterHeaderProps("inventory") } />
                        <FilterHeader { ...this.filterHeaderProps("color") } />
                        <FilterHeader { ...this.filterHeaderProps("nameAndType") } />
                        <FilterHeader { ...this.filterHeaderProps("producer") } />
                        <FilterHeader { ...this.filterHeaderProps("region") } />
                        <FilterHeader { ...this.filterHeaderProps("vitiArea") } />
                        <FilterHeader { ...this.filterHeaderProps("vintage") } />
                        <FilterHeader { ...this.filterHeaderProps("rating") } />
                    </tr>
                </thead>
                <tbody>
                    { this.winesForPage.map((wine) => {
                        return (
                            <tr key={ wine.id }>
                                <NumCell num={ wine.inventory }
                                    maxDecimals={ 0 }
                                />
                                <ColorCell color={ wine.color } />
                                <NameAndTypeCell id={ wine.id }
                                    nameAndType={ wine.nameAndType }
                                />
                                <ProducerCell id={ wine.producerId }>
                                    { wine.producer }
                                </ProducerCell>
                                <RegionCell id={ wine.regionId }>
                                    { wine.region }
                                </RegionCell>
                                <VitiAreaCell id={ wine.vitiAreaId }>
                                    { wine.vitiArea }
                                </VitiAreaCell>
                                <YearCell year={ wine.vintage } />
                                <NumCell maxDecimals={ 0 } num={ wine.rating } />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    private get winesForPage(): Wine[] {
        const start = (this.props.currentPage - 1) * this.props.winesPerPage;
        const sortedWines = this.sortedWines;
        return sortedWines.slice(start,  Math.min(sortedWines.length,
            start + this.props.winesPerPage));
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
                    const wineTypeComparison = w1.wineType.localeCompare(w2.wineType) * ascendingMultiplier;
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
            case SortingValue.VitiArea:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.vitiArea || "").localeCompare(w2.vitiArea || "") * ascendingMultiplier;
                })
            case SortingValue.Vintage:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.vintage || 0) > (w2.vintage || 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.Rating:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.rating || 0) > (w2.rating || 0) ? -ascendingMultiplier : ascendingMultiplier;
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

    // Constructs props for a filter header
    private filterHeaderProps(columnName: keyof Wine):
        {onFilterChange: (filterExpr: FilterExpr) => void,
         onEmptyFilter: () => void
         initialText?: string} {

        return {
            onFilterChange: (filterExpr) => this.props.onFilterChange(columnName, filterExpr),
            onEmptyFilter: () => this.props.onEmptyFilter(columnName),
            initialText: this.props.predicates.get(columnName)?.toString(),
        };
    }
}
