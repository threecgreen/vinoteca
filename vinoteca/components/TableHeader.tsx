import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";
import Logger from "../lib/Logger";
import FilterExpr from "../lib/FilterExpr";

export enum SortingState {
    NotSorted,
    Ascending,
    Descending,
}

interface IProps {
    className?: string;
    onClick: (e: React.MouseEvent) => void;
    sortingState: SortingState;
    isNumCol: boolean;
}

export class TableHeader extends React.Component<IProps> {
    public static defaultProps = {
        isNumCol: false,
    };

    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <th className={ (this.props.className || "") + `${this.props.isNumCol ? " num-col" : "" }` }>
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
                <>
                    { this.renderIcon() }
                    { text }
                </>
            ) : (
                <>
                    { text }
                    { this.renderIcon() }
                </>
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

interface IFilter {
    onFilterChange: (filter: FilterExpr) => void;
    onEmptyFilter: () => void;
}

interface IState {
    text: string;
}

export class FilterHeader extends React.Component<IFilter, IState> {
    private readonly logger: Logger;

    public constructor(props: IFilter) {
        super(props);
        this.state = {
            text: "",
        };
        this.logger = new Logger(this.constructor.name);
    }

    public render() {
        return (
            <td>
                <input type="search"
                    onChange={ (e) => this.onChange(e) }
                    value={ this.state.text }
                />
            </td>
        );
    }

    private onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value.toLowerCase();
        if (!val.trim()) {
            this.props.onEmptyFilter();
        }
        try {
            this.props.onFilterChange(FilterExpr.parse(val));
        } catch (exception) {
            this.logger.logInfo(`Error evaluating filter expression: ${exception}`)
        }
        this.setState({ text: val});
    }
}
