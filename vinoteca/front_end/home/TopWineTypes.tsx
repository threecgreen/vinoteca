import React from "react";
import { RedCard } from "../../components/Cards";
import { WineTypeCell } from "../../components/TableCells";
import { TopEntity } from "../../components/TopEntity";
import { get } from "../../lib/ApiHelper";

export const TopWineTypes: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top Wine Types">
            <TopEntity name="Wine Type"
                EntityCell={ WineTypeCell }
                fetchEntity={ async() => get("/rest/wine-types/top") }
            />
        </RedCard>
    );
}
TopWineTypes.displayName = "TopWineTypes";
