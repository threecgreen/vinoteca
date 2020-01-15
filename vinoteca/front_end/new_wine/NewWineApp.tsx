import React from "react";
import { CSRFToken } from "../../components/CSRFToken";
import { GrapesInputs } from "../../components/GrapesInputs";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { PurchaseInputs } from "../../components/PurchaseInputs";
import Logger from "../../lib/Logger";
import { WineInputs } from "./WineInputs";
import { IWineGrape } from "../../lib/Rest";

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
    wineGrapes: IWineGrape[];
}

// TODO: Improve the performance of this component
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
            wineGrapes: [],
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
                        />
                    </Row>
                    {/* TODO: make grape form not an app so special characters work */}
                    <GrapesInputs wineGrapes={ this.state.wineGrapes }
                        updateWineGrapes={ (wineGrapes) => this.setState({wineGrapes}) }
                    />
                    {/* TODO: use Buttons components */}
                    <button className="btn waves-effect waves-light green-bg" type="submit"
                        name="action"
                    >
                        Confirm
                        <MaterialIcon className="right" iconName="send" />
                    </button>
                    <a className="btn rbtn waves-effect waves-light yellow-bg"
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
}
