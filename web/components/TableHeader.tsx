import { IColor } from "generated/rest";
import { getColors } from "lib/api/colors";
import { useLogger } from "lib/Logger";
import { capitalizeFirstLetter } from "lib/utils";
import React, { ReactElement } from "react";
import { SelectInput } from "./inputs/SelectInput";
import { IChildrenProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";

export enum SortingState {
    NotSorted,
    Ascending,
    Descending,
}

interface IProps extends IChildrenProp {
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

    public render(): ReactElement {
        return (
            <th className={ (this.props.className || "") + `${this.props.isNumCol
                    ? " num-col"
                    : "" }`
                }
            >
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
            );
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
};
FilterHeader.displayName = "FilterHeader";

export const SelectFilterHeader: React.FC<IFilterProps> = (props) => {
    const logger = useLogger("SelectFilterHeader");
    const [colors, setColors] = React.useState<string[]>([]);

    React.useEffect(() => {
        void (async () => {
            try {
                const rawColors: IColor[] = await getColors({});
                setColors(rawColors.map((color) => color.name));
            } catch (e) {
                logger.logException("Failed to get colors", e);
            }
        })();
    }, [logger]);

    return (
        <td>
            <SelectInput name=""
                selection={ props.text }
                onChange={ props.onChange }
            >
                <option key="any" value="">Any</option>
                { colors.map((color) => (
                    <option key={ color } value={ color }>{ capitalizeFirstLetter(color) }</option>
                )) }
            </SelectInput>
        </td>
    );
};
SelectFilterHeader.displayName = "SelectFilterHeader";
