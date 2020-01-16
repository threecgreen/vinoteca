import React from "react";
import { defaultVintageYear, numToDate } from "../lib/utils";
import { CheckboxInput } from "./CheckboxInput";
import { DateInput } from "./DateInput";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";

export interface PurchaseInputData {
    date: number;
    quantity: number;
    shouldAddToInventory: boolean | null;
    price: number;
    vintage: number;
    store: string;
    memo: string;
}

interface IProps {
    displayInventoryBtn: boolean;
}

export const PurchaseInputs: React.FC<IProps> = (props) => {
            // date: new Date(),
            // price: 0.00,
            // quantity: 1,

    const [quantityS, quantityL] = props.displayInventoryBtn ? [3, 2] : [6, 3];

    const inventory = props.displayInventoryBtn
        ? <CheckboxInput text="Add to Inventory" enabled
            name="add-to-inventory"
            isChecked={ props.shouldAddToInventory }
            onClick={ props.onInput }
            s={ 3 } l={ 1 }
        />
        : null;
    return (
        <>
            <DateInput name="Purchase Date"
                date={ props.formData.date !== null ? numToDate(props.formData.date) : props.formData.date }


            />
            <NumberInput id="quantity" name="Quantity" className="validate"
                            initNumber={ this.state.quantity } enabled={ true }
                            min={ 0 } step="1" s={ quantityS } l={ quantityL } />
            { inventory }
            <NumberInput id="price" name="Price" className="validate"
                            initNumber={ this.state.price } enabled={ true }
                            min={ 0 } step="0.01" s={ 6 } l={ 3 } />
            <NumberInput id="vintage" name="Vintage" className="validate"
                            initNumber={ defaultVintageYear() } enabled={ true }
                            min={ 1900 } step="1" max={ new Date().getFullYear() }
                            s={ 6 } l={ 3 } />
            <TextInput name="Store" autocomplete enabled
                initText={ this.props.storeName } className="autocomplete" s={ 6 } l={ 3 }
            />
            <TextInput name="Memo" autocomplete={ false }
                initText={ this.props.memo } enabled className="" s={ 6 } l={ 3 }
            />
        </>
    );

}
PurchaseInputs.displayName = "PurchaseInputs";
