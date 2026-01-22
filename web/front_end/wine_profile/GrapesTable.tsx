import { PieChart } from "components/Chart";
import { SimpleTable } from "components/Table";
import { NumCell, TextCell } from "components/TableCells";
import { Tab, TabColor, TabPanel, TabPanelList, Tabs, TabsList } from "components/Tabs";
import { IWineGrape } from "generated/rest";
import React from "react";

interface IProps {
    grapes: IWineGrape[];
}

export const GrapesTable: React.FC<IProps> = ({grapes}) => {
    const grapeChartEnabled = grapes.every((grape) => grape.percent !== null);
    return (
        <>
            <h5 className="light">Grape composition</h5>
            <Tabs>
                <TabsList>
                    <Tab color={TabColor.Red}>
                        Table
                    </Tab>
                    <Tab color={TabColor.Green}
                        enabled={ grapeChartEnabled }
                    >
                        Pie chart
                    </Tab>
                </TabsList>
                <TabPanelList>
                    <TabPanel>
                        <SimpleTable columns={ ["Grape", {name: "Percentage", isNumCol: true}]}>
                            { grapes.map((grape) => (
                                <tr key={ grape.grapeId }>
                                    <TextCell text={ grape.grape } />
                                    <NumCell num={ grape.percent }
                                        maxDecimals={ 0 }
                                    />
                                </tr>
                            )) }
                        </SimpleTable>
                    </TabPanel>
                    <TabPanel>
                        <PieChart data={ grapes.map((grape) =>
                            ({label: grape.grape, value: grape.percent || 0})) }
                        />
                    </TabPanel>
                </TabPanelList>
            </Tabs>
        </>
    );
};
GrapesTable.displayName = "GrapesTable";
