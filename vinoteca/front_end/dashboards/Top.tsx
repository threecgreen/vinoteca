import React from "react";
import { RedCard, YellowCard, GreenCard } from "../../components/Cards";
import { ProducerCell, RegionCell, VitiAreaCell } from "../../components/TableCells";
import { TopEntity } from "../../components/TopEntity";
import { getTopColors, getTopGrapes, getTopProducers, getTopRegions, getTopVitiAreas } from "../../lib/RestApi";
import { capitalizeFirstLetter } from "../../lib/utils";

export const TopProducers: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top producers">
            <TopEntity name="Producers"
                EntityCell={ ProducerCell }
                fetchEntity={ getTopProducers }
            />
        </RedCard>
    );
}
TopProducers.displayName = TopProducers.name;

export const TopRegions: React.FC<{}> = (_) => {
    return (
        <YellowCard title="Top regions">
            <TopEntity name="Region"
                EntityCell={ RegionCell }
                fetchEntity={ getTopRegions }
            />
        </YellowCard>
    );
}
TopRegions.displayName = TopRegions.name;

export const TopVitiAreas: React.FC<{}> = (_) => {
    return (
        <GreenCard title="Top viticultural areas">
            <TopEntity name="Viti area"
                // @ts-ignore viti area ids won't be null here
                EntityCell={ VitiAreaCell }
                fetchEntity={ getTopVitiAreas }
            />
        </GreenCard>
    );
}
TopVitiAreas.displayName = TopVitiAreas.name;

const NonLinkCell: React.FC<{id: number, name: string}> = ({name}) => {
    return(
        <td>
            { name }
        </td>
    );
}
NonLinkCell.displayName = NonLinkCell.name;

export const TopGrapes: React.FC<{}> = (_) => {
    return (
        <RedCard title="Top grapes">
            <TopEntity name="Grape"
                EntityCell={ NonLinkCell }
                fetchEntity={ getTopGrapes }
            />
        </RedCard>
    )
}

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
            />
        </GreenCard>
    )
}
