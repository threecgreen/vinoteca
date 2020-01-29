import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { DeleteModal } from "../../components/Modal";
import { Preloader } from "../../components/Preloader";
import { IPurchaseData, purchaseDataToForm, initPurchaseInputData } from "../../components/PurchaseInputs";
import Logger from "../../lib/Logger";
import { deletePurchase, getPurchases, getWine, getWineGrapes, updatePurchase, updateWine, createPurchase } from "../../lib/RestApi";
import { imageExists } from "../../lib/utils";
import { InventoryChange } from "../inventory/InventoryTable";
import { ModifyPurchase } from "./ModifyPurchase";
import { GrapesTable } from "./GrapesTable";
import { Purchases } from "./Purchases";
import { initState, wineReducer } from "./state";
import { WineData } from "./WineData";
import { WineHeader } from "./WineHeader";
import { WineImg } from "./WineImg";
import { IPurchase, IPurchaseForm } from "../../lib/Rest";
import { IWineData, wineDataToForm } from "../new_wine/WineInputs";
import { EditWine } from "./EditWine";

interface IProps {
    id: number;
}

export const WineProfileApp: React.FC<IProps> = ({id}) => {
    // Setup
    const [state, dispatch] = React.useReducer(wineReducer, initState());
    const logger = new Logger(WineProfileApp.name);

    // Data fetchers
    const fetchWine = async () => {
        const wine = await getWine({id});
        dispatch({type: "setWine", wine});
    }
    const fetchPurchases = async () => {
        const purchases = await getPurchases({wineId: id});
        dispatch({type: "setPurchases", purchases});
    }
    const fetchHasImage = async () => {
        const hasImage = await imageExists(`/media/${id}.png`);
        dispatch({type: "setHasImage", hasImage});
    }
    const fetchGrapes = async () => {
        const grapes = await getWineGrapes({wineId: id});
        dispatch({type: "setGrapes", grapes});
    }
    // FetchInitialState
    React.useEffect(() => {
        async function fetchData() {
            Promise.all([
                fetchWine(),
                fetchPurchases(),
                fetchHasImage(),
                fetchGrapes(),
            ]);
        }

        fetchData();
    }, [id]);

    // Event handlers
    const onInventoryChange = async (inventoryChange: InventoryChange) => {
        if (state.wine) {
            const copy = state.wine;
            if (inventoryChange == InventoryChange.Increase) {
                copy.inventory += 1;
            } else {
                copy.inventory -= 1;
            }
            try {
                // TODO: include file
                const wine = await updateWine(id, copy, null);
                dispatch({type: "setWine", wine});
            } catch (e) {
                logger.logWarning(`Failed to change inventory. ${e.message}`);
            }
        }
    }

    const onEditClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({type: "setMode", mode: {type: "editWine"}});
    }

    const onDeleteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({type: "setMode", mode: {type: "deleteWine"}});
    }

    const onAddPurchaseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({type: "setMode", mode: {type: "addPurchase"}});
    }

    const onSubmitWineEdit = async (editedWine: IWineData) => {
        try {
            const form = await wineDataToForm(editedWine, state.wine?.inventory ?? 0);
            // TODO: handle file edit
            const updatedWine = await updateWine(id, form, null);
            dispatch({type: "setWine", wine: updatedWine});
            dispatch({type: "setMode", mode: {type: "display"}});
        } catch (e) {
            logger.logWarning(`Failed to update wine. ${e.message}`);
        }
    }

    const onSubmitPurchaseEdit = async (purchase: IPurchaseData) => {
        // @ts-ignore
        const purchaseId = state.mode.id;
        try {
            const form = await purchaseDataToForm(purchase, id);
            const updatedPurchase = await updatePurchase(purchaseId, form);
            dispatch({type: "setPurchases", purchases: state.purchases.map((purchase) => {
                if (purchase.id === purchaseId) {
                    return updatedPurchase;
                }
                return purchase;
            })});
        } catch (err) {
            logger.logWarning(`Failed to update purchase: ${err.message}`);
        } finally {
            dispatch({type: "setMode", mode: {"type": "display"}});
        }
    }

    const onDeletePurchase = async (e: React.MouseEvent, purchaseId: number) => {
        e.preventDefault();
        try {
            await deletePurchase(purchaseId);
        } catch (e) {
            logger.logWarning(`Error deleting purchase with id: ${purchaseId}. ${e.message}`);
        } finally {
            dispatch({type: "setMode", mode: {"type": "display"}});
        }
    }

    // TODO: add to inventory
    const onSubmitAddPurchase = async (purchase: IPurchaseData) => {
        try {
            const form = await purchaseDataToForm(purchase, id);
            const newPurchase = await createPurchase(form);
            dispatch({type: "setPurchases", purchases: state.purchases.concat([newPurchase])});
        } catch (err) {
            logger.logWarning(`Failed to create new purchase: ${err.message}`);
        } finally {
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

    const renderWineDetails = () => {
        if (state.hasImage && state.grapes.length) {
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
        if (state.hasImage) {
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

    const renderGrapes = () => <GrapesTable grapes={ state.grapes } />;
    const renderWineImg = () => <WineImg id={ id } />;

    // Displays relevant modal for editing/deleting
    const renderModal = () => {
        if (state.mode.type === "editWine") {
            if (state.wine) {
                return (
                    <EditWine wine={ state.wine }
                        onSubmit={ onSubmitWineEdit }
                        onCancel={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                    />
                );
            }
        } else if (state.mode.type === "editPurchase") {
            const purchaseId = state.mode.id;
            const purchase = state.purchases.find((p) => p.id === purchaseId);
            if (purchase) {
                return (
                    <ModifyPurchase title="Edit purchase"
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
                    <DeleteModal display
                        item="Purchase"
                        onYesClick={ (e) => onDeletePurchase(e, purchaseId) }
                        onNoClick={ (e) => { e.preventDefault(); dispatch({type: "setMode", mode: {type: "display"}}); } }
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
                    purchase={ newPurchase }
                    onCancel={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                    onSubmit={ onSubmitAddPurchase }
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
                        <FloatingBtn onClick={ onAddPurchaseClick }
                            classes={ ["green-bg"] }
                        >
                            <MaterialIcon iconName="add" />
                        </FloatingBtn>
                        <FloatingBtn onClick={ onEditClick }
                            classes={ ["yellow-bg"] }
                        >
                            <MaterialIcon iconName="edit" />
                        </FloatingBtn>
                        <FloatingBtn onClick={ onDeleteClick }
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
