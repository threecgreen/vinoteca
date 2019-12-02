import * as React from "react";
import { defaultVintageYear } from "../lib/utils";
import { CheckboxInput } from "./CheckboxInput";
import { DateInput } from "./DateInput";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";

interface IProps {
    displayInventoryBtn: boolean;
    memo: string;
    storeName: string;
}

interface IState {
    date: Date;
    price: number;
    quantity: number;
}

export class PurchaseInputs extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            date: new Date(),
            price: 0.00,
            quantity: 1,
        };
    }

    public render() {
        const inventory = this.props.displayInventoryBtn
            ? <CheckboxInput id="add-to-inventory" text="Add to Inventory"
                             default={ true } s={ 3 } l={ 1 } />
            : null;
        const [quantityS, quantityL] = this.calcQuantitySize();
        return (
            <>
                <DateInput />
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

    private calcQuantitySize(): [number, number] {
        if (this.props.displayInventoryBtn) {
            return [3, 2];
        }
        return [6, 3];
    }
}
