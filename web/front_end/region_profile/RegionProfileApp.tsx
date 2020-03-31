import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Col, Row } from "../../components/Grid";
import { Preloader } from "../../components/Preloader";
import { ColumnToExclude, WinesTable } from "../../components/WinesTable";
import Logger from "../../lib/Logger";
import { IRegion, IVitiAreaStats, IWine } from "../../lib/Rest";
import { getRegion, getVitiAreaStats, getWines } from "../../lib/RestApi";
import { setTitle } from "../../lib/widgets";
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

export class RegionProfileApp extends React.Component<RouteComponentProps<IProps>, IState> {
    private logger: Logger;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditing: false,
            regionText: "",
            region: undefined,
            wines: [],
            vitiAreas: [],
        }

        this.logger = new Logger("RegionProfileApp", true);
    }

    public async componentDidMount() {
        await Promise.all([
            this.getAndSetRegion(),
            this.getAndSetWines(),
            this.getAndSetVitiAreaStats(),
        ]);
        setTitle(this.state.region?.name ?? "Region profile");
    }

    private async getAndSetRegion() {
        const region = await getRegion({id: this.props.regionId});
        this.setState({region, regionText: region.name});
    }

    private async getAndSetWines() {
        const wines = await getWines({regionId: this.props.regionId});
        this.setState({wines});
    }

    private async getAndSetVitiAreaStats() {
        const vitiAreas = await getVitiAreaStats({regionId: this.props.regionId});
        this.setState({vitiAreas: vitiAreas});
    }

    public render() {
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
}
