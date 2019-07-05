import { format } from "date-fns";
import * as React from "react";
import { capitalizeFirstLetter, numToDate } from "../lib/utils";
import { Wine } from "../lib/RestTypes";

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
    num?: number;
    minDecimals?: number;
    maxDecimals?: number;
}

export const NumCell: React.FunctionComponent<INumCellProps> = (props) => {
    const num = props.num
        // undefined to use browser's locale
        ? props.num.toLocaleString(undefined,
                                   {minimumFractionDigits: props.minDecimals,
                                    maximumFractionDigits: props.maxDecimals})
        : EN_DASH;
    return (
        <td className="num-col">{ num }</td>
    );
};
NumCell.displayName = "NumCell";

interface IPriceCellProps {
    price?: number;
}

export const PriceCell: React.FunctionComponent<IPriceCellProps> = (props) => {
    return (
        <NumCell num={ props.price }
            minDecimals={ 2 }
            maxDecimals={ 2 }
        />
    );
}
PriceCell.displayName = "PriceCell";

export const YearCell: React.FunctionComponent<{year?: number}> = (props) => {
    const year = props.year ? props.year.toString() : EN_DASH;
    return (
        <td className="num-col">
            { year }
        </td>
    );
}
YearCell.displayName = "YearCell";

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

interface ILinkedCellProps {
    id: number;
    model: string;
}

const LinkedCell: React.FunctionComponent<ILinkedCellProps> = (props) => {
    const url = `/${props.model}/${props.id}/`;
    return (
        <td>
            <a href={ url }>
                { props.children }
            </a>
        </td>
    )
}
LinkedCell.displayName = "LinkedCell"

interface INameAndTypeProps {
    id: number;
    nameAndType: string;
    url?: string;
}

export const NameAndTypeCell: React.FunctionComponent<INameAndTypeProps> = (props) => {
    if (props.url) {
        <td>
            <a href={ props.url }>
                { props.nameAndType }
            </a>
        </td>
    }
    return (
        <LinkedCell id={ props.id } model="wines">
            { props.nameAndType }
        </LinkedCell>
    );
};
NameAndTypeCell.displayName = "NameAndTypeCell";

export const ProducerCell: React.FunctionComponent<{id: number}> = (props) => {
    return (
        <LinkedCell id={ props.id } model="producers">
            { props.children }
        </LinkedCell>
    )
}
ProducerCell.displayName = "ProducerCell"

export const RegionCell: React.FunctionComponent<{id: number}> = (props) => {
    return (
        <LinkedCell id={ props.id } model="regions">
            { props.children }
        </LinkedCell>
    )
}
RegionCell.displayName = "RegionCell"

export const VitiAreaCell: React.FunctionComponent<{id?: number}> = (props) => {
    if (!props.id) {
        return <td />;
    }
    return (
        <LinkedCell id={ props.id } model="viti-areas">
            { props.children }
        </LinkedCell>
    )
}
VitiAreaCell.displayName = "VitiAreaCell"
