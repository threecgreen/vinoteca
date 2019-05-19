import * as React from "react";
import { Table } from "../../components/Table";
import { NumCell, PriceCell, TextCell } from "../../components/TableCells";
import { VitiAreaStats } from "../../lib/RestTypes";

interface IRegionWineTableProps {
    vitiAreas: VitiAreaStats[];
}

export const RegionVitiAreasTable: React.FunctionComponent<IRegionWineTableProps> = (props) => {
    return (
        <Table
            columns={ ([
                "Name",
                { name: "Wines", isNumCol: true },
                { name: "Avg Price", isNumCol: true },
                { name: "Avg Rating", isNumCol: true },
            ]) }
        >
            { props.vitiAreas.map((vitiArea) => {
                return (
                    <tr key={ vitiArea.id }>
                        <TextCell text={ vitiArea.name } />
                        <NumCell num={ vitiArea.totalWines } />
                        <PriceCell price={ vitiArea.avgPrice } />
                        <NumCell num={ vitiArea.avgRating }
                            maxDecimals={ 1 }
                        />
                    </tr>
                );
            }) }
        </Table>
    );
}
RegionVitiAreasTable.displayName = "RegionVitiAreasTable"