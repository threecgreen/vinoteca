import format from "date-fns/esm/format";
import { useLogger } from "lib/Logger";
import { Datepicker } from "materialize-css";
import React from "react";
import { Input } from "./Input";

interface IProps {
    date: Date | null;
    name: string;
    onChange: (date: Date | null) => void;
}

export const DateInput: React.FC<IProps> = ({ date, name, ...props }) => {
    const logger = useLogger("DateInput");
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const onChangeRef = React.useRef((_: Date | null) => { return; })
    React.useEffect(() => {
        onChangeRef.current = props.onChange;
    }, [props.onChange]);

    React.useEffect(() => {
        const datepicker = new Datepicker(inputRef.current, {
            autoClose: false,
            maxDate: new Date(),
            showClearBtn: true,
            onClose: function(this) {
                if (datepicker.date) {
                    onChangeRef.current(datepicker.date);
                } else {
                    onChangeRef.current(null);
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
        props.onChange(null);
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
