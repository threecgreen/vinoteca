import {
    Tab as HeadlessTab, TabGroup, TabList, TabPanel as HeadlessTabPanel, TabPanels,
} from "@headlessui/react";
import React from "react";
import { IChildrenProp } from "./IProps";

export enum TabColor {
    Green = "wine-green-tab",
    Red = "wine-red-tab",
}

interface ITabsProps extends IChildrenProp {
    selectedIndex?: number;
    onChange?: (index: number) => void;
}

export const Tabs: React.FC<ITabsProps> = ({children, selectedIndex, onChange}) => {
    return (
        <TabGroup selectedIndex={selectedIndex} onChange={onChange}>
            { children }
        </TabGroup>
    );
};
Tabs.displayName = "Tabs";

export const TabsList: React.FC<IChildrenProp> = ({children}) => {
    return (
        <TabList className="flex bg-white shadow-md">
            { children }
        </TabList>
    );
};
TabsList.displayName = "TabsList";

export function indexFactory(name: string) {
    return (idx: number): string => `${name}-${idx}`;
}

interface ITabProps extends IChildrenProp {
    color: TabColor;
    enabled?: boolean;
}

export const Tab: React.FC<ITabProps> = ({children, color, enabled}) => {
    const isEnabled = enabled ?? true;
    const colorClass = color === TabColor.Green ? "tab-green" : "tab-red";

    return (
        <HeadlessTab disabled={!isEnabled} className={`tab-button ${colorClass}`}>
            { children }
        </HeadlessTab>
    );
};
Tab.displayName = "Tab";

export const TabPanelList: React.FC<IChildrenProp> = ({children}) => {
    return (
        <TabPanels>
            { children }
        </TabPanels>
    );
};
TabPanelList.displayName = "TabPanelList";

interface ITabPanelProps extends IChildrenProp {
    id?: string;
}

export const TabPanel: React.FC<ITabPanelProps> = ({children, id}) => {
    return (
        <HeadlessTabPanel id={id} className="py-4">
            { children }
        </HeadlessTabPanel>
    );
};
TabPanel.displayName = "TabPanel";
