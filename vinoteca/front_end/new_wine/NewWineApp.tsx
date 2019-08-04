import * as React from "react";
import { CSRFToken } from "../../components/CSRFToken";
import { GrapeFormApp } from "../../components/GrapesFormApp";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { PurchaseInputs } from "../../components/PurchaseInputs";
import { SpecialChars } from "../../components/SpecialChars";
import Logger from "../../lib/Logger";
import { WineInputs } from "./WineInputs";

export enum NewWineTextInput {
    StoreName,
    Memo,
    WineType,
    Producer,
    Region,
    Name,
    Why,
    VitiArea,
    Description,
    Notes
}

interface IState {
    memo: string;
    storeName: string;
    wineType: string;
    producer: string;
    region: string;
    name: string;
    why: string;
    vitiArea: string;
    description: string;
    notes: string;
    lastActiveTextInput?: NewWineTextInput;
}

export class NewWineApp extends React.Component<{}, IState> {
    private readonly logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = {
            memo: "",
            storeName: "",
            wineType: "",
            producer: "",
            region: "",
            name: "",
            why: "",
            vitiArea: "",
            description: "",
            notes: "",
        };
        this.logger = new Logger(this.constructor.name);
    }

    public render() {
        return (
            <div className="container">
                <h3 className="page-title">Enter new wine information</h3>
                <form action="" className="col s12" method="post" encType="multipart/form-data">
                    <CSRFToken />
                    <Row s={ 12 }>
                        <PurchaseInputs displayInventoryBtn
                            memo={ this.state.memo }
                            storeName={ this.state.storeName }
                        />
                        <WineInputs wineType={ this.state.wineType }
                            producer={ this.state.producer }
                            region={ this.state.region }
                            name={ this.state.name }
                            why={ this.state.why }
                            vitiArea={ this.state.vitiArea }
                            description={ this.state.description }
                            notes={ this.state.notes }
                            onInputChange={ (i, v) => this.onInputChange(i, v) }
                            onInputFocus={ (i) => this.onInputFocus(i) }
                        />
                    </Row>
                    {/* TODO: make grape form not an app so special characters work */}
                    <GrapeFormApp />
                    <SpecialChars display={ this.state.lastActiveTextInput !== undefined }
                        onClick={ (e, c) => this.onSpecialCharClick(e, c) }
                    />
                    <button className="btn waves-effect waves-light green-bg" type="submit"
                        name="action"
                    >
                        Confirm
                        <MaterialIcon className="right" iconName="send" />
                    </button>
                    <a className="btn waves-effect waves-light yellow-bg"
                        href="/home"
                    >
                        Cancel
                    </a>
                </form>
            </div>
        );
    }

    private onInputChange(input: NewWineTextInput, val: string) {
        switch (input) {
            case NewWineTextInput.StoreName:
                return this.setState({storeName: val});
            case NewWineTextInput.Memo:
                return this.setState({memo: val});
            case NewWineTextInput.WineType:
                return this.setState({wineType: val});
            case NewWineTextInput.Producer:
                return this.setState({producer: val});
            case NewWineTextInput.Region:
                return this.setState({region: val});
            case NewWineTextInput.Name:
                return this.setState({name: val});
            case NewWineTextInput.Why:
                return this.setState({why: val});
            case NewWineTextInput.VitiArea:
                return this.setState({vitiArea: val});
            case NewWineTextInput.Description:
                return this.setState({description: val});
            case NewWineTextInput.Notes:
                return this.setState({notes: val});
            default:
                this.logger.logWarning(`Tried to change an unknown property ${input}`);
        }
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        switch (this.state.lastActiveTextInput) {
            case NewWineTextInput.StoreName:
                return this.setState((prevState) => ({storeName: prevState.storeName + char}));
            case NewWineTextInput.Memo:
                return this.setState((prevState) => ({memo: prevState.memo + char}));
            case NewWineTextInput.WineType:
                return this.setState((prevState) => ({wineType: prevState.wineType + char}));
            case NewWineTextInput.Producer:
                return this.setState((prevState) => ({producer: prevState.producer + char}));
            case NewWineTextInput.Region:
                return this.setState((prevState) => ({region: prevState.region + char}));
            case NewWineTextInput.Name:
                return this.setState((prevState) => ({name: prevState.name + char}));
            case NewWineTextInput.Why:
                return this.setState((prevState) => ({why: prevState.why + char}));
            case NewWineTextInput.VitiArea:
                return this.setState((prevState) => ({vitiArea: prevState.vitiArea + char}));
            case NewWineTextInput.Description:
                return this.setState((prevState) => ({description: prevState.description + char}));
            case NewWineTextInput.Notes:
                return this.setState((prevState) => ({notes: prevState.notes + char}));
            default:
                this.logger.logError("The special char controller should not be displayed"
                                     + " before a text input has come into focus.");
        }
    }

    private onInputFocus(input: NewWineTextInput) {
        this.setState((prevState) => SpecialChars.onTextInputFocus(prevState, input));
    }
}
