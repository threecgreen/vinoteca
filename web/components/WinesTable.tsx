import { IWine } from "generated/rest";
import { getNameAndType } from "lib/utils";
import React from "react";
import { Table } from "./Table";
import { ColorCell, NameAndTypeCell, NumCell, ProducerCell, RegionCell, VitiAreaCell,
         YearCell } from "./TableCells";
import { FilterHeader, SelectFilterHeader, SortingState, TableHeader } from "./TableHeader";

export enum WinesTableColumn {
    Inventory,
    Color,
    NameAndType,
    Producer,
    Region,
    VitiArea,
    Vintage,
    Rating,
}

function getProp(wine: IWine, prop: keyof IWine | "nameAndType") {
    if (prop === "nameAndType") {
        return getNameAndType(wine.name, wine.wineType);
    }
    return wine[prop];
}

function columnToKeyOf(column: WinesTableColumn): keyof IWine | "nameAndType" {
    switch (column) {
        case WinesTableColumn.Inventory:
            return "inventory";
        case WinesTableColumn.Color:
            return "color";
        case WinesTableColumn.NameAndType:
            return "nameAndType";
        case WinesTableColumn.Producer:
            return "producer";
        case WinesTableColumn.Region:
            return "region";
        case WinesTableColumn.VitiArea:
            return "vitiArea";
        case WinesTableColumn.Vintage:
            return "lastPurchaseVintage";
        case WinesTableColumn.Rating:
            return "rating";
        default:
            return "nameAndType";
    }
}

export function columnToVal(column: WinesTableColumn, wine: IWine) {
    return getProp(wine, columnToKeyOf(column));
}

export enum ColumnToExclude {
    Producer,
    Region,
    VitiArea,
}

type IProps = {
    wines: IWine[];
    filterTexts?: Map<WinesTableColumn, string>;
    onFilterChange?: (column: WinesTableColumn, text: string) => void;
    excludeColumn?: ColumnToExclude;
} & Partial<DefaultProps>;

interface IState {
    ascending: boolean;
    sorting: WinesTableColumn;
    colorSelection: string;
}

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
    currentPage: 1,
    winesPerPage: 250,
};

export class WinesTable extends React.Component<IProps & DefaultProps, IState> {
    public static defaultProps = defaultProps;

    constructor(props: IProps & DefaultProps) {
        super(props);
        this.state = {
            ascending: true,
            sorting: WinesTableColumn.NameAndType,
            colorSelection: "",
        };
    }

