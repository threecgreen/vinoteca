import { navigate, RouteComponentProps } from "@reach/router";
import React from "react";
import { Btn, BtnLink } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { grapeReducer, GrapesInputs, wineGrapesToForm } from "../../components/model_inputs/GrapesInputs";
import { initPurchaseInputData, purchaseDataToForm, purchaseInputReducer, PurchaseInputs } from "../../components/model_inputs/PurchaseInputs";
import { PreloaderCirc } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { createPurchase, createWine, createWineGrapes, deletePurchase, deleteWine } from "../../lib/RestApi";
import { useTitle } from "../../lib/widgets";
import { initWineInputData, wineDataToForm, wineInputReducer, WineInputs } from "./WineInputs";

export const NewWineApp: React.FC<RouteComponentProps> = (_) => {
    const [purchaseState, purchaseDispatch] = React.useReducer(purchaseInputReducer, initPurchaseInputData());
    const [wineState, wineDispatch] = React.useReducer(wineInputReducer, initWineInputData());
    const [grapes, grapesDispatch] = React.useReducer(grapeReducer, []);
    const [isSaving, setIsSaving] = React.useState(false);

    useTitle("New wine");

    const onSubmit = async () => {
        setIsSaving(true);
        const logger = new Logger("NewWineApp");

        let wineId;
        let purchaseId;
        try {
            const wineForm = await wineDataToForm(wineState, purchaseState.shouldAddToInventory
                ? purchaseState.quantity ?? 0
                : 0);
            const wine = await createWine(wineForm, wineState.file);
            wineId = wine.id;
            await Promise.all([
                async () => {
                    if (grapes.length > 0) {
                        const grapeForm = await wineGrapesToForm(grapes, wine.id);
                        await createWineGrapes(grapeForm);
                    }
                },
                async () => {
                    const purchaseForm = await purchaseDataToForm(purchaseState, wine.id);
                    if (purchaseForm) {
                        const purchase = await createPurchase(purchaseForm);
                        purchaseId = purchase.id;
                    }
                }
            ].map((f) => f()));
            navigate(`/wines/${wine.id}`);
        } catch (err) {
            logger.logError(`Error creating new wine: ${err.message}`);
            // Prevent partial data
            if (purchaseId) {
                await deletePurchase(purchaseId);
            }
            if (wineId) {
                await deleteWine(wineId);
            }
            setIsSaving(false);
        }
    }

    return (
        <div className="container">
            <h3 className="page-title">Enter new wine information</h3>
            <Form>
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
                    disabled={ isSaving }
                >
                    Confirm
                    <MaterialIcon className="right" iconName="send" />
                </Btn>
                <BtnLink classes={ ["red-bg"] }
                    to="/"
                >
                    Cancel
                </BtnLink>
                { isSaving && <PreloaderCirc className="hor-margin" /> }
            </Form>
        </div>
    );
}
NewWineApp.displayName = "NewWineApp";
