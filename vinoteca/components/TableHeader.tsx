import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";

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

interface IFilterProps {
    onChange: (val: string) => void;
    text: string;
}

export const FilterHeader: React.FC<IFilterProps> = (props) => {
    return (
        <td>
            <input type="search"
                onChange={ (e) => props.onChange(e.target.value) }
                value={ props.text }
            />
        </td>
    );
}
FilterHeader.displayName = "FilterHeader";
