import { IPurchaseForm, IStore } from "generated/rest";
import { toDict } from "lib/api/common";
import { getOrCreateStore, getStores } from "lib/api/stores";
import { defaultVintageYear } from "lib/component_utils";
import { useLogger } from "lib/Logger";
import { autocomplete } from "lib/widgets";
import React from "react";
import { CheckboxInput } from "../inputs/CheckboxInput";
import { DateInput } from "../inputs/DateInput";
import { NumberInput } from "../inputs/NumberInput";
import { TextInput } from "../inputs/TextInput";

export interface IPurchaseData {
    date: Date | null;
    quantity: number;
    shouldAddToInventory: boolean | null;
    price: number | null;
    vintage: number | null;
    store: string;
    memo: string;
}

export const initPurchaseInputData: () => IPurchaseData = () => ({
    date: new Date(),
    quantity: 1,
    shouldAddToInventory: true,
    price: null,
    vintage: defaultVintageYear(),
    store: "",
    memo: "",
});

export const purchaseDataToForm = async (data: IPurchaseData, wineId: number):
    Promise<IPurchaseForm | null> => {

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
        memo: data.memo || null,
    };
};

type Action =
    | { type: "setDate", date: Date | null }
    | { type: "setQuantity", quantity: number }
    | { type: "setShouldAddToInventory", shouldAddToInventory: boolean }
    | { type: "setPrice", price: number }
    | { type: "setVintage", vintage: number }
    | { type: "setStore", store: string }
    | { type: "setMemo", memo: string }
    | { type: "reset" };

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
        case "reset":
            return initPurchaseInputData();
        default:
            return state;
    }
};

interface IProps {
    displayInventoryBtn: boolean;
    data: IPurchaseData;
    dispatch: React.Dispatch<Action>;
}

export const PurchaseInputs: React.FC<IProps> = ({displayInventoryBtn, data, dispatch}) => {
    const logger = useLogger("PurchaseInputs");
    const storeInputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        async function fetchStores() {
            try {
                const stores: IStore[] = await getStores({});
                autocomplete(
                    storeInputRef,
                    toDict(stores),
                    (store) => dispatch({type: "setStore", store})
                );
            } catch (e) {
                logger.logError("Failed to get store autocomplete options");
            }
        }

        void fetchStores();
    }, [dispatch, logger, storeInputRef]);

    const [quantityS, quantityL] = displayInventoryBtn ? [3, 2] : [6, 3];
    const inventory = displayInventoryBtn
        ? <CheckboxInput text="Add to Inventory" enabled
            name="add-to-inventory"
            isChecked={ data.shouldAddToInventory ?? false }
            onClick={ (checked) =>
                dispatch({type: "setShouldAddToInventory", shouldAddToInventory: checked}) }
            s={ 3 } l={ 1 }
        />
        : null;
    return (
        <>
            <DateInput name="Purchase Date"
                date={ data.date }
                onChange={ (date) => dispatch({type: "setDate", date}) }
            />
            <NumberInput name="Quantity"
                number={ data.quantity }
                required={ true }
                onChange={ (quantity) => dispatch({type: "setQuantity", quantity}) }
                min={ 1 }
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
                onChange={ (store) => dispatch({type: "setStore", store}) }
                s={ 12 } m={ 6 } l={ 3 }
                inputRef={ storeInputRef }
            />
            <TextInput name="Memo"
                className=""
                value={ data.memo }
                onChange={ (memo) => dispatch({type: "setMemo", memo}) }
                s={ 12 } m={ 6 } l={ 3 }
            />
        </>
    );

};
PurchaseInputs.displayName = "PurchaseInputs";
