import * as React from "react";
import { Table, WineTableNumCols } from "../../components/Table";
import {
    ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, VitiAreaCell,
} from "../../components/TableCells";
import { IWine } from "../../lib/Rest";

interface IProducerWinesTableProps {
    wines: IWine[];
}

export const ProducerWinesTable: React.FunctionComponent<IProducerWinesTableProps> = (props) => {
    return (
        <Table
            columns={ [
                "Last Purchased Date",
                "Color",
                "Name and Type",
                "Viticultural Area",
            // @ts-ignore
            ].concat(WineTableNumCols) }
        >
            { props.wines.map((wine) => {
                return (
                    <tr key={ wine.id }>
                        <DateCell date={ wine.lastPurchaseDate } />
                        <ColorCell color={ wine.color } />
                        <NameAndTypeCell id={ wine.id }
                            name={ wine.name }
                            wineType={ wine.wineType }
                        />
                        <VitiAreaCell id={ wine.vitiAreaId }>
                            { wine.vitiArea }
                        </VitiAreaCell>
                        <NumCell num={ wine.totalQuantityPurchased } />
                        <PriceCell price={ wine.avgPrice } />
                        <NumCell num={ wine.rating }
                            maxDecimals={ 0 }
                        />
                    </tr>
                );
            }) }
        </Table>
    );
};
ProducerWinesTable.displayName = "ProducerWinesTable";
