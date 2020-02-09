import React, { useEffect } from "react";
import { IChildrenProp } from "./IProps";
import { Tabs as MTabs } from "materialize-css"

export enum TabColor {
    Green = "wine-green-tab",
    Red = "wine-red-tab",
}

export const Tabs: React.FC<IChildrenProp> = ({children}) => {
    const tabsRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
    useEffect(() => {
        const _ = new MTabs(tabsRef.current);
    }, [tabsRef]);
    return (
        <ul className="tabs tabs-fixed-width narrow-tabs z-depth-1" ref={ tabsRef }>
            { ...children }
        </ul>
    );
}
Tabs.displayName = "Tabs";

export function indexFactory(name: string) {
    return (idx: number) => `${name}-${idx}`;
}

interface ITabProps extends IChildrenProp {
    target: string;
    color: TabColor,
}

export const Tab: React.FC<ITabProps> = ({children, color, target}) => {
    return (
        <li className={ `tab ${color.valueOf()}` }>
            <a href={ `#${target}` }>
                { ...children }
            </a>
        </li>
    );
}
Tab.displayName = "Tab";

interface ITabPanelProps extends IChildrenProp {
    id: string;
}

export const TabPanel: React.FC<ITabPanelProps> = ({children, id}) => {
    return (
        <div id={ id }>
            { ...children }
        </div>
    );
}
TabPanel.displayName = "TabPanel";
