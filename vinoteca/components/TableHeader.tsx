import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";
import { Input } from "./Input";

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

interface IFilter<T> {
    onFilterChange: (fun: (val: T) => boolean) => void;
}

interface IState {
    text: string;
}

export class FilterHeader<T> extends React.Component<IFilter<T>, IState> {
    public constructor(props: IFilter<T>) {
        super(props);
        this.state = {
            text: "",
        };
    }

    public render() {
        return (
            <td>
                <input type="search"
                    onChange={ this.onChange.bind(this) }
                    value={ this.state.text }
                />
            </td>
        );
    }

    private onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        if (val.substr(0, 2) === "<>" || val.substr(0, 2) === "!=") {
            this.props.onFilterChange((v) => v !== eval(val.substr(3)));
        } else if (val.substr(0, 2) === "==" ) {
            this.props.onFilterChange((v) => v === eval(val.substr(2)));
        } else if (val.substr(0, 1) === "=") {
            this.props.onFilterChange((v) => v === eval(val.substr(1)));
        } else if (val.substr(0, 2) === ">=") {
            this.props.onFilterChange((v) => v >= eval(val.substr(2)));
        } else if (val.substr(0, 2) === "<=") {
            this.props.onFilterChange((v) => v <= eval(val.substr(2)));
        } else if (val.substr(1, 1) == ">") {
            this.props.onFilterChange((v) => v > eval(val.substr(1)));
        } else if (val.substr(1, 1) == "<") {
            this.props.onFilterChange((v) => v < eval(val.substr(1)));
        }
        this.setState({
            text: val,
        });
    }
}
