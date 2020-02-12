import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Btn } from "../../components/Buttons";
import { CSRFToken } from "../../components/CSRFToken";
import { grapeReducer, GrapesInputs, wineGrapesToForm } from "../../components/GrapesInputs";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { PreloaderCirc } from "../../components/Preloader";
import { initPurchaseInputData, purchaseDataToForm, purchaseInputReducer, PurchaseInputs } from "../../components/PurchaseInputs";
import Logger from "../../lib/Logger";
import { createPurchase, createWine, createWineGrapes } from "../../lib/RestApi";
import { redirect } from "../../lib/utils";
import { initWineInputData, wineDataToForm, wineInputReducer, WineInputs } from "./WineInputs";

export const NewWineApp: React.FC<RouteComponentProps> = (_) => {
    const [purchaseState, purchaseDispatch] = React.useReducer(purchaseInputReducer, initPurchaseInputData());
    const [wineState, wineDispatch] = React.useReducer(wineInputReducer, initWineInputData());
    const [grapes, grapesDispatch] = React.useReducer(grapeReducer, []);
    const [isSaving, setIsSaving] = React.useState(false);

    const onSubmit = async () => {
        setIsSaving(true);
        // TODO: check certain forms aren't empty
        const logger = new Logger(NewWineApp.name);
        try {
            const wineForm = await wineDataToForm(wineState, purchaseState.shouldAddToInventory ? purchaseState.quantity ?? 0 : 0);
            const wine = await createWine(wineForm, wineState.file);
            await Promise.all([
                async () => {
                    if (grapes.length > 0) {
                        const grapeForm = await wineGrapesToForm(grapes, wine.id);
                        await createWineGrapes(grapeForm);
                    }
                },
                async () => {
                    const purchaseForm = await purchaseDataToForm(purchaseState, wine.id);
                    await createPurchase(purchaseForm);
                }
            ].map((f) => f()));
            redirect(`/wines/${wine.id}`);
        } catch (err) {
            setIsSaving(false);
            logger.logError(`Error creating new wine: ${err.message}`);
        }
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
                <GrapesInputs grapes={ grapes }
                    dispatch={ grapesDispatch }
                />
                <Btn classes={ ["green-bg"] }
                    onClick={ onSubmit }
                >
                    Confirm
                    <MaterialIcon className="right" iconName="send" />
                </Btn>
                <Btn classes={ ["red-bg"] }
                    onClick={ () => redirect("/") }
                >
                    Cancel
                </Btn>
                { isSaving && <PreloaderCirc /> }
            </form>
        </div>
    );
}
NewWineApp.displayName = "NewWineApp";
