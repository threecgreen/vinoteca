import React from "react";
import { CSRFToken } from "../../components/CSRFToken";
import { GrapesInputs } from "../../components/GrapesInputs";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { initPurchaseInputData, purchaseInputReducer, PurchaseInputs } from "../../components/PurchaseInputs";
import { IWineGrape } from "../../lib/Rest";
import { initWineInputData, wineInputReducer, WineInputs } from "./WineInputs";

export const NewWineApp: React.FC<{}> = (_props) => {
    const [purchaseState, purchaseDispatch] = React.useReducer(purchaseInputReducer, initPurchaseInputData());
    const [wineState, wineDispatch] = React.useReducer(wineInputReducer, initWineInputData());
    const [wineGrapes, setWineGrapes] = React.useState<IWineGrape[]>([]);

    return (
        <div className="container">
            <h3 className="page-title">Enter new wine information</h3>
            <form action="" className="col s12" method="post" encType="multipart/form-data">
                <CSRFToken />
                <Row s={ 12 }>
                    <PurchaseInputs displayInventoryBtn
                        data={ purchaseState }
                        dispatch={ purchaseDispatch }
                    />
                    <WineInputs data={ wineState }
                        dispatch={ wineDispatch }
                    />
                </Row>
                {/* TODO: make grape form not an app so special characters work */}
                <GrapesInputs wineGrapes={ wineGrapes }
                    updateWineGrapes={ setWineGrapes }
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
NewWineApp.displayName = "NewWineApp";
