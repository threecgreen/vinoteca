import { navigate, RouteComponentProps } from "@reach/router";
import React from "react";
import { Btn, BtnLink } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { grapeReducer, GrapesInputs, wineGrapesToForm } from "../../components/model_inputs/GrapesInputs";
import { initPurchaseInputData, purchaseDataToForm, purchaseInputReducer, PurchaseInputs } from "../../components/model_inputs/PurchaseInputs";
import { PreloaderCirc } from "../../components/Preloader";
import { createPurchase, deletePurchase } from "../../lib/api/purchases";
import { createWine, deleteWine } from "../../lib/api/wines";
import { createWineGrapes } from "../../lib/api/wine_grapes";
import { useLocalStorageReducer } from "../../lib/local_storage";
import { useLogger } from "../../lib/Logger";
import { useTitle } from "../../lib/widgets";
import { initWineInputData, wineDataToForm, wineInputReducer, WineInputs } from "./WineInputs";

const NewWineApp: React.FC<RouteComponentProps> = (_) => {
    const logger = useLogger("NewWineApp");
    const [purchaseState, purchaseDispatch, clearPurchaseStorage] = useLocalStorageReducer("NewWineApp-Purchase", purchaseInputReducer, initPurchaseInputData);
    const [wineState, wineDispatch, clearWineStorage] = useLocalStorageReducer("NewWineApp-Wine", wineInputReducer, initWineInputData, ["file"]);
    const [grapes, grapesDispatch, clearGrapesStorage] = useLocalStorageReducer("NewWineApp-Grapes", grapeReducer, () => []);
    const [isSaving, setIsSaving] = React.useState(false);

    useTitle("New wine");

    const onSubmit = async () => {
        setIsSaving(true);

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

            clearPurchaseStorage();
            clearWineStorage();
            clearGrapesStorage();
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

    const onReset = () => {
        purchaseDispatch({type: "reset"});
        wineDispatch({type: "reset"});
        grapesDispatch({type: "reset"});
    }

    return (
        <div className="container">
            <h3 className="page-title">Enter new wine information</h3>
            <Btn classes={ ["yellow-bg"] }
                onClick={ onReset }
            >
                Reset form
            </Btn>
            <Form onSubmit={ () => !isSaving && wineState.producer && wineState.region && wineState.wineType && onSubmit() }>
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
                    disabled={ isSaving || !wineState.producer || !wineState.region || !wineState.wineType }
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
export default NewWineApp;
