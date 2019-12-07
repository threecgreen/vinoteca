import { format } from "date-fns";
import { Datepicker } from "materialize-css";
import * as React from "react";
import { Input } from "./Input";

interface IDateInputState {
    date?: Date;
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

    get dateString(): string {
        return this.state.date ? format(this.state.date, "MMM dd, yyyy") : "";
    }

    public render() {
        const name = "Purchase Date";
        return <Input name={ name } value={ this.dateString }
                      className="datepicker" s={ 6 } l={ 3 } active={ this.valueSet }
                      onChange={ () => undefined } />;
    }

    public componentDidMount() {
        // tslint:disable-next-line: no-this-assignment
        const context = this;
        const node = document.getElementsByClassName("datepicker")[0];
        const datepicker = new Datepicker(node, {
            autoClose: false,
            defaultDate: new Date(),
            maxDate: new Date(),
            // tslint:disable-next-line: object-literal-shorthand
            onClose: function(this) {
                context.onClose(this);
            },
            yearRange: 15,
        });
    }

    public onClose(datepicker: Datepicker) {
        this.setState(() => ({
            date: datepicker.date,
        }));
    }
}
