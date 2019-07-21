import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";
import { range } from "../lib/utils";

interface IProps {
    currentPage: number;
    pageCount: number;
    onClick: (e: React.MouseEvent, pageNumber: number) => void;
}

enum Arrow {
    Left,
    Right
}

export class Pagination extends React.Component<IProps> {
    public render() {
        return (
            <ul className="pagination center-align">
                <li className={ this.arrowIsEnabled(Arrow.Left) ? "waves-effect" : "disabled "}>
                    <a onClick={ (e) => this.onArrowClick(e, Arrow.Left) }>
                        <MaterialIcon iconName="chevron_left" />
                    </a>
                </li>
                { [...range({start: 1, stop: this.props.pageCount + 1})].map((pgNum) => {
                    return (
                        <li className={ this.props.currentPage === pgNum ? "active red-bg" : "waves-effect"}
                            key={ pgNum }
                        >
                            <a onClick={ (e) => this.props.onClick(e, pgNum) }>
                                { pgNum }
                            </a>
                        </li>
                    );
                }) }
                <li className={ this.arrowIsEnabled(Arrow.Right) ? "waves-effect" : "disabled "}>
                    <a onClick={ (e) => this.onArrowClick(e, Arrow.Right) }>
                        <MaterialIcon iconName="chevron_right" />
                    </a>
                </li>
            </ul>
        );
    }

    private arrowIsEnabled(arrow: Arrow): boolean {
        switch(arrow) {
            case Arrow.Left:
                return this.props.currentPage > 1;
            case Arrow.Right:
                return this.props.currentPage < this.props.pageCount;
            default:
                return false;
        }
    }

    private onArrowClick(e: React.MouseEvent, arrow: Arrow) {
        if (this.arrowIsEnabled(arrow)) {
            switch (arrow) {
                case Arrow.Left:
                    this.props.onClick(e, this.props.currentPage - 1);
                    return;
                case Arrow.Right:
                    this.props.onClick(e, this.props.currentPage + 1);
                    return;
                default:
                    return;
            }
        }
        e.preventDefault();
    }
}
