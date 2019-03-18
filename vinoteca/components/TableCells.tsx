import startCase from "lodash/startCase";
import * as React from "react";

interface ITextCellProps {
    default?: string;
    text: string | undefined;
}

export const TextCell: React.FunctionComponent<ITextCellProps> = (props) => {
    if (!props.default) {
        props.default = "";
    }
    return <td>{ props.text || props.default }</td>;
};

interface INumCellProps {
    num: number;
}

export const NumCell: React.FunctionComponent<INumCellProps> = (props) => {
    return <td className="num-col">{ props.num.toString() }</td>;
};

interface IColorCellProps {
    color: string;
}

export const ColorCell: React.FunctionComponent<IColorCellProps> = (props) => {
    return <td>{ startCase(props.color) }</td>;
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
