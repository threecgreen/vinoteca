import { RouteComponentProps } from "@reach/router";
import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import { WinesTable } from "../../components/WinesTable";
import Logger from "../../lib/Logger";
import { IWine } from "../../lib/Rest";
import { getWines, getWineType, updateWineType } from "../../lib/RestApi";
import { IRestModel } from "../../lib/RestTypes";
import { WineType } from "./WineType";
import { setTitle } from "../../lib/widgets";

interface IState {
    isEditing: boolean;
    // Editable
    wineTypeText: string;
    // "Pure" state
    wineType?: IRestModel;
    wines: IWine[];
}

interface IProps {
    wineTypeId: number;
}

export class WineTypeProfileApp extends React.Component<RouteComponentProps<IProps>, IState> {
    private logger: Logger;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditing: false,
            wineTypeText: "",
            wineType: undefined,
            wines: [],
        }

        this.logger = new Logger("WineTypeProfileApp", true);
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public async componentDidMount() {
        await Promise.all([
            this.getAndSetWineTypes(),
            this.getAndSetWines(),
        ]);
        setTitle(this.state.wineType?.name ?? "Wine type profile");
    }

    private async getAndSetWineTypes() {
        const wineType = await getWineType({id: this.props.wineTypeId});
        this.setState({wineType: wineType, wineTypeText: wineType.name});
    }

    private async getAndSetWines() {
        const wines = await getWines({wineTypeId: this.props.wineTypeId});
        this.setState({wines});
    }

    public render() {
        if (this.props.wineTypeId === undefined) {
            return <h1>Wine type not found</h1>;
        }
        if (!this.state.wineType) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <WineType isEditing={ this.state.isEditing }
                    wineType={ this.state.wineType }
                    wineTypeText={ this.state.wineTypeText }
                    onWineTypeChange={ this.onWineTypeChange }
                    onConfirmClick={ this.onConfirmClick }
                    onCancelClick={ this.onCancelClick }
                />
                <Row>
                    <Col s={ 12 } classes={ ["fixed-action-div"] }>
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
                        <WinesTable wines={ this.state.wines } />
                    </Col>
                </Row>
            </div>
        );
    }

    private onEditClick() {
        this.setState({isEditing: true});
    }

    private onWineTypeChange(val: string) {
        this.setState({
            wineTypeText: val,
        });
    }

    private async onConfirmClick() {
        try {
            const wineType = await updateWineType({id: this.props.wineTypeId!, name: this.state.wineTypeText});
            this.setState({
                isEditing: false,
                wineType: wineType,
            });
        } catch (err) {
            this.logger.logWarning(`Failed to save changes to database: ${err}`);
        }
    }

    private onCancelClick() {
        this.setState((state) => ({
            isEditing: false,
            wineTypeText: state.wineType ? state.wineType.name : "",
        }));
    }
}

