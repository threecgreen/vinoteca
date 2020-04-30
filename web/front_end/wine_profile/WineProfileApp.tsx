import { navigate } from "@reach/router";
import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { DeleteModal } from "../../components/Modal";
import { wineGrapesToForm } from "../../components/model_inputs/GrapesInputs";
import { initPurchaseInputData, IPurchaseData, purchaseDataToForm } from "../../components/model_inputs/PurchaseInputs";
import { Preloader } from "../../components/Preloader";
import { useLogger } from "../../lib/Logger";
import { IPurchase, IWineGrape } from "../../lib/Rest";
import { createPurchase, createWineGrapes, deletePurchase, deleteWine, getPurchases, getWine, getWineGrapes, updatePurchase, updateWine, deleteWineImage, uploadWineImage } from "../../lib/rest_api";
import { getNameAndType, hasChanged, arrayHasChanged } from "../../lib/utils";
import { useTitle } from "../../lib/widgets";
import { InventoryChange } from "../inventory/InventoryTable";
import { IWineData, wineDataToForm } from "../new_wine/WineInputs";
import { EditWine } from "./EditWine";
import { GrapesTable } from "./GrapesTable";
import { ModifyPurchase } from "./ModifyPurchase";
import { Purchases } from "./Purchases";
import { initState, wineReducer } from "./state";
import { WineData } from "./WineData";
import { WineHeader } from "./WineHeader";
import { WineImg } from "./WineImg";

interface IProps {
    id: number;
}

