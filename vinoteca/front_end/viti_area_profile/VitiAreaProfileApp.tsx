import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import { SimpleSpecialChars } from "../../components/SimpleSpecialChars";
import { ColumnToExclude, WinesTable } from "../../components/WinesTable";
import Logger from "../../lib/Logger";
import { IVitiArea, IVitiAreaStats, IWine } from "../../lib/Rest";
import { getVitiArea, getVitiAreaStats, getWines, updateVitiArea } from "../../lib/RestApi";
import { VitiArea } from "./VitiArea";
import { VitiAreaStatsTable } from "./VitiAreaStatsTable";

interface IVitiAreaProfileState {
    isEditing: boolean;
    // Editable
    vitiAreaText: string;
    // "Pure" state
    vitiArea?: IVitiArea;
    wines: IWine[];
    stats?: IVitiAreaStats;
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
        this.setState({wines});
    }

    private async getAndSetStats() {
        const stats: IVitiAreaStats[] = await getVitiAreaStats({id: this.props.vitiAreaId});
        this.setState({stats: stats[0]});
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
                        <WinesTable wines={ this.state.wines }
                            excludeColumn={ ColumnToExclude.VitiArea }
                        />
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
                region: this.state.vitiArea!.region,
                regionId: this.state.vitiArea!.regionId,
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
}
