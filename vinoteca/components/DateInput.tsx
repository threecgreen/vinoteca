import * as M from "materialize-css";
import * as moment from "moment";
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
        return this.state.date ? moment(this.state.date).format("MMM DD, YYYY") : "";
    }

    public render() {
        return <Input id="purchase-date" name="Purchase Date" value={ this.dateString }
                      className="datepicker" s={ 6 } l={ 3 } active={ this.valueSet }
                      onChange={ () => undefined } />;
    }

    public componentDidMount() {
        const context = this;
        const node = document.getElementsByClassName("datepicker")[0];
        const datepicker = new M.Datepicker(node, {
            autoClose: false,
            defaultDate: new Date(),
            maxDate: new Date(),
            onClose: function (this) {
                context.onClose(this);
            },
            yearRange: 15,
        });
    }

    public onClose(datepicker: M.Datepicker) {
        this.setState(() => ({
            date: datepicker.date,
        }));
    }
}
