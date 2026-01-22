import { useLogger } from "lib/Logger";
import React, { ReactElement } from "react";
import { BarChart } from "./Chart";
import { PreloaderCirc, SpinnerColor } from "./Preloader";
import { SimpleTable } from "./Table";
import { NumCell, PriceCell } from "./TableCells";
import { Tab, TabColor, TabPanel, TabPanelList, Tabs, TabsList } from "./Tabs";

interface IEntity {
    id: number;
    name: string;
    quantity: number;
    varieties: number;
    avgPrice: number | null;
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
    preloaderColor: SpinnerColor;
}
export function TopEntity<Entity extends IEntity>({
    name, EntityCell, fetchEntity, minQuantity, preloaderColor,
}: IProps<Entity>): ReactElement {

    minQuantity = minQuantity ?? 5;

    const logger = useLogger("TopEntity");
    const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
    const [topEntities, setTopEntities] = React.useState<Entity[]>([]);
    React.useEffect(() => {
        async function fetchTopEntities() {
            try {
                const entities = await fetchEntity();
                setTopEntities(entities);
            } catch (e) {
                logger.logException(`Error fetching top ${name}s`, e);
            } finally {
                setHasLoaded(true);
            }
        }

        void fetchTopEntities();
    }, [fetchEntity, logger, name]);

    if (!hasLoaded) {
        return <PreloaderCirc color={ preloaderColor } />;
    }
    if (topEntities.length >= minQuantity) {
        const canvasHeight = "350px";
        return (
            <Tabs>
                <TabsList>
                    <Tab color={TabColor.Red}>
                        Table
                    </Tab>
                    <Tab color={TabColor.Green}>
                        Purchases
                    </Tab>
                    <Tab color={TabColor.Green}>
                        Varieties
                    </Tab>
                    <Tab color={TabColor.Green}>
                        Avg Price
                    </Tab>
                </TabsList>
                <TabPanelList>
                    <TabPanel>
                        <SimpleTable
                            columns={[
                                name,
                                { name: "Purchases", isNumCol: true },
                                { name: "Varieties", isNumCol: true },
                                { name: "Price", isNumCol: true },
                            ]}
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
                                </tr>,
                            )}
                        </SimpleTable>
                    </TabPanel>
                    <TabPanel>
                        <BarChart
                            height={canvasHeight}
                            data={topEntities.map((ent) => ({
                                label: ent.name,
                                value: ent.quantity,
                            }))}
                            decimalPlaces={ 0 }
                        />
                    </TabPanel>
                    <TabPanel>
                        <BarChart
                            height={canvasHeight}
                            data={topEntities.map((ent) => ({
                                label: ent.name,
                                value: ent.varieties,
                            }))}
                            decimalPlaces={ 0 }
                        />
                    </TabPanel>
                    <TabPanel>
                        <BarChart height={canvasHeight}
                            data={ topEntities.map((ent) => ({
                                label: ent.name,
                                value: ent.avgPrice ?? 0.0,
                            })) }
                            decimalPlaces={ 2 }
                        />
                    </TabPanel>
                </TabPanelList>
            </Tabs>
        );
    }
    return (
        <h6 className="bold">{ `Insufficent ${name}s.` }</h6>
    );
}
TopEntity.displayName = "TopEntity";
