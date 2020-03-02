import React from "react";
import Logger from "../lib/Logger";
import { BarChart } from "./Chart";
import { PreloaderCirc } from "./Preloader";
import { Table } from "./Table";
import { NumCell, PriceCell } from "./TableCells";
import { indexFactory, Tab, TabColor, TabPanel, Tabs } from "./Tabs";
import { nameToId } from "../lib/utils";

interface IEntity {
    id: number;
    name: string;
    quantity: number;
    varieties: number;
    avgPrice: number;
}

interface IEntityCellProps {
    id: number;
    name: string;
}

interface IProps<Entity> {
    name: string;
    EntityCell: React.FC<IEntityCellProps>;
    fetchEntity: () => Promise<Entity[]>;
    minQuantity?: number;
}
export function TopEntity<Entity extends IEntity>({name, EntityCell, fetchEntity, minQuantity}: IProps<Entity>) {
    minQuantity = minQuantity ?? 5;

    const logger = new Logger(TopEntity.name);
    const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
    const [topEntities, setTopEntities] = React.useState<Entity[]>([]);
    React.useEffect(() => {
        async function fetchTopEntities() {
            try {
                const entities = await fetchEntity();
                setTopEntities(entities);
            } catch (e) {
                logger.logError(`Error fetching top ${name}s. ${e.message}`);
            } finally {
                setHasLoaded(true);
            }
        }

        fetchTopEntities();
    }, [setHasLoaded, setTopEntities]);


    if (!hasLoaded) {
        return <PreloaderCirc />;
    }
    if (topEntities.length >= minQuantity) {
        const tabIdxer = indexFactory(nameToId(name));
        const canvasHeight = "350px";
        return (
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
                    <Table columns={[name, { name: "Purchases", isNumCol: true },
                        { name: "Varieties", isNumCol: true }, { name: "Price", isNumCol: true }]}
                        condensed={false}
                    >
                        {topEntities.map((entity) =>
                            <tr key={entity.id}>
                                <EntityCell id={ entity.id }
                                    name={ entity.name }
                                />
                                <NumCell maxDecimals={0} num={entity.quantity} />
                                <NumCell maxDecimals={0} num={entity.varieties} />
                                <PriceCell price={entity.avgPrice} />
                            </tr>
                        )}
                    </Table>
                </TabPanel>
                <TabPanel id={tabIdxer(1)}>
                    <BarChart height={canvasHeight}
                        data={topEntities.map((ent) => ({ label: ent.name, value: ent.quantity }))}
                    />
                </TabPanel>
                <TabPanel id={tabIdxer(2)}>
                    <BarChart height={canvasHeight}
                        data={topEntities.map((ent) => ({ label: ent.name, value: ent.varieties }))}
                    />
                </TabPanel>
                <TabPanel id={tabIdxer(3)}>
                    <BarChart height={canvasHeight}
                        data={topEntities.map((ent) => ({ label: ent.name, value: ent.avgPrice }))}
                    />
                </TabPanel>
            </>
        );
    }
    return (
        <h6 className="bold">{ `Insufficent ${name}s.` }</h6>
    );
}
TopEntity.displayName = TopEntity.name;