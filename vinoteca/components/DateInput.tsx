import * as M from "materialize-css";
import * as React from "react";
import { Input } from "./Input";

interface IDateInputState {
    date?: string;
}

export class DateInput extends React.Component<{}, IDateInputState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            date: undefined,
        };
    }

    get valueSet(): boolean {
        if (this.state.date) {
            return true;
        }
        return false;
    }

    public render() {
        return <Input id="purchase-date" name="Purchase Date" value={ this.state.date || "" }
                      className="datepicker" s={ 6 } l={ 3 } active={ this.valueSet }
                      onChange={ this.onChange.bind(this) } />;
    }

    public componentDidMount() {
        const node = document.getElementsByClassName("datepicker")[0];
        const datepicker = new M.Datepicker(node, {
            autoClose: false,
            yearRange: 15,
        });
    }

    public onChange(val: string) {
        this.setState({
            date: val,
        });
    }
}
