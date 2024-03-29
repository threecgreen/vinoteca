import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { ColumnToExclude, WinesTable } from "components/WinesTable";
import { IRegion, IVitiAreaStats, IWine } from "generated/rest";
import { getRegion } from "lib/api/regions";
import { getVitiAreaStats } from "lib/api/viti_areas";
import { getWines } from "lib/api/wines";
import Logger, { LogLevel } from "lib/Logger";
import { setTitle } from "lib/widgets";
import React, { ReactElement } from "react";
import { Region } from "./Region";
import { RegionVitiAreasTable } from "./RegionVitiAreasTable";

interface IState {
    isEditing: boolean;
    // Editable
    regionText: string;
    // "Pure" state
    region?: IRegion;
    wines: IWine[];
    vitiAreas: IVitiAreaStats[];
}

interface IProps {
    regionId: number;
}

export default class RegionProfileApp extends React.Component<IProps, IState> {
    private logger: Logger;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditing: false,
            regionText: "",
            region: undefined,
            wines: [],
            vitiAreas: [],
        };

        this.logger = new Logger("RegionProfileApp");
    }

    public async componentDidMount(): Promise<void> {
        setTitle(this.state.region?.name ?? "Region profile");
        try {
            await Promise.all([
                this.getAndSetRegion(),
                this.getAndSetWines(),
                this.getAndSetVitiAreaStats(),
            ]);
        } catch (e) {
            this.logger.logException("Failed to load region", e, {id: this.props.regionId},
                                     LogLevel.Warning);
        }
    }

    public render(): ReactElement {
        if (!this.state.region) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <Region region={ this.state.region } />
                <Row>
                    <Col s={ 12 }>
                        <h5>Viticultural Areas</h5>
                        <RegionVitiAreasTable vitiAreas={ this.state.vitiAreas } />
                    </Col>
                </Row>
                <Row>
                    <Col s={ 12 }>
                        <h5>Wines</h5>
                        <WinesTable wines={ this.state.wines }
                            excludeColumn={ ColumnToExclude.Region }
                        />
                    </Col>
                </Row>
            </div>
        );
    }

    private async getAndSetRegion() {
        const region = await getRegion({id: this.props.regionId});
        this.setState({region, regionText: region.name});
    }

    private async getAndSetWines() {
        const wines = (await getWines({regionId: this.props.regionId})).unwrap();
        this.setState({wines});
    }

    private async getAndSetVitiAreaStats() {
        const vitiAreas = await getVitiAreaStats({regionId: this.props.regionId});
        this.setState({vitiAreas});
    }
}
