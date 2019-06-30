import * as React from "react"
import { VitiAreaStats } from "../../lib/RestTypes";
import { Table } from "../../components/Table";

interface IProps {
    stats?: VitiAreaStats
}

export const VitiAreaStatsTable: React.FunctionComponent<IProps> = (props) => {
    if (!props.stats) {
        return null;
    }
    return (
        <Table columns={[]}>
            <tr>
                <td>Total Wines</td>
                <td className="num-col">{ props.stats.totalWines }</td>
            </tr>
            <tr>
                <td>Avg Price</td>
                <td className="num-col">{ props.stats.avgPrice }</td>
            </tr>
            <tr>
                <td>Avg Rating</td>
                <td className="num-col">{ props.stats.avgRating }</td>
            </tr>
        </Table>
    )
}
