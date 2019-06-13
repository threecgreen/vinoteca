import * as React from "react";
import { Table, WineTableNumCols } from "../../components/Table";
import {
    ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, TextCell
} from "../../components/TableCells";
import { Wine } from "../../lib/RestTypes";

interface IRegionWinesTableProps {
    wines: Wine[];
}

export const RegionWinesTable: React.FunctionComponent<IRegionWinesTableProps> = (props) => {
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
                        <DateCell date={ wine.lastPurchasedDate } />
                        <ColorCell color={ wine.color } />
                        <NameAndTypeCell id={ wine.id }
                            name={ wine.name }
                            wineType={ wine.wineType }
                        />
                        <TextCell text={ wine.producer } />
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
RegionWinesTable.displayName = "RegionWinesTable"
