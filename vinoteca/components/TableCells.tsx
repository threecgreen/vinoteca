import { format } from "date-fns";
import * as React from "react";
import { capitalizeFirstLetter, numToDate } from "../lib/utils";

const EN_DASH: string = "–";

interface ITextCellProps {
    default?: string;
    text: string | undefined;
}

export class TextCell extends React.Component<ITextCellProps> {
    public static defaultProps = {
        default: "",
    }

    public render() {
        return <td>{ this.props.text || this.props.default }</td>;
    }
};

interface INumCellProps {
    num: number;
}

export const NumCell: React.FunctionComponent<INumCellProps> = (props) => {
    const num = props.num ? props.num.toString() : EN_DASH;
    return (
        <td className="num-col">{ num }</td>
    );
};
NumCell.displayName = "NumCell";

interface IDateCellProps {
    date?: number;
}
export const DateCell: React.FunctionComponent<IDateCellProps> = (props) => {
    const dateStr = props.date ? format(numToDate(props.date), "MMM DD, YYYY") : EN_DASH;
    return (
        <td>{ dateStr }</td>
    );
}
DateCell.displayName = "DateCell";

interface IColorCellProps {
    color: string;
}

export const ColorCell: React.FunctionComponent<IColorCellProps> = (props) => {
    return <td>{ capitalizeFirstLetter(props.color) }</td>;
};
ColorCell.displayName = "ColorCell";

interface INameAndTypeProps {
    id: number;
    name: string | undefined;
    wineType: string;
    url?: string;
}

export const NameAndTypeCell: React.FunctionComponent<INameAndTypeProps> = (props) => {
    const url = props.url || `/wines/${props.id}/`;
    return (
        <td>
            <a href={ url }>{ props.name || "" } { props.wineType }</a>
        </td>
    );
};
NameAndTypeCell.displayName = "NameAndTypeCell";
