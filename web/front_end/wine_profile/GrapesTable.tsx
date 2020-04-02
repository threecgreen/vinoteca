import React from "react";
import { PieChart } from "../../components/Chart";
import { SimpleTable } from "../../components/Table";
import { NumCell, TextCell } from "../../components/TableCells";
import { indexFactory, Tab, TabColor, TabPanel, Tabs } from "../../components/Tabs";
import { IWineGrape } from "../../lib/Rest";

interface IProps {
    grapes: IWineGrape[];
}

export const GrapesTable: React.FC<IProps> = ({grapes}) => {
    const tabIdxer = indexFactory(GrapesTable.name);

    const grapeChartEnabled = grapes.every((grape) => grape.percent !== null);
    return (
        <>
            <h5 className="light">Grape composition</h5>
            <Tabs>
                <Tab target={tabIdxer(0)} color={TabColor.Red}>
                    Table
                </Tab>
                <Tab target={tabIdxer(1)}
                    color={TabColor.Green}
                    enabled={ grapeChartEnabled }
                >
                    Pie chart
                </Tab>
            </Tabs>
            <TabPanel id={tabIdxer(0)}>
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
            <TabPanel id={tabIdxer(1)}>
                <PieChart data={ grapes.map((grape) => ({label: grape.grape, value: grape.percent || 0})) } />
            </TabPanel>
        </>
    );
}
GrapesTable.displayName = "GrapesTable";
