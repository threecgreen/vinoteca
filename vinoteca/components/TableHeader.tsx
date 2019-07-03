import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";

export enum SortingState {
    NotSorted,
    Ascending,
    Descending,
}

interface ITableHeaderProps {
    className?: string;
    onClick: (e: React.MouseEvent) => void;
    sortingState: SortingState;
}

export class TableHeader extends React.Component<ITableHeaderProps, {}> {
    public constructor(props: ITableHeaderProps) {
        super(props);
    }

    public render() {
        // TODO: show up or down arrow depending on sorting
        return (
            <th className={ this.props.className }>
                { this.renderIcon() }
                <a href=""
                    onClick={ this.props.onClick }
                    className="table-header"
                >
                    { this.props.children }
                </a>
            </th>
        );
    }

    public renderIcon() {
        switch (this.props.sortingState) {
            case SortingState.NotSorted:
                return <MaterialIcon iconName="arrow_drop_down" className="invisible" />;
            case SortingState.Ascending:
                return <MaterialIcon iconName="arrow_drop_down" />;
            case SortingState.Descending:
                return <MaterialIcon iconName="arrow_drop_up" />;
        }
    }
}
