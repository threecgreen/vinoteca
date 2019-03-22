import * as React from "react";
import { capitalizeFirstLetter } from "../lib/utils";
import { SourceMapDevToolPlugin } from "webpack";

// TODO: use children here instead of a normal prop
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

// TODO: default to en dash
export const NumCell: React.FunctionComponent<INumCellProps> = (props) => {
    return <td className="num-col">{ props.num.toString() }</td>;
};

interface IColorCellProps {
    color: string;
}

export const ColorCell: React.FunctionComponent<IColorCellProps> = (props) => {
    return <td>{ capitalizeFirstLetter(props.color) }</td>;
};

interface INameAndTypeProps {
    id: number;
    name: string | undefined;
    wineType: string;
    url?: string;
}

export const NameAndTypeCell: React.FunctionComponent<INameAndTypeProps> = (props) => {
    if (!props.url) {
        props.url = `/wines/${props.id}/`;
    }
    return <td>
        <a href={ props.url }>{ props.name || "" } { props.wineType }</a>
    </td>;
};
