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
    isNumCol: boolean;
}

export class TableHeader extends React.Component<ITableHeaderProps, {}> {
    public static defaultProps = {
        isNumCol: false,
    };

    public constructor(props: ITableHeaderProps) {
        super(props);
    }

    public render() {
        // TODO: show up or down arrow depending on sorting
        return (
            <th className={ this.props.className + `${this.props.isNumCol ? " num-col" : "" }` }>
                { this.renderContent() }
            </th>
        );
    }

    private renderContent() {
        const text = (
            <a href=""
                onClick={ this.props.onClick }
                className="table-header"
            >
                { this.props.children }
            </a>
        );
        return this.props.isNumCol
            ? (
                <React.Fragment>
                    { this.renderIcon() }
                    { text }
                </React.Fragment>
            ) : (
                <React.Fragment>
                    { text }
                    { this.renderIcon() }
                </React.Fragment>
            )
    }

    private renderIcon() {
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
