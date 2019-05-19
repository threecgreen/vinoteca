import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getRegion, getWines } from "../../lib/RestApi";
import { IRegion, VitiAreaStats, Wine } from "../../lib/RestTypes";
import { Region } from "./Region";
import { RegionVitiAreasTable } from "./RegionVitiAreasTable";
import { RegionWinesTable } from "./RegionWinesTable";

interface IRegionProfileState {
    isEditing: boolean;
    // Editable
    regionText: string;
    // "Pure" state
    region?: IRegion;
    wines: Wine[];
    // TODO: viti area type
    vitiAreas: VitiAreaStats[];
}

interface IRegionProfileProps {
    regionId: number;
}

export class RegionProfile extends React.Component<IRegionProfileProps, IRegionProfileState> {
    private logger: Logger;

    constructor(props: IRegionProfileProps) {
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
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public componentDidMount() {
        getRegion({id: this.props.regionId})
            .then((region) => this.setState({region}));
        getWines({regionId: this.props.regionId})
            .then((wines) => {
                this.setState({wines: wines.map((w) => new Wine(w))});
            });
        // TODO: get viti areas
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
                        <RegionWinesTable wines={ this.state.wines } />
                    </Col>
                </Row>
            </div>
        );
    }

    private onEditClick() {
        this.setState({isEditing: true});
    }

    private onRegionChange(val: string) {
        this.setState({regionText: val});
    }

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        // TODO: updateRegion
        this.setState({
            isEditing: false,
        });
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: false,
            regionText: state.region ? state.region.name : "",
        }));
    }
}
