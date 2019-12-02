import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getWineType, getWines, updateWineType } from "../../lib/RestApi";
import { Wine, IRestModel } from "../../lib/RestTypes";
import { WineType } from "./WineType";
import { WineTypeWinesTable } from "./WineTypeWinesTable";
import { SimpleSpecialChars } from "../../components/SimpleSpecialChars";

interface IState {
    isEditing: boolean;
    // Editable
    wineTypeText: string;
    // "Pure" state
    wineType?: IRestModel;
    wines: Wine[];
}

interface IProps {
    wineTypeId: number;
}

export class WineTypeProfileApp extends React.Component<IProps, IState> {
    private logger: Logger;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditing: false,
            wineTypeText: "",
            wineType: undefined,
            wines: [],
        }

        this.logger = new Logger(this.constructor.name, true);
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onWineTypeSpecialCharClick = this.onWineTypeSpecialCharClick.bind(this);
    }

    public componentDidMount() {
        getWineType({id: this.props.wineTypeId})
            .then((wineType) => this.setState({wineType: wineType, wineTypeText: wineType.name}));
        getWines({wineTypeId: this.props.wineTypeId})
            .then((wines) => {
                this.setState({wines: wines.map((w) => new Wine(w))});
            });
    }

    public render() {
        if (!this.state.wineType) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <WineType isEditing={ this.state.isEditing }
                    wineType={ this.state.wineType }
                    wineTypeText={ this.state.wineTypeText }
                    onWineTypeChange={ this.onWineTypeChange }
                    onWineTypeSpecialCharClick={ this.onWineTypeSpecialCharClick }
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
                        <WineTypeWinesTable wines={ this.state.wines } />
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

    private onWineTypeSpecialCharClick(char: string, position: number) {
        this.setState((prevState) => ({
            wineTypeText: SimpleSpecialChars.insertCharAt(prevState.wineTypeText, char, position),
        }));
    }

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        updateWineType({id: this.props.wineTypeId, name: this.state.wineTypeText})
            .then((wineType) => this.setState({
                isEditing: false,
                wineType: wineType,
            })).catch((err) => {
                this.logger.logWarning(`Failed to save changes to database: ${err}`);
            });
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: false,
            wineTypeText: state.wineType ? state.wineType.name : "",
        }));
    }
}

