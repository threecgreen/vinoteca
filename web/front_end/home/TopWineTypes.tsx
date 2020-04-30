import React from "react";
import { RedCard } from "../../components/Cards";
import { WineTypeCell } from "../../components/TableCells";
import { TopEntity } from "../../components/TopEntity";
import { getTopWineTypes } from "../../lib/api/wine_types";

export const TopWineTypes: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top wine types">
            <TopEntity name="Wine Type"
                EntityCell={ WineTypeCell }
                fetchEntity={ getTopWineTypes }
            />
        </RedCard>
    );
}
TopWineTypes.displayName = "TopWineTypes";
