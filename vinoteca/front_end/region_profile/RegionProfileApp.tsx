import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getRegion, getWines, getVitiAreaStats, updateRegion } from "../../lib/RestApi";
import { IRegion, VitiAreaStats, Wine } from "../../lib/RestTypes";
import { Region } from "./Region";
import { RegionVitiAreasTable } from "./RegionVitiAreasTable";
import { PlaceWinesTable } from "../../components/PlaceWinesTable";
import { SimpleSpecialChars } from "../../components/SimpleSpecialChars";

interface IState {
    isEditing: boolean;
    // Editable
    regionText: string;
    // "Pure" state
    region?: IRegion;
    wines: Wine[];
    vitiAreas: VitiAreaStats[];
}

interface IProps {
    regionId: number;
}

export class RegionProfile extends React.Component<IProps, IState> {
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
        this.onSpecialCharClick = this.onSpecialCharClick.bind(this);
    }

    public componentDidMount() {
        getRegion({id: this.props.regionId})
            .then((region) => this.setState({region, regionText: region.name}));
        getWines({regionId: this.props.regionId})
            .then((wines) => {
                this.setState({wines: wines.map((w) => new Wine(w))});
            });
        getVitiAreaStats({regionId: this.props.regionId})
            .then((vitiAreas) => {
                this.setState({vitiAreas: vitiAreas.map((vA) => new VitiAreaStats(vA))});
            });
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
                    onRegionSpecialCharClick={ this.onSpecialCharClick }
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
                        <PlaceWinesTable wines={ this.state.wines } />
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

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        updateRegion({id: this.props.regionId, name: this.state.regionText})
            .then((region) => this.setState({
                isEditing: false,
                region: region,
            })).catch((err) => {
                this.logger.logWarning(`Failed to save changes to database: ${err}`);
            });
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: false,
            regionText: state.region ? state.region.name : "",
        }));
    }

    private onSpecialCharClick(char: string, position: number) {
        this.setState((prevState) => ({
            regionText: SimpleSpecialChars.insertCharAt(prevState.regionText, char, position),
        }));
    }
}
