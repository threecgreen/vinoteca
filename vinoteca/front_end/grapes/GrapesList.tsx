import * as React from "react";
import { SortingState, TableHeader } from "../../components/TableHeader";
import { GrapeItem } from "./GrapesApp";
import { GrapesListItem } from "./GrapesListItem";

enum SortingValue {
    Name,
    Wine,
}

interface IState {
    ascending: boolean;
    sorting: SortingValue;
}

interface IProps {
    grapes: GrapeItem[];
    onChange: (id: number, name: string) => void;
    handleEdit: (e: React.MouseEvent, id: number) => void;
    handleSave: (e: React.MouseEvent, id: number) => void;
}

export class GrapesList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ascending: true,
            sorting: SortingValue.Name,
        };
    }

    public render() {
        return (
            <table className="responsive highlight condensed">
                <thead>
                    <tr key="headers">
                        <TableHeader sortingState={ this.sortingStateForHeader(SortingValue.Name) }
                            onClick={ (e) => this.onHeaderClick(e, SortingValue.Name) }
                        >
                            Name
                        </TableHeader>
                        <TableHeader sortingState={ this.sortingStateForHeader(SortingValue.Wine) }
                            onClick={ (e) => this.onHeaderClick(e, SortingValue.Wine) }
                            isNumCol
                        >
                            Wines
                        </TableHeader>
                        <th>Edit/Save</th>
                    </tr>
                </thead>
                <tbody>
                    {this.sortedGrapes.map((grape) => {
                        return (
                            <GrapesListItem
                                key={ grape.id }
                                item={ grape }
                                onChange={ this.props.onChange }
                                handleEdit={ this.props.handleEdit }
                                handleSave={ this.props.handleSave }
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }

    private get sortedGrapes() {
        const ascendingMultiplier = this.state.ascending ? 1 : -1;
        switch (this.state.sorting) {
            case SortingValue.Name:
                return this.props.grapes.sort((g1, g2) => {
                    return g1.name.localeCompare(g2.name) * ascendingMultiplier;
                });
            case SortingValue.Wine:
                return this.props.grapes.sort((g1, g2) => {
                    return (g1.wineCount || 0) > (g2.wineCount || 0) ? -ascendingMultiplier : ascendingMultiplier;
                })
            default:
                return this.props.grapes;
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

    private sortingStateForHeader(sortingVal: SortingValue): SortingState {
        if (this.state.sorting === sortingVal) {
            return this.state.ascending ? SortingState.Ascending : SortingState.Descending;
        }
        return SortingState.NotSorted;
    }
}
