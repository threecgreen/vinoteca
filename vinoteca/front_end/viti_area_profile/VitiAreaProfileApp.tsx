import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getVitiArea, getWines, updateVitiArea, getVitiAreaStats } from "../../lib/RestApi";
import { IVitiArea, VitiAreaStats, Wine, IVitiAreaStats } from "../../lib/RestTypes";
import { VitiArea } from "./VitiArea";
import { PlaceWinesTable } from "../../components/PlaceWinesTable";
import { SpecialChars } from "../../components/SpecialChars";
import { VitiAreaStatsTable } from "./VitiAreaStatsTable";

enum TextInputs {
    VitiArea
};

interface IVitiAreaProfileState {
    isEditing: boolean;
    lastActiveTextInput?: TextInputs;
    // Editable
    vitiAreaText: string;
    // "Pure" state
    vitiArea?: IVitiArea;
    wines: Wine[];
    stats?: VitiAreaStats;
}

interface IVitiAreaProfileProps {
    vitiAreaId: number;
}

export class VitiAreaProfile extends React.Component<IVitiAreaProfileProps, IVitiAreaProfileState> {
    private logger: Logger;

    constructor(props: IVitiAreaProfileProps) {
        super(props);
        this.state = {
            isEditing: false,
            lastActiveTextInput: TextInputs.VitiArea,
            vitiAreaText: "",
            vitiArea: undefined,
            wines: [],
            stats: undefined,
        }

        this.logger = new Logger(this.constructor.name, true);
        this.onVitiAreaChange = this.onVitiAreaChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSpecialCharClick = this.onSpecialCharClick.bind(this);
        this.onTextInputFocus = this.onTextInputFocus.bind(this);
        this.onTextInputBlur = this.onTextInputBlur.bind(this);
    }

    public componentDidMount() {
        getVitiArea({id: this.props.vitiAreaId})
            .then((vitiArea) => this.setState({vitiArea, vitiAreaText: vitiArea.name}));
        getWines({vitiAreaId: this.props.vitiAreaId})
            .then((wines) => {
                this.setState({wines: wines.map((w) => new Wine(w))});
            });
        getVitiAreaStats({id: this.props.vitiAreaId})
            .then((stats: IVitiAreaStats[]) => {
                this.setState({stats: new VitiAreaStats(stats[0])})
            });
    }

    public render() {
        if (!this.state.vitiArea) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <VitiArea isEditing={ this.state.isEditing }
                    vitiArea={ this.state.vitiArea }
                    vitiAreaText={ this.state.vitiAreaText }
                    onVitiAreaChange={ this.onVitiAreaChange }
                    onTextInputFocus={ this.onTextInputFocus }
                    onTextInputBlur={ this.onTextInputBlur }
                    onConfirmClick={ this.onConfirmClick }
                    onCancelClick={ this.onCancelClick }
                />
                <SpecialChars onClick={ this.onSpecialCharClick }
                    display={ this.state.isEditing }
                />
                <Row>
                    <Col s={ 6 }>
                        <VitiAreaStatsTable stats={ this.state.stats } />
                    </Col>
                    <Col s={ 6 } classes={ ["fixed-action-div"] }>
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

    private onVitiAreaChange(val: string) {
        this.setState({
            vitiAreaText: val,
        });
    }

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        updateVitiArea({id: this.props.vitiAreaId, name: this.state.vitiAreaText, region: this.state.vitiArea!.region})
            .then((vitiArea) => this.setState({
                isEditing: false,
                vitiArea: vitiArea,
            })).catch((err) => {
                this.logger.logWarning(`Failed to save changes to database: ${err}`);
            });
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: false,
            vitiAreaText: state.vitiArea ? state.vitiArea.name : "",
        }));
    }

    private onTextInputFocus() {
        this.setState((prevState) => SpecialChars.onTextInputFocus(prevState, TextInputs.VitiArea));
    }

    private onTextInputBlur() {
        this.setState((prevState) => SpecialChars.onTextInputBlur(prevState, TextInputs.VitiArea));
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        this.setState((prevState) => ({
            vitiAreaText: prevState.vitiAreaText + char,
        }));
    }
}
