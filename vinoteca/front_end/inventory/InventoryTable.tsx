import * as React from "react";
import { Wine } from "../../lib/RestTypes";
import { SortingState, TableHeader } from "../../components/TableHeader";

enum InventoryChange {
    Increase,
    Decrease
};

enum SortingValue {
    Quantity,
    Color,
    NameAndType,
    Producer,
    Region,
    Vintage,
    PurchaseDate,
    Price,
};

interface IProps {
    wines: Wine[],
    onInventoryChange: (e: React.MouseEvent, id: number, change: InventoryChange) => void,
}

interface IState {
    ascending: boolean,
    sorting: SortingValue,
}

export class InventoryTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ascending: false,
            sorting: SortingValue.PurchaseDate,
        };
    }

    public render() {
        return (
            <table className="responsive highlight condensed">
                <thead>
                    <tr>
                        <TableHeader >

                        </TableHeader>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
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

    public tableHeaderProps(sortingVal: SortingValue):
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
