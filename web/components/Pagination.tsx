import React from "react";
import { range } from "../lib/utils";
import { MaterialIcon } from "./MaterialIcon";

interface IProps {
    currentPage: number;
    pageCount: number;
    onClick: (pageNumber: number) => void;
}

const BASE_BTN = "flex h-8 min-w-8 items-center justify-center rounded px-2 text-base";
const IDLE_BTN = `${BASE_BTN} text-wine-black hover:bg-black/10`;
const ACTIVE_BTN = `${BASE_BTN} bg-wine-red-light text-white`;
const DISABLED_BTN = `${BASE_BTN} cursor-default text-black/30`;

interface IArrowProps {
    iconName: string;
    label: string;
    targetPage: number;
    enabled: boolean;
    onClick: (pageNumber: number) => void;
}

const ArrowBtn: React.FC<IArrowProps> = ({ iconName, label, targetPage, enabled, onClick }) => (
    <li>
        <button type="button"
            aria-label={ label }
            className={ enabled ? IDLE_BTN : DISABLED_BTN }
            disabled={ !enabled }
            onClick={ () => onClick(targetPage) }
        >
            <MaterialIcon iconName={ iconName } />
        </button>
    </li>
);
ArrowBtn.displayName = "ArrowBtn";

export const Pagination: React.FC<IProps> = ({ currentPage, pageCount, onClick }) => (
    <ul className="my-4 flex flex-wrap items-center justify-center gap-1">
        <ArrowBtn iconName="chevron_left" label="Previous page"
            targetPage={ currentPage - 1 } enabled={ currentPage > 1 } onClick={ onClick }
        />
        { [...range({start: 1, stop: pageCount + 1})].map((pgNum) => {
            const isActive = pgNum === currentPage;
            return (
                <li key={ pgNum }>
                    <button type="button"
                        className={ isActive ? ACTIVE_BTN : IDLE_BTN }
                        aria-current={ isActive ? "page" : undefined }
                        onClick={ () => onClick(pgNum) }
                    >
                        { pgNum }
                    </button>
                </li>
            );
        }) }
        <ArrowBtn iconName="chevron_right" label="Next page"
            targetPage={ currentPage + 1 } enabled={ currentPage < pageCount } onClick={ onClick }
        />
    </ul>
);
Pagination.displayName = "Pagination";
