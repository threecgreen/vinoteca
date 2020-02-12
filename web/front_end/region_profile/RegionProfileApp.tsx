import { RouteComponentProps } from "@reach/router";
import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import { ColumnToExclude, WinesTable } from "../../components/WinesTable";
import Logger from "../../lib/Logger";
import { IRegion, IVitiAreaStats, IWine } from "../../lib/Rest";
import { getRegion, getVitiAreaStats, getWines, updateRegion } from "../../lib/RestApi";
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

        this.logger = new Logger(this.constructor.name, true);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public async componentDidMount() {
        Promise.all([
            this.getAndSetRegion(),
            this.getAndSetWines(),
            this.getAndSetVitiAreaStats(),
        ]);
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
                <Region isEditing={ this.state.isEditing }
                    region={ this.state.region }
                    regionText={ this.state.regionText }
                    onRegionChange={ this.onRegionChange }
                    onConfirmClick={ this.onConfirmClick }
                    onCancelClick={ this.onCancelClick }
                />
                <Row>
                    <Col s={ 12 } l={ 9 }>
                        <h5>Viticultural Areas</h5>
                        <RegionVitiAreasTable vitiAreas={ this.state.vitiAreas } />
                    </Col>
                    <Col s={ 12 } l={ 3 } classes={ ["fixed-action-div"] }>
                        <FixedActionList>
                            <FloatingBtn onClick={ this.onEditClick }
                                classes={ ["yellow-bg"] }
                            >
                                <MaterialIcon iconName="edit" />
                            </FloatingBtn>
                        </FixedActionList>
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

    private onEditClick() {
        this.setState({isEditing: true});
    }

    private onRegionChange(val: string) {
        this.setState({
            regionText: val,
        });
    }

    private async onConfirmClick() {
        try {
            const region = await updateRegion({id: this.props.regionId!, name: this.state.regionText});
            this.setState({
                isEditing: false,
                region: region,
            })
        } catch(err) {
            this.logger.logWarning(`Failed to save changes to database: ${err}`);
        }
    }

    private onCancelClick() {
        this.setState((state) => ({
            isEditing: false,
            regionText: state.region ? state.region.name : "",
        }));
    }
}
