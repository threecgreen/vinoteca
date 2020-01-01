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
import { VitiAreaStatsTable } from "./VitiAreaStatsTable";
import { SimpleSpecialChars } from "../../components/SimpleSpecialChars";

interface IVitiAreaProfileState {
    isEditing: boolean;
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
    }

    public async componentDidMount() {
        Promise.all([
            this.getAndSetVitiArea(),
            this.getAndSetWines(),
            this.getAndSetStats(),
        ]);
    }

    private async getAndSetVitiArea() {
        const vitiArea = await getVitiArea({id: this.props.vitiAreaId});
        this.setState({vitiArea, vitiAreaText: vitiArea.name});
    }

    private async getAndSetWines() {
        const wines = await getWines({vitiAreaId: this.props.vitiAreaId});
        this.setState({wines: wines.map((w) => new Wine(w))});
    }

    private async getAndSetStats() {
        const stats: IVitiAreaStats[] = await getVitiAreaStats({id: this.props.vitiAreaId});
        this.setState({stats: new VitiAreaStats(stats[0])});
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
                    onVitiAreaSpecialCharClick={ this.onSpecialCharClick }
                    onConfirmClick={ this.onConfirmClick }
                    onCancelClick={ this.onCancelClick }
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

    private async onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        try {
            const vitiArea = await updateVitiArea({
                id: this.props.vitiAreaId,
                name: this.state.vitiAreaText,
                region_id: this.state.vitiArea!.region_id,
            });
            this.setState({
                isEditing: false,
                vitiArea: vitiArea,
            });
        } catch (err) {
            this.logger.logWarning(`Failed to save changes to database: ${err}`);
        }
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: false,
            vitiAreaText: state.vitiArea ? state.vitiArea.name : "",
        }));
    }

    private onSpecialCharClick(char: string, position: number) {
        this.setState((prevState) => ({
            vitiAreaText: SimpleSpecialChars.insertCharAt(prevState.vitiAreaText, char, position),
        }));
    }
}
