import * as React from "react"
import { IVitiAreaStats } from "../../lib/Rest";
import { Table } from "../../components/Table";
import { NumCell } from "../../components/TableCells";

interface IProps {
    stats?: IVitiAreaStats
}

export const VitiAreaStatsTable: React.FunctionComponent<IProps> = (props) => {
    if (!props.stats) {
        return null;
    }
    return (
        <Table columns={[]}>
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
        </Table>
    )
}
