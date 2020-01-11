import format from "date-fns/esm/format";
import * as React from "react";
import { capitalizeFirstLetter, numToDate, getNameAndType } from "../lib/utils";

const EN_DASH: string = "–";

interface ITextCellProps {
    default?: string;
    text: string | undefined | null;
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
    num: number | null;
    minDecimals?: number;
    maxDecimals?: number;
}

export const NumCell: React.FC<INumCellProps> = (props) => {
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
    price: number | null;
}

export const PriceCell: React.FC<IPriceCellProps> = (props) => {
    return (
        <NumCell num={ props.price }
            minDecimals={ 2 }
            maxDecimals={ 2 }
        />
    );
}
PriceCell.displayName = "PriceCell";

export const YearCell: React.FC<{year: number | null}> = (props) => {
    const year = props.year ? props.year.toString() : EN_DASH;
    return (
        <td className="num-col">
            { year }
        </td>
    );
}
YearCell.displayName = "YearCell";

interface IDateCellProps {
    date: number | null;
}
export const DateCell: React.FC<IDateCellProps> = (props) => {
    const dateStr = props.date ? format(numToDate(props.date), "MMM dd, yyyy") : EN_DASH;
    return (
        <td>{ dateStr }</td>
    );
}
DateCell.displayName = "DateCell";

interface IColorCellProps {
    color: string;
}

export const ColorCell: React.FC<IColorCellProps> = (props) => {
    if (props.color) {
        return <td>{ capitalizeFirstLetter(props.color) }</td>;
    }
    return <td />;
};
ColorCell.displayName = "ColorCell";

interface ILinkedCellProps {
    id: number;
    model: string;
}

const LinkedCell: React.FC<ILinkedCellProps> = (props) => {
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
    name: string | null;
    wineType: string;
    url?: string;
}

export const NameAndTypeCell: React.FC<INameAndTypeProps> = (props) => {
    if (props.url) {
        <td>
            <a href={ props.url }>
                { getNameAndType(props.name, props.wineType) }
            </a>
        </td>
    }
    return (
        <LinkedCell id={ props.id } model="wines">
            { getNameAndType(props.name, props.wineType) }
        </LinkedCell>
    );
};
NameAndTypeCell.displayName = "NameAndTypeCell";

export const ProducerCell: React.FC<{id: number}> = (props) => {
    return (
        <LinkedCell id={ props.id } model="producers">
            { props.children }
        </LinkedCell>
    )
}
ProducerCell.displayName = "ProducerCell"

export const RegionCell: React.FC<{id: number}> = (props) => {
    return (
        <LinkedCell id={ props.id } model="regions">
            { props.children }
        </LinkedCell>
    )
}
RegionCell.displayName = "RegionCell"

export const VitiAreaCell: React.FC<{id: number | null}> = (props) => {
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

export const WineTypeCell: React.FC<{id: number}> = (props) => {
    return (
        <LinkedCell id={ props.id } model="wine-types">
            { props.children }
        </LinkedCell>
    );
}
WineTypeCell.displayName = "WineTypeCell";
