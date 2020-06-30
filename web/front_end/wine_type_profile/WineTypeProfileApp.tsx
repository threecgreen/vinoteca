import { FloatingBtn } from "components/Buttons";
import { FixedActionList } from "components/FixedActionList";
import { Col, Row } from "components/Grid";
import { MaterialIcon } from "components/MaterialIcon";
import { Preloader } from "components/Preloader";
import { WinesTable } from "components/WinesTable";
import { IWine, IWineType } from "generated/rest";
import { getWines } from "lib/api/wines";
import { getWineType, updateWineType } from "lib/api/wine_types";
import Logger from "lib/Logger";
import { setTitle } from "lib/widgets";
import React from "react";
import { WineType } from "./WineType";

interface IState {
    isEditing: boolean;
    // Editable
    wineTypeText: string;
    // "Pure" state
    wineType?: IWineType;
    wines: IWine[];
}

interface IProps {
    wineTypeId: number;
}

export default class WineTypeProfileApp extends React.Component<IProps, IState> {
    private logger: Logger;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditing: false,
            wineTypeText: "",
            wineType: undefined,
            wines: [],
        };

        this.logger = new Logger("WineTypeProfileApp");
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public async componentDidMount() {
        setTitle(this.state.wineType?.name ?? "Wine type profile");
        try {
            await Promise.all([
                this.getAndSetWineTypes(),
                this.getAndSetWines(),
            ]);
        } catch (e) {
            this.logger.logWarning(`Failed to load wine type: ${e.message}`,
                {id: this.props.wineTypeId});
        }
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

    private async getAndSetWineTypes() {
        const wineType = await getWineType(this.props.wineTypeId);
        this.setState({wineType, wineTypeText: wineType.name});
    }

    private async getAndSetWines() {
        const wines = await getWines({wineTypeId: this.props.wineTypeId});
        this.setState({wines});
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
            const wineType = await updateWineType({
                id: this.props.wineTypeId!,
                name: this.state.wineTypeText,
            });
            this.setState({
                isEditing: false,
                wineType,
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
