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
    quantity: number;
}

export class PurchaseInputs extends React.Component<IPurchaseInputsProps, IPurchaseInputsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            purchases: {},
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

            </Row>
        );
    }
}
