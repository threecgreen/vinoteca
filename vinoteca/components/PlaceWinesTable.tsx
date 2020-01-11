import * as React from "react";
import { IWine } from "../lib/Rest";
import { Table, WineTableNumCols } from "./Table";
import { ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, ProducerCell } from "./TableCells";

interface IProps {
    wines: IWine[];
}

export const PlaceWinesTable: React.FC<IProps> = (props) => {
    // TODO: get producer id for linking
    return (
        <Table
            columns={ [
                "Last Purchased Date",
                "Color",
                "Name and Type",
                "Producer",
            // @ts-ignore
            ].concat(WineTableNumCols) }
        >
            { props.wines.map((wine) => {
                return (
                    <tr key={ wine.id}>
                        <DateCell date={ wine.lastPurchaseDate } />
                        <ColorCell color={ wine.color } />
                        <NameAndTypeCell id={ wine.id }
                            name={ wine.name }
                            wineType={ wine.wineType }
                        />
                        <ProducerCell id={ wine.producerId }>
                            { wine.producer }
                        </ProducerCell>
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
PlaceWinesTable.displayName = "PlaceWinesTable"
