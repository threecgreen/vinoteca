import React from "react";
import { Tabs, Tab, indexFactory, TabColor, TabPanel } from "../../components/Tabs";
import { BarChart } from "../../components/Chart";
import Logger from "../../lib/Logger";
import { get } from "../../lib/ApiHelper";
import { PreloaderCirc } from "../../components/Preloader";
import { RedCard } from "../../components/Cards";
import { Table } from "../../components/Table";
import { WineTypeCell, NumCell, PriceCell } from "../../components/TableCells";
import { ITopWineType } from "../../lib/Rest";

export const TopWineTypes: React.FC<{}> = (_) => {
    const logger = new Logger(TopWineTypes.name);
    const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
    const [topWineTypes, setTopWineTypes] = React.useState<ITopWineType[]>([]);
    React.useEffect(() => {
        async function fetchTopWineTypes() {
            try {
                const wineTypes = await get<ITopWineType[]>("/rest/wine-types/top");
                setTopWineTypes(wineTypes);
            } catch {
                logger.logError("Error fetching top wine types");
            } finally {
                setHasLoaded(true);
            }
        }

        fetchTopWineTypes();
    }, [setHasLoaded, setTopWineTypes]);


    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc />;
    } else if (topWineTypes.length >= 5) {
        const tabIdxer = indexFactory(TopWineTypes.name);
        const canvasHeight = "350px";
        content = (
            <>
                <Tabs>
                    <Tab target={tabIdxer(0)} color={TabColor.Red}>
                        Table
                    </Tab>
                    <Tab target={tabIdxer(1)} color={TabColor.Green}>
                        Purchases
                    </Tab>
                    <Tab target={tabIdxer(2)} color={TabColor.Green}>
                        Varieties
                    </Tab>
                    <Tab target={tabIdxer(3)} color={TabColor.Green}>
                        Avg Price
                    </Tab>
                </Tabs>
                <TabPanel id={tabIdxer(0)}>
                    <Table columns={["Wine Type", { name: "Purchases", isNumCol: true },
                        { name: "Varieties", isNumCol: true }, { name: "Price", isNumCol: true }]}
                        condensed={false}
                    >
                        {topWineTypes.map((wineType) =>
                            <tr key={wineType.id}>
                                <WineTypeCell id={wineType.id}>{wineType.name}</WineTypeCell>
                                <NumCell maxDecimals={0} num={wineType.quantity} />
                                <NumCell maxDecimals={0} num={wineType.varieties} />
                                <PriceCell price={wineType.avgPrice} />
                            </tr>
                        )}
                    </Table>
                </TabPanel>
                <TabPanel id={tabIdxer(1)}>
                    <BarChart height={canvasHeight}
                        data={topWineTypes.map((wt) => ({ label: wt.name, value: wt.quantity }))}
                    />
                </TabPanel>
                <TabPanel id={tabIdxer(2)}>
                    <BarChart height={canvasHeight}
                        data={topWineTypes.map((wt) => ({ label: wt.name, value: wt.varieties }))}
                    />
                </TabPanel>
                <TabPanel id={tabIdxer(3)}>
                    <BarChart height={canvasHeight}
                        data={topWineTypes.map((wt) => ({ label: wt.name, value: wt.avgPrice }))}
                    />
                </TabPanel>
            </>
        );
    } else {
        <h6 className="bold">Insufficent wine types.</h6>
    }
    return (
        <RedCard title="Top Wine Types">
            {content}
        </RedCard>
    );
}
TopWineTypes.displayName = "TopWineTypes";