const WineProfileApp: React.FC<IProps> = ({id}) => {
    // Setup
    const [state, dispatch] = React.useReducer(wineReducer, initState());
    const logger = useLogger("WineProfileApp");

    useTitle(state.wine ? getNameAndType(state.wine.name, state.wine.wineType) : "Wine profile");

    // Data fetchers
    const fetchWine = async () => {
        const wine = await getWine({id});
        dispatch({type: "setWine", wine});
    }
    const fetchPurchases = async () => {
        const purchases = await getPurchases({wineId: id});
        dispatch({type: "setPurchases", purchases});
    }
    const fetchGrapes = async () => {
        const grapes = await getWineGrapes({wineId: id});
        dispatch({type: "setGrapes", grapes});
    }
    // FetchInitialState
    React.useEffect(() => {
        async function fetchData() {
            try {
                Promise.all([
                    fetchWine(),
                    fetchPurchases(),
                    fetchGrapes(),
                ]);
            } catch (e) {
                logger.logWarning(`Failed to load wine: ${e.message}`, {id});
            }
        }

        fetchData();
    }, [id]);

    // Event handlers
    const onInventoryChange = async (inventoryChange: InventoryChange) => {
        if (state.wine) {
            const copy = {...state.wine};
            if (inventoryChange == InventoryChange.Increase) {
                copy.inventory += 1;
            } else {
                copy.inventory -= 1;
            }
            try {
                const wine = await updateWine(id, copy, null);
                dispatch({type: "setWine", wine});
            } catch (e) {
                logger.logWarning(`Failed to change inventory. ${e.message}`, {id});
            }
        }
    }

    const onUpdateFile = async (editedFile: File | null) => {
        if (state.wine?.image && editedFile === null) {
            try {
                await deleteWineImage(id);
                // Potential race condition
                dispatch({type: "setWine", wine: {...state.wine!, image: null}});
            } catch (e) {
                logger.logWarning(`Failed to delete wine image: ${e.message}`, {id});
            }
        } else if (editedFile && state.wine?.image !== editedFile?.name) {
            logger.logInfo(`Updating wine image`, {id, oldImage: state.wine?.image, newImage: editedFile?.name})
            try {
                const image_path = await uploadWineImage(id, editedFile);
                // Potential race condition
                dispatch({type: "setWine", wine: {...state.wine!, image: image_path}});
            } catch (e) {
                logger.logWarning(`Failed to update wine image: ${e.message}`, {id});
            }
        }
    }

    const onUpdateWine = async (editedWine: IWineData) => {
        if (hasChanged({...editedWine, rating: editedWine.isRatingEnabled ? editedWine.rating : null} as IWineData,
                       state.wine, ["file"])) {
            logger.logInfo("Wine changed; saving to server", {editedWine, wine: state.wine, id});
            try {
                const wineForm = await wineDataToForm(editedWine, state.wine?.inventory ?? 0);
                const updatedWine = await updateWine(id, wineForm, null);
                dispatch({type: "setWine", wine: updatedWine});
            } catch (e) {
                logger.logError(`Failed to update wine. ${e.message}`,
                                {editedWine, id});
            }
        }
    }

    const onUpdateGrapes = async (editedGrapes: IWineGrape[]) => {
        if (arrayHasChanged(editedGrapes, state.grapes)) {
            try {
                const grapesForm = await wineGrapesToForm(editedGrapes, id);
                // Always update wine grapes, even if there are none, because this
                // is also how we handle deleting existing wine-grape relations
                const updatedGrapes = await createWineGrapes(grapesForm);
                dispatch({type: "setGrapes", grapes: updatedGrapes})
            } catch (e) {
                logger.logWarning(`Failed to update wine grapes. ${e.message}`,
                                  {editedGrapes, id});
            }
        }
    }

    const onSubmitWineEdit = async (editedWine: IWineData, editedGrapes: IWineGrape[]) => {
        try {
            await Promise.all([
                onUpdateWine(editedWine),
                onUpdateFile(editedWine.file),
                onUpdateGrapes(editedGrapes),
            ]);
            logger.logInfo("Successfully updated wine", {id});
            dispatch({type: "setMode", mode: {type: "display"}});
        } catch (e) {
            logger.logError(`Error in updating wine and grapes: ${e.message}`, {id});
        }
    }

    const onDeleteWine = async () => {
        try {
            await deleteWine(id);
            navigate("/wines");
        } catch (e) {
            logger.logWarning(`Failed to delete wine. ${e.message}`);
        }
    }

    const onSubmitPurchaseEdit = async (purchase: IPurchaseData) => {
        // @ts-ignore
        const purchaseId = state.mode.id;
        if (hasChanged(purchase, state.purchases.find((p) => p.id === purchaseId),
                       ["shouldAddToInventory"])) {
            try {
                const form = await purchaseDataToForm(purchase, id);
                if (form) {
                    const updatedPurchase = await updatePurchase(purchaseId, form);
                    dispatch({type: "setPurchases", purchases: state.purchases.map((purchase) => {
                        if (purchase.id === purchaseId) {
                            return updatedPurchase;
                        }
                        return purchase;
                    })});
                } else {
                    logger.logWarning("Not submitting purchase edit. Purchase form is invalid");
                }
            } catch (err) {
                logger.logWarning(`Failed to update purchase: ${err.message}`, {wineId: id, purchaseId});
            }
        }
        dispatch({type: "setMode", mode: {type: "display"}});
    }

    const onDeletePurchase = async (purchaseId: number) => {
        try {
            await deletePurchase(purchaseId);
            dispatch({type: "setPurchases", purchases: state.purchases.filter((p) => p.id !== purchaseId)});
        } catch (e) {
            logger.logWarning(`Error deleting purchase with id: ${purchaseId}. ${e.message}`,
                              {wineId: id, purchaseId});
        } finally {
            dispatch({type: "setMode", mode: {"type": "display"}});
        }
    }

    const onSubmitNewPurchase = async (purchase: IPurchaseData) => {
        try {
            const form = await purchaseDataToForm(purchase, id);
            if (form) {
                const newPurchase = await createPurchase(form);
                dispatch({type: "setPurchases", purchases: state.purchases.concat([newPurchase])});
                if (purchase.quantity) {
                    const copy = {...state.wine!};
                    copy.inventory += purchase.quantity;
                    const wine = await updateWine(id, copy, null);
                    dispatch({type: "setWine", wine});
                }
                dispatch({type: "setMode", mode: {"type": "display"}});
            } else {
                logger.logWarning("Not submitting new purchase form. Form is invalid");
            }
        } catch (err) {
            logger.logWarning(`Failed to create new purchase: ${err.message}`, {wineId: id});
            dispatch({type: "setMode", mode: {"type": "display"}});
        }
    }

    // Render helpers
    const renderWineData = () => (
        <WineData
            color={ state.wine!.color }
            description={ state.wine!.description }
            inventory={ state.wine!.inventory }
            onInventoryChange={ (ic) => onInventoryChange(ic) }
            lastPurchaseVintage={ state.wine!.lastPurchaseVintage }
            notes={ state.wine!.notes }
            rating={ state.wine!.rating }
            vitiArea={ state.wine!.vitiArea }
            vitiAreaId={ state.wine!.vitiAreaId }
            why={ state.wine!.why }
        />
    );

    const renderGrapes = () => <GrapesTable grapes={ state.grapes } />;
    const renderWineImg = () => <WineImg path={ state.wine?.image! } />;
    const renderWineDetails = () => {
        if (state.wine?.image && state.grapes.length) {
            return (
                <>
                    <Col s={ 12 } l={ 4 }>
                        { renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 4 }>
                        { renderGrapes() }
                    </Col>
                    <Col s={ 12 } l={ 4 }>
                        { renderWineImg() }
                    </Col>
                </>
            );
        }
        if (state.wine?.image) {
            return (
                <>
                    <Col s={ 12 } l={ 6 }>
                        { renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 6 }>
                        { renderWineImg() }
                    </Col>
                </>
            );
        }
        if (state.grapes.length) {
            return (
                <>
                    <Col s={ 12 } l={ 6 }>
                        { renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 6 }>
                        { renderGrapes() }
                    </Col>
                </>
            );
        }
        return (
            <Col s={ 12 }>
                { renderWineData() }
            </Col>
        );
    }

    // Displays relevant modal for editing/deleting
    const renderModal = () => {
        if (state.mode.type === "editWine") {
            if (state.wine) {
                return (
                    <EditWine wine={ state.wine }
                        grapes={ state.grapes }
                        onSubmit={ onSubmitWineEdit }
                        onCancel={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                    />
                );
            }
        } else if (state.mode.type === "deleteWine") {
            if (state.wine) {
                return (
                    <DeleteModal item="Wine"
                        onYesClick={ onDeleteWine }
                        onNoClick={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                    />
                )
            }
        } else if (state.mode.type === "editPurchase") {
            const purchaseId = state.mode.id;
            const purchase = state.purchases.find((p) => p.id === purchaseId);
            if (purchase) {
                return (
                    <ModifyPurchase title="Edit purchase"
                        displayInventoryBtn={ false }
                        purchase={ purchase }
                        onCancel={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                        onSubmit={ onSubmitPurchaseEdit }
                    />
                );
            }
            return null;
        } else if (state.mode.type === "deletePurchase") {
            const purchaseId = state.mode.id;
            const purchase = state.purchases.find((p) => p.id === purchaseId);
            if (purchase) {
                return (
                    <DeleteModal
                        item="Purchase"
                        onYesClick={ () => onDeletePurchase(purchaseId) }
                        onNoClick={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                    />
                )
            }
            return null;
        } else if (state.mode.type === "addPurchase") {
            const newPurchaseData = initPurchaseInputData();
            const newPurchase: IPurchase = {
                ...newPurchaseData,
                id: 0,
                wineId: id,
                storeId: null,
            };
            return (
                <ModifyPurchase title="Add purchase"
                    displayInventoryBtn
                    purchase={ newPurchase }
                    onCancel={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                    onSubmit={ onSubmitNewPurchase }
                />
            );
        } else {
            return null;
        }
    }

    if (!state.wine) {
        return <Preloader />;
    }
    return (
        <div className="container">
            <WineHeader
                name={ state.wine.name }
                producer={ state.wine.producer }
                producerId={ state.wine.producerId }
                region={ state.wine.region }
                regionId={ state.wine.regionId }
                wineType={ state.wine.wineType }
                wineTypeId={ state.wine.wineTypeId }
            >
                { renderWineDetails() }
            </WineHeader>
            <Row>
                <Col s={ 12 } m={ 9 }>
                    <h4>Purchases</h4>
                </Col>
                <Col s={ 12 } m={ 3 } classes={ ["fixed-action-div"] }>
                    <FixedActionList>
                        <FloatingBtn onClick={ () => dispatch({type: "setMode", mode: {type: "addPurchase"}}) }
                            classes={ ["green-bg"] }
                        >
                            <MaterialIcon iconName="add" />
                        </FloatingBtn>
                        <FloatingBtn onClick={ () => dispatch({type: "setMode", mode: {type: "editWine"}}) }
                            classes={ ["yellow-bg"] }
                        >
                            <MaterialIcon iconName="edit" />
                        </FloatingBtn>
                        <FloatingBtn onClick={ () => dispatch({type: "setMode", mode: {type: "deleteWine"}}) }
                            classes={ ["red-bg"] }
                        >
                            <MaterialIcon iconName="delete" />
                        </FloatingBtn>
                    </FixedActionList>
                </Col>
                <Col s={ 12 }>
                    <Purchases purchases={ state.purchases }
                        onEditClick={ (id) => dispatch({type: "setMode", mode: {type: "editPurchase", id}}) }
                        onDeleteClick={ (id) => dispatch({type: "setMode", mode: {type: "deletePurchase", id}}) }
                    />
                </Col>
            </Row>
            { renderModal() }
        </div>
    );
}
WineProfileApp.displayName = "WineProfileApp";
export default WineProfileApp;
