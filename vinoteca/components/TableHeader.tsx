import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";
import { SelectInput } from "./SelectInput";
import { ColorInput, useColorsSelect } from "./ColorInput";
import Logger from "../lib/Logger";

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
            case SortingState.Ascending:
                return <MaterialIcon iconName="arrow_drop_up" />;
            case SortingState.Descending:
                return <MaterialIcon iconName="arrow_drop_down" />;
            default:
                return <MaterialIcon iconName="arrow_drop_down" className="invisible" />;
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

export const SelectFilterHeader: React.FC<IFilterProps> = (props) => {
    const extraChoice = "Any";
    const logger = new Logger(SelectFilterHeader.name);

    const onChange = (selection: string) => {
        if (selection === extraChoice) {
            props.onChange("");
        } else {
            props.onChange(selection);
        }
    };
    const selection = props.text === "" ? extraChoice : props.text;

    const [selectionOptions, selectRef] = useColorsSelect(logger, extraChoice);

    return (
        <td>
            <SelectInput name=""
                selectRef={ selectRef }
                options={ selectionOptions }
                selection={ selection }
                onChange={ onChange }
            />
        </td>
    );
}
SelectFilterHeader.displayName = SelectFilterHeader.name;
