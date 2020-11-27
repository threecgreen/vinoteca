import { SimpleTable } from "components/Table";
import { NumCell } from "components/TableCells";
import React from "react";

interface IProps {
    wineCount: number;
    bottleCount: number;
}

export const InventoryStatsTable: React.FC<IProps> = ({wineCount, bottleCount}) => (
    <SimpleTable columns={[]}>
        <tr>
            <td>Wines in inventory</td>
            <NumCell num={ wineCount } maxDecimals={ 0 } />
        </tr>
        <tr>
            <td>Bottles in inventory</td>
            <NumCell num={ bottleCount } maxDecimals={ 0 } />
        </tr>
    </SimpleTable>
);
InventoryStatsTable.displayName = "InventoryStatsTable";
