import React from "react";
import { RedCard, YellowCard as GreenCard } from "../../components/Cards";
import { WineTypeCell, VitiAreaCell, RegionCell, ProducerCell } from "../../components/TableCells";
import { TopEntity } from "../../components/TopEntity";
import { getTopRegions, getTopProducers, getTopVitiAreas } from "../../lib/RestApi";

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
        <GreenCard title="Top regions">
            <TopEntity name="Region"
                EntityCell={ RegionCell }
                fetchEntity={ getTopRegions }
            />
        </GreenCard>
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
