import React from "react";
import { Btn } from "../../components/Buttons";
import { CSRFToken } from "../../components/CSRFToken";
import { grapeReducer, GrapesInputs } from "../../components/GrapesInputs";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { initPurchaseInputData, purchaseInputReducer, PurchaseInputs } from "../../components/PurchaseInputs";
import { redirect } from "../../lib/utils";
import { initWineInputData, wineInputReducer, WineInputs } from "./WineInputs";

export const NewWineApp: React.FC<{}> = (_props) => {
    const [purchaseState, purchaseDispatch] = React.useReducer(purchaseInputReducer, initPurchaseInputData());
    const [wineState, wineDispatch] = React.useReducer(wineInputReducer, initWineInputData());
    const [grapes, grapesDispatch] = React.useReducer(grapeReducer, []);

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

    }

    const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        redirect("/");
    }

    return (
        <div className="container">
            <h3 className="page-title">Enter new wine information</h3>
            <form action="" className="col s12">
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
                <GrapesInputs wineGrapes={ grapes }
                    dispatch={ grapesDispatch }
                />
                <Btn classes={ ["green-bg"] }
                    onClick={ onSubmit }
                >
                    Confirm
                    <MaterialIcon className="right" iconName="send" />
                </Btn>
                <Btn classes={ ["red-bg"] }
                    onClick={ onCancel }
                >
                    Cancel
                </Btn>
            </form>
        </div>
    );
}
NewWineApp.displayName = "NewWineApp";
