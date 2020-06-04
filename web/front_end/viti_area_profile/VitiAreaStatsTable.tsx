import React from "react"
import { IVitiAreaStats } from "../../lib/api/Rest";
import { SimpleTable } from "../../components/Table";
import { NumCell } from "../../components/TableCells";

interface IProps {
    stats?: IVitiAreaStats
}

export const VitiAreaStatsTable: React.FunctionComponent<IProps> = (props) => {
    if (!props.stats) {
        return null;
    }
    return (
        <SimpleTable columns={[]}>
            <tr>
                <td>Total Wines</td>
                <NumCell num={ props.stats.totalWines } maxDecimals={ 0 } />
            </tr>
            <tr>
                <td>Avg Price</td>
                <NumCell num={ props.stats.avgPrice } maxDecimals={ 2 } />
            </tr>
            <tr>
                <td>Avg Rating</td>
                <NumCell num={ props.stats.avgRating } maxDecimals={ 1 } />
            </tr>
        </SimpleTable>
    )
}
