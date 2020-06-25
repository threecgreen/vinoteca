import format from "date-fns/esm/format";
import { Datepicker } from "materialize-css";
import React from "react";
import { useLogger } from "../../lib/Logger";
import { Input } from "./Input";

interface IProps {
    date: Date | null;
    name: string;
    onChange: (date: Date | null) => void;
}

export const DateInput: React.FC<IProps> = ({ date, onChange }) => {
    const logger = useLogger("DateInput");
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        const datepicker = new Datepicker(inputRef.current, {
            autoClose: false,
            maxDate: new Date(),
            showClearBtn: true,
            // tslint:disable-next-line: object-literal-shorthand
            onClose: function(this) {
                if (datepicker.date) {
                    onChange(datepicker.date);
                } else {
                    onChange(null);
                }
            },
            yearRange: 15,
        });
    }, [inputRef]);

    let dateString = "";
    try {
        dateString = date ? format(date, "MMM dd, yyyy") : "";
    } catch (e) {
        logger.logWarning("Failed to format date", {name, date});
        onChange(null);
    }
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
