import * as React from "react";
import { DateInput } from "./DateInput";
import { Row } from "./Grid";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";

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
        const inventory = this.props.displayInventoryBtn ? null : null;
        return (
            <Row>
                <DateInput />
                { inventory }
                <NumberInput id="quantity" name="Quantity" className="validate"
                             initNumber={ this.state.quantity } enabled={ true }
                             min={ 0 } step="1" />
                <NumberInput id="price" name="Price" className="validate"
                             initNumber={ this.state.price } enabled={ true }
                             min={ 0 } step="0.01" />
                <TextInput id="store" name="Store" autocomplete={ true }
                           initText={ this.state.storeName } enabled={ true }
                           className="autocomplete" />
                <TextInput id="memo" name="Memo" autocomplete={ false }
                           initText={ this.state.memo } enabled={ true }
                           className="" />
            </Row>
        );
    }
}
