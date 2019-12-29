import format from "date-fns/esm/format";
import { Datepicker } from "materialize-css";
import * as React from "react";
import { Input } from "./Input";

export const DateInput: React.FC<{}> = (_props) => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    React.useEffect(() => {
        const node = document.getElementsByClassName("datepicker")[0];
        const datepicker = new Datepicker(node, {
            autoClose: false,
            defaultDate: new Date(),
            maxDate: new Date(),
            // tslint:disable-next-line: object-literal-shorthand
            onClose: function(this) {
                setDate(datepicker.date);
            },
            yearRange: 15,
        });
    }, []);

    const dateString = date ? format(date, "MMM dd, yyyy") : "";
    const isValueSet = date !== undefined;
    const name = "Purchase Date";

    return (
        <Input name={ name }
            value={ dateString }
            className="datepicker"
            s={ 6 } l={ 3 }
            active={ isValueSet }
        />
    );
};
DateInput.displayName = "DateInput";
