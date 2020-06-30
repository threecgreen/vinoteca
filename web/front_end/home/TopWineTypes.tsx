import { RedCard } from "components/Cards";
import { SpinnerColor } from "components/Preloader";
import { WineTypeCell } from "components/TableCells";
import { TopEntity } from "components/TopEntity";
import { getTopWineTypes } from "lib/api/wine_types";
import React from "react";

export const TopWineTypes: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top wine types">
            <TopEntity name="Wine Type"
                EntityCell={ WineTypeCell }
                fetchEntity={ getTopWineTypes }
                preloaderColor={ SpinnerColor.WineGreen }
            />
        </RedCard>
    );
};
TopWineTypes.displayName = "TopWineTypes";