    public render() {
        const filterHeader = this.props.filterTexts
            ? (
                <tr key="filters">
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.Inventory) } />
                    <SelectFilterHeader { ...this.filterHeaderProps(WinesTableColumn.Color) } />
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.NameAndType) } />
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.Producer) } />
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.Region) } />
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.VitiArea) } />
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.Vintage) } />
                    <FilterHeader { ...this.filterHeaderProps(WinesTableColumn.Rating) } />
                </tr>
            ) : null;
        const exCol = this.props.excludeColumn;
        return (
            <Table condensed>
                <thead>
                    <tr key="headers">
                        <TableHeader {...this.tableHeaderProps(WinesTableColumn.Inventory)}
                            isNumCol={ true }
                        >
                            Inventory
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(WinesTableColumn.Color)}>
                            Color
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(WinesTableColumn.NameAndType)}>
                            Name and Type
                        </TableHeader>
                        { exCol === ColumnToExclude.Producer
                            || <TableHeader {...this.tableHeaderProps(WinesTableColumn.Producer)}>
                                Producer
                            </TableHeader> }
                        { exCol === ColumnToExclude.Region
                            || <TableHeader {...this.tableHeaderProps(WinesTableColumn.Region)}>
                                Region
                            </TableHeader> }
                        { exCol === ColumnToExclude.VitiArea
                            || <TableHeader {...this.tableHeaderProps(WinesTableColumn.VitiArea)}>
                                Viticultural Area
                            </TableHeader> }
                        <TableHeader {...this.tableHeaderProps(WinesTableColumn.Vintage)} isNumCol>
                            Vintage
                        </TableHeader>
                        <TableHeader {...this.tableHeaderProps(WinesTableColumn.Rating)} isNumCol>
                            Rating
                        </TableHeader>
                    </tr>
                    { filterHeader }
                </thead>
                <tbody>
                    { this.winesForPage.map((wine) => (
                        <tr key={ wine.id }>
                            <NumCell num={ wine.inventory }
                                maxDecimals={ 0 }
                            />
                            <ColorCell color={ wine.color } />
                            <NameAndTypeCell id={ wine.id }
                                name={ wine.name }
                                wineType={ wine.wineType }
                            />
                            { exCol === ColumnToExclude.Producer
                                || <ProducerCell id={ wine.producerId }
                                    name={ wine.producer }
                                /> }
                            { exCol === ColumnToExclude.Region
                                || <RegionCell id={ wine.regionId }
                                    name={ wine.region }
                                /> }
                            { exCol === ColumnToExclude.VitiArea
                                || <VitiAreaCell id={ wine.vitiAreaId }
                                    name={ wine.vitiArea }
                                /> }
                            <YearCell year={ wine.lastPurchaseVintage } />
                            <NumCell maxDecimals={ 0 } num={ wine.rating } />
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }

    private get winesForPage(): IWine[] {
        const start = (this.props.currentPage - 1) * this.props.winesPerPage;
        const sortedWines = this.sortedWines;
        return sortedWines.slice(start,  Math.min(sortedWines.length,
            start + this.props.winesPerPage));
    }

    private get sortedWines() {
        const ascendingMultiplier = this.state.ascending ? 1 : -1;
        switch (this.state.sorting) {
            case WinesTableColumn.Inventory:
                return this.props.wines.sort((w1, w2) =>
                    (w1.inventory - w2.inventory) * ascendingMultiplier,
                );
            case WinesTableColumn.Color:
                return this.props.wines.sort((w1, w2) =>
                    w1.color.localeCompare(w2.color) * ascendingMultiplier,
                );
            case WinesTableColumn.NameAndType:
                return this.props.wines.sort((w1, w2) => {
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
            case WinesTableColumn.Producer:
                return this.props.wines.sort((w1, w2) =>
                    w1.producer.localeCompare(w2.producer) * ascendingMultiplier,
                );
            case WinesTableColumn.Region:
                return this.props.wines.sort((w1, w2) =>
                    w1.region.localeCompare(w2.region) * ascendingMultiplier,
                );
            case WinesTableColumn.VitiArea:
                return this.props.wines.sort((w1, w2) =>
                    (w1.vitiArea || "").localeCompare(w2.vitiArea || "") * ascendingMultiplier,
                );
            case WinesTableColumn.Vintage:
                // Sort NV first
                return this.props.wines.sort((w1, w2) =>
                    ((w1.lastPurchaseVintage ?? 3000) - (w2.lastPurchaseVintage ?? 3000))
                        * ascendingMultiplier,
                );
            case WinesTableColumn.Rating:
                return this.props.wines.sort((w1, w2) =>
                    ((w1.rating ?? 0) - (w2.rating ?? 0)) * ascendingMultiplier,
                );
            default:
                return this.props.wines;
        }
    }

    private onHeaderClick(e: React.MouseEvent, sortingVal: WinesTableColumn) {
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

    private tableHeaderProps(sortingVal: WinesTableColumn):
        {sortingState: SortingState, onClick: (e: React.MouseEvent) => void} {

        if (this.state.sorting === sortingVal) {
            const sortingState = this.state.ascending
                ? SortingState.Ascending
                : SortingState.Descending;
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
    private filterHeaderProps(columnName: WinesTableColumn):
        {onChange: (text: string) => void,
         text: string} {

        // This should only be called if both props exist
        return {
            onChange: (filterExpr) => this.props.onFilterChange!(columnName, filterExpr),
            text: this.props.filterTexts!.get(columnName) ?? "",
        };
    }
}
