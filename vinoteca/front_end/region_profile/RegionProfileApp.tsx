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
import { RegionWinesTable } from "./RegionWinesTable";
import { SpecialChars } from "../../components/SpecialChars";

enum TextInputs {
    Region
};

interface IRegionProfileState {
    isEditing: boolean;
    lastActiveTextInput?: TextInputs;
    // Editable
    regionText: string;
    // "Pure" state
    region?: IRegion;
    wines: Wine[];
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
            lastActiveTextInput: undefined,
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
        this.onTextInputFocus = this.onTextInputFocus.bind(this);
        this.onTextInputBlur = this.onTextInputBlur.bind(this);
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
                    onTextInputFocus={ this.onTextInputFocus }
                    onTextInputBlur={ this.onTextInputBlur }
                    onConfirmClick={ this.onConfirmClick }
                    onCancelClick={ this.onCancelClick }
                />
                <SpecialChars onClick={ this.onSpecialCharClick }
                    display={ this.state.isEditing && this.state.lastActiveTextInput !== undefined }
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
        this.setState({
            lastActiveTextInput: TextInputs.Region,
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

    private onTextInputFocus() {
        this.setState((prevState) => SpecialChars.onTextInputFocus(prevState, TextInputs.Region));
    }

    private onTextInputBlur() {
        this.setState((prevState) => SpecialChars.onTextInputBlur(prevState, TextInputs.Region));
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        this.setState((prevState) => ({
            regionText: prevState.regionText + char,
        }));
    }
}
