import format from "date-fns/esm/format";
import { Datepicker } from "materialize-css";
import React from "react";
import { deserializeDate, serializeDate } from "../../lib/date";
import { Input } from "./Input";

interface IProps {
    date: string | null;
    name: string;
    onChange: (date: string | null) => void;
}

export const DateInput: React.FC<IProps> = ({ date, onChange }) => {
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        const datepicker = new Datepicker(inputRef.current, {
            autoClose: false,
            maxDate: new Date(),
            showClearBtn: true,
            // tslint:disable-next-line: object-literal-shorthand
            onClose: function(this) {
                if (datepicker.date) {
                    onChange(serializeDate(datepicker.date));
                } else {
                    onChange(null);
                }
            },
            yearRange: 15,
        });
    }, [inputRef]);

    const dateString = date ? format(deserializeDate(date), "MMM dd, yyyy") : "";
    const isValueSet = date !== null;

    return (
        <Input name={ name }
            value={ dateString }
            className="datepicker"
            inputFieldClassName="col"
            s={ 6 } l={ 3 }
            active={ isValueSet }
            inputRef={ inputRef }
        />
    );
};
DateInput.displayName = "DateInput";
