import React from "react";
import { Btn } from "../../components/Buttons";
import { CSRFToken } from "../../components/CSRFToken";
import { grapeReducer, GrapesInputs } from "../../components/GrapesInputs";
import { Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { initPurchaseInputData, purchaseInputReducer, PurchaseInputs } from "../../components/PurchaseInputs";
import Logger from "../../lib/Logger";
import { IColor, IProducer, IVitiArea, IWineType } from "../../lib/Rest";
import { createPurchase, createWine, getColor, getOrCreateProducer, getOrCreateRegion, getOrCreateStore, getOrCreateVitiArea, getOrCreateWineType } from "../../lib/RestApi";
import { redirect } from "../../lib/utils";
import { initWineInputData, wineInputReducer, WineInputs } from "./WineInputs";

export const NewWineApp: React.FC<{}> = (_props) => {
    const [purchaseState, purchaseDispatch] = React.useReducer(purchaseInputReducer, initPurchaseInputData());
    const [wineState, wineDispatch] = React.useReducer(wineInputReducer, initWineInputData());
    const [grapes, grapesDispatch] = React.useReducer(grapeReducer, []);

    const getOrCreateVitiAreaForRegion = async (regionId: number) => {
        if (wineState.vitiArea) {
            return getOrCreateVitiArea({name: wineState.vitiArea}, {name: wineState.vitiArea, regionId});
        }
        return null;
    }

    const getProducerAndVitiArea = async () => {
        const region = await getOrCreateRegion({name: wineState.region}, {name: wineState.region});
        return Promise.all<IProducer, IVitiArea | null>([
            getOrCreateProducer({name: wineState.producer}, {name: wineState.producer, regionId: region.id}),
            getOrCreateVitiAreaForRegion(region.id),
        ]);
    }

    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // TODO: buildWineForm
        // TODO: check certain forms aren't empty
        const logger = new Logger(NewWineApp.name);
        try {
            const [color, wineType, [producer, vitiArea]] = await Promise.all<IColor, IWineType, [IProducer, IVitiArea | null]>([
                getColor({name: wineState.color}),
                getOrCreateWineType({name: wineState.wineType}, {name: wineState.wineType}),
                getProducerAndVitiArea(),
            ]);
            const wine = await createWine({
                colorId: color.id,
                wineTypeId: wineType.id,
                producerId: producer.id,
                vitiAreaId: vitiArea?.id ?? null,
                name: wineState.name || null,
                why: wineState.why || null,
                description: wineState.description || null,
                rating: wineState.isRatingEnabled ? wineState.rating : null,
                inventory: purchaseState.shouldAddToInventory ? purchaseState.quantity : 0,
                notes: wineState.notes || null,
            });
            // TODO: upload image
            let store = null;
            if (purchaseState.store) {
                store = await getOrCreateStore({name: purchaseState.store}, {name: purchaseState.store});
            }
            await createPurchase({
                date: purchaseState.date,
                wineId: wine.id,
                quantity: purchaseState.quantity,
                storeId: store?.id ?? null,
                price: purchaseState.price,
                vintage: purchaseState.vintage,
                memo: purchaseState.memo
            });
            redirect(`/wines/${wine.id}`);
        } catch (err) {
            logger.logError(`Error creating new wine: ${err.message}`);
        }
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
                    onClick={ onCancel }
                >
                    Cancel
                </Btn>
            </form>
        </div>
    );
}
NewWineApp.displayName = "NewWineApp";
