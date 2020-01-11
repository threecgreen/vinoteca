import * as React from "react";
import { Table } from "../../components/Table";
import { NumCell, PriceCell, VitiAreaCell } from "../../components/TableCells";
import { IVitiAreaStats } from "../../lib/Rest";

interface IRegionWineTableProps {
    vitiAreas: IVitiAreaStats[];
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
                        <VitiAreaCell id={ vitiArea.id }>
                            { vitiArea.name }
                        </VitiAreaCell>
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
