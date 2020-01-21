import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import { IPurchaseData, purchaseDataToForm } from "../../components/PurchaseInputs";
import Logger from "../../lib/Logger";
import { IPurchase, IWine, IWineGrape } from "../../lib/Rest";
import { getPurchases, getWine, getWineGrapes, updateWine, updatePurchase } from "../../lib/RestApi";
import { imageExists } from "../../lib/utils";
import { InventoryChange } from "../inventory/InventoryTable";
import { EditPurchase } from "./EditPurchase";
import { GrapesTable } from "./GrapesTable";
import { Purchases } from "./Purchases";
import { initState, wineReducer } from "./State";
import { WineData } from "./WineData";
import { WineHeader } from "./WineHeader";
import { WineImg } from "./WineImg";

interface IProps {
    id: number;
}

interface IState {
    isEditing: boolean;
    // "Pure" state
    hasImage: boolean;
    grapes: IWineGrape[];
    wine?: IWine;
    purchases: IPurchase[];
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
                const wine = await updateWine(id, copy);
                dispatch({type: "setWine", wine});
            } catch {
                logger.logWarning("Failed to change inventory");
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

    const onSubmitPurchaseEdit = async (purchase: IPurchaseData) => {
        // @ts-ignore
        const purchaseId = state.mode.id;
        try {
            const form = await purchaseDataToForm(purchase, id);
            const updatedPurchase = await updatePurchase(id, form);
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
        switch (state.mode.type) {
            case "editPurchase":
                return (
                    // @ts-ignore : not sure why it can't detect state.mode.id here
                    <EditPurchase purchase={ state.purchases.find((purchase) => purchase.id === state.mode.id!)! }
                        onCancel={ () => dispatch({type: "setMode", mode: {type: "display"}}) }
                        onSubmit={ onSubmitPurchaseEdit }
                    />
                );
            default:
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
