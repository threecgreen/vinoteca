import React from "react";
import { GreenCard, RedCard, YellowCard } from "../../components/Cards";
import { SpinnerColor } from "../../components/Preloader";
import { ProducerCell, RegionCell, VitiAreaCell } from "../../components/TableCells";
import { TopEntity } from "../../components/TopEntity";
import { getTopColors } from "../../lib/api/colors";
import { getTopGrapes } from "../../lib/api/grapes";
import { getTopProducers } from "../../lib/api/producers";
import { getTopRegions } from "../../lib/api/regions";
import { getTopVitiAreas } from "../../lib/api/viti_areas";
import { capitalizeFirstLetter } from "../../lib/utils";

export const TopProducers: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top producers">
            <TopEntity name="Producers"
                EntityCell={ ProducerCell }
                fetchEntity={ getTopProducers }
                preloaderColor={ SpinnerColor.WineGreen }
            />
        </RedCard>
    );
};
TopProducers.displayName = "TopProducers";

export const TopRegions: React.FC<{}> = (_) => {
    return (
        <YellowCard title="Top regions">
            <TopEntity name="Region"
                EntityCell={ RegionCell }
                fetchEntity={ getTopRegions }
                preloaderColor={ SpinnerColor.WineGreen }
            />
        </YellowCard>
    );
};
TopRegions.displayName = "TopRegions";

export const TopVitiAreas: React.FC<{}> = (_) => {
    return (
        <GreenCard title="Top viticultural areas">
            <TopEntity name="Viti area"
                // @ts-ignore viti area ids won't be null here
                EntityCell={ VitiAreaCell }
                fetchEntity={ getTopVitiAreas }
                preloaderColor={ SpinnerColor.WineRed }
            />
        </GreenCard>
    );
};
TopVitiAreas.displayName = "TopVitiAreas";

const NonLinkCell: React.FC<{id: number, name: string}> = ({name}) => {
    return(
        <td>
            { name }
        </td>
    );
};
NonLinkCell.displayName = "NonLinkCell";

export const TopGrapes: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top grapes">
            <TopEntity name="Grape"
                EntityCell={ NonLinkCell }
                fetchEntity={ getTopGrapes }
                preloaderColor={ SpinnerColor.WineRed }
            />
        </RedCard>
    );
};

export const TopColors: React.FC<{}> = (_) => {
    return (
        <GreenCard title="Purchases by color">
            <TopEntity name="Color"
                EntityCell={ NonLinkCell }
                fetchEntity={ async () => {
                    const colors = await getTopColors();
                    return colors.map((c) => ({...c, name: capitalizeFirstLetter(c.name)}));
                } }
                minQuantity={ 1 }
                preloaderColor={ SpinnerColor.WineRed }
            />
        </GreenCard>
    );
};
