import * as React from "react";
import { Table, WineTableNumCols } from "../../components/Table";
import {
    ColorCell, DateCell, NameAndTypeCell, NumCell, PriceCell, TextCell, VitiAreaCell,
} from "../../components/TableCells";
import { Wine } from "../../lib/RestTypes";

interface IProducerWinesTableProps {
    wines: Wine[];
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
                            nameAndType={ wine.nameAndType }
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
