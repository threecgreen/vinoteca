import * as React from "react";
import { Table } from "../../components/Table";
import {
    ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, TextCell
} from "../../components/TableCells";
import { Wine } from "../../lib/RestTypes";

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
                        <PriceCell price={ wine.avgPrice } />
                        <NumCell num={ wine.rating }
                            maxDecimals={ 1 }
                        />
                    </tr>
                );
            })}
        </Table>
    );
};
ProducerWinesTable.displayName = "ProducerWinesTable";
