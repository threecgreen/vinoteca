import { Tabs as MTabs } from "materialize-css";
import React, { useEffect } from "react";
import { IChildrenProp } from "./IProps";

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
            { children }
        </ul>
    );
};
Tabs.displayName = "Tabs";

export function indexFactory(name: string) {
    return (idx: number): string => `${name}-${idx}`;
}

interface ITabProps extends IChildrenProp {
    target: string;
    color: TabColor;
    enabled?: boolean;
}

export const Tab: React.FC<ITabProps> = ({children, color, target, enabled}) => {
    enabled = enabled ?? true;
    const enabledClass = enabled ? "" : "disabled";
    return (
        <li className={ `tab ${color.valueOf()} ${enabledClass}` }>
            <a href={ `#${target}` }>
                { children }
            </a>
        </li>
    );
};
Tab.displayName = "Tab";

interface ITabPanelProps extends IChildrenProp {
    id: string;
}

export const TabPanel: React.FC<ITabPanelProps> = ({children, id}) => {
    return (
        <div id={ id }>
            { children }
        </div>
    );
};
TabPanel.displayName = "TabPanel";
