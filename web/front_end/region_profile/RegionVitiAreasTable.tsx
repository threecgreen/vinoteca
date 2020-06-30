import { SimpleTable } from "components/Table";
import { NumCell, PriceCell, VitiAreaCell } from "components/TableCells";
import { IVitiAreaStats } from "generated/rest";
import React from "react";

interface IRegionWineTableProps {
    vitiAreas: IVitiAreaStats[];
}

export const RegionVitiAreasTable: React.FunctionComponent<IRegionWineTableProps> = (props) => {
    return (
        <SimpleTable
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
                        <VitiAreaCell id={ vitiArea.id }
                            name={ vitiArea.name }
                        />
                        <NumCell num={ vitiArea.totalWines } />
                        <PriceCell price={ vitiArea.avgPrice } />
                        <NumCell num={ vitiArea.avgRating }
                            maxDecimals={ 1 }
                        />
                    </tr>
                );
            }) }
        </SimpleTable>
    );
};
RegionVitiAreasTable.displayName = "RegionVitiAreasTable";
