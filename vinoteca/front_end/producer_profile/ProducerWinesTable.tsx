import * as React from "react";
import { Wine } from "../../lib/RestTypes";
import { Table } from "../../components/Table";
import { DateCell, NameAndTypeCell, NumCell, TextCell, ColorCell } from "../../components/TableCells";

interface IProducerWinesTableProps {
    wines: Wine[];
}

export const ProducerWinesTable: React.FunctionComponent<IProducerWinesTableProps> = (props) => {
    return (
        <Table columns={[
            "Last Purchased Date",
            "Color",
            "Name and Type",
            "Viticultural Area",
            { name: "Total Quantity", isNumCol: true },
            { name: "Avg Price", isNumCol: true },
            { name: "Rating", isNumCol: true }
        ]}>
            { props.wines.map((wine) => {
                return (
                    <tr key={ wine.id }>
                        <DateCell date={ wine.lastPurchasedDate } />
                        <ColorCell color={ wine.color } />
                        <NameAndTypeCell id={ wine.id }
                            name={ wine.name }
                            wineType={ wine.wineType }
                        />
                        <TextCell text={ wine.vitiArea } />
                        <NumCell num={ wine.totalQuantityPurchased } />
                        <NumCell num={ wine.avgPrice } />
                        <NumCell num={ wine.rating } />
                    </tr>
                );
            })}
        </Table>
    );
};
ProducerWinesTable.displayName = "ProducerWinesTable";
