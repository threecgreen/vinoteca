import React from "react";
import Logger from "../lib/Logger";
import { IPurchaseForm, IStore } from "../lib/Rest";
import { getOrCreateStore, getStores, toDict } from "../lib/RestApi";
import { dateToNum, defaultVintageYear } from "../lib/utils";
import { autocomplete } from "../lib/widgets";
import { CheckboxInput } from "./CheckboxInput";
import { DateInput } from "./DateInput";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";

export interface IPurchaseData {
    date: number | null;
    quantity: number | null;
    shouldAddToInventory: boolean | null;
    price: number | null;
    vintage: number | null;
    store: string;
    memo: string;
}

export const initPurchaseInputData: () => IPurchaseData = () => ({
    date: dateToNum(new Date()),
    quantity: 1,
    shouldAddToInventory: true,
    price: 0.00,
    vintage: defaultVintageYear(),
    store: "",
    memo: "",
});

export const purchaseDataToForm = async (data: IPurchaseData, wineId: number): Promise<IPurchaseForm | null> => {
    let store = null;
    if (data.store) {
        store = await getOrCreateStore({name: data.store}, {name: data.store});
    }
    if (data.date === null && data.store === null && data.price === null && data.vintage === null) {
        return null;
    }
    return {
        date: data.date,
        wineId,
        quantity: data.quantity,
        storeId: store?.id ?? null,
        price: data.price,
        vintage: data.vintage,
        memo: data.memo || null
    };
}

type Action =
    | { type: "setDate", date: number | null }
    | { type: "setQuantity", quantity: number }
    | { type: "setShouldAddToInventory", shouldAddToInventory: boolean }
    | { type: "setPrice", price: number }
    | { type: "setVintage", vintage: number }
    | { type: "setStore", store: string }
    | { type: "setMemo", memo: string };

export const purchaseInputReducer: React.Reducer<IPurchaseData, Action> = (state, action) => {
    switch (action.type) {
        case "setDate":
            return { ...state, date: action.date };
        case "setQuantity":
            return { ...state, quantity: action.quantity };
        case "setShouldAddToInventory":
            return { ...state, shouldAddToInventory: action.shouldAddToInventory };
        case "setPrice":
            return { ...state, price: action.price };
        case "setVintage":
            return { ...state, vintage: action.vintage };
        case "setStore":
            return { ...state, store: action.store };
        case "setMemo":
            return { ...state, memo: action.memo };
        default:
            return state;
    }
}

interface IProps {
    displayInventoryBtn: boolean;
    data: IPurchaseData;
    dispatch: React.Dispatch<Action>;
}

export const PurchaseInputs: React.FC<IProps> = ({displayInventoryBtn, data, dispatch}) => {
    const logger = new Logger("PurchaseInputs");
    const storeInputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const onStoreChange: (store: string) => void = (store) => {
        dispatch({type: "setStore", store});
    }

    React.useEffect(() => {
        async function fetchStores() {
            try {
                const stores: IStore[] = await getStores({});
                autocomplete(storeInputRef, toDict(stores), onStoreChange);
            } catch (e) {
                logger.logError("Failed to get store autocomplete options");
            }
        }

        fetchStores();
    }, [storeInputRef]);

    const [quantityS, quantityL] = displayInventoryBtn ? [3, 2] : [6, 3];
    const inventory = displayInventoryBtn
        ? <CheckboxInput text="Add to Inventory" enabled
            name="add-to-inventory"
            isChecked={ data.shouldAddToInventory! }
            onClick={ (checked) => dispatch({type: "setShouldAddToInventory", shouldAddToInventory: checked}) }
            s={ 3 } l={ 1 }
        />
        : null;
    return (
        <>
            <DateInput name="Purchase Date"
                date={ data.date }
                onChange={ (date) => dispatch({type: "setDate", date: date}) }
            />
            <NumberInput name="Quantity"
                number={ data.quantity }
                onChange={ (quantity) => dispatch({type: "setQuantity", quantity}) }
                min={ 0 }
                step="1"
                s={ quantityS } l={ quantityL }
            />
            { inventory }
            <NumberInput name="Price"
                number={ data.price }
                onChange={ (price) => dispatch({type: "setPrice", price}) }
                min={ 0 }
                step="0.01"
                s={ 6 } l={ 3 }
            />
            <NumberInput name="Vintage"
                number={ data.vintage }
                onChange={ (vintage) => dispatch({type: "setVintage", vintage}) }
                min={ 1900 }
                step="1"
                max={ new Date().getFullYear() }
                s={ 6 } l={ 3 }
            />
            <TextInput name="Store"
                className="autocomplete"
                value={ data.store }
                onChange={ onStoreChange }
                s={ 6 } l={ 3 }
                inputRef={ storeInputRef }
            />
            <TextInput name="Memo"
                className=""
                value={ data.memo }
                onChange={ (memo) => dispatch({type: "setMemo", memo}) }
                s={ 6 } l={ 3 }
            />
        </>
    );

}
PurchaseInputs.displayName = "PurchaseInputs";
