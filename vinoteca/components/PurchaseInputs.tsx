import * as React from "react";
import { CheckboxInput } from "./CheckboxInput";
import { DateInput } from "./DateInput";
import { Row } from "./Grid";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";
import { defaultVintageYear } from "../lib/utils";

interface IPurchaseInputsProps {
    displayInventoryBtn: boolean;
}

interface IPurchaseInputsState {
    date: Date;
    memo: string;
    price: number;
    quantity: number;
    storeName: string;
}

export class PurchaseInputs extends React.Component<IPurchaseInputsProps, IPurchaseInputsState> {
    constructor(props: IPurchaseInputsProps) {
        super(props);
        this.state = {
            date: new Date(),
            memo: "",
            price: 0.00,
            quantity: 1,
            storeName: "",
        };
    }

    public render() {
        const inventory = this.props.displayInventoryBtn
            ? <CheckboxInput id="add-to-inventory" text="Add to Inventory"
                             default={ true } s={ 3 } l={ 1 } />
            : null;
        const [quantityS, quantityL] = this.calcQuantitySize();
        return (
            <Row>
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
                             min={1900 } step="1" max={ new Date().getFullYear() }
                             s={ 6 } l={ 3 } />
                <TextInput id="store" name="Store" autocomplete={ true }
                           initText={ this.state.storeName } enabled={ true }
                           className="autocomplete" s={ 6 } l={ 3 } />
                <TextInput id="memo" name="Memo" autocomplete={ false }
                           initText={ this.state.memo } enabled={ true }
                           className="" s={ 6 } l={ 3 } />
            </Row>
        );
    }

    private calcQuantitySize(): [number, number] {
        if (this.props.displayInventoryBtn) {
            return [3, 2];
        }
        return [6, 3];
    }
}
