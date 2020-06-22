import React from "react";
import { toDict } from "../../lib/api/common";
import { IWineType } from "../../lib/api/Rest";
import { getWineTypes } from "../../lib/api/wine_types";
import { autocomplete } from "../../lib/widgets";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IWineTypeInputProps extends IOnChange {
    value: string;
    required: boolean;
}

export const WineTypeInput: React.FC<IWineTypeInputProps> = (props) => {
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        async function fetchWineTypes() {
            const wineTypes: IWineType[] = await getWineTypes({});
            autocomplete(inputRef, toDict(wineTypes), props.onChange);
        }
        fetchWineTypes();
    }, []);

    return (
        <TextInput name="Wine Type"
            className="autocomplete"
            s={ 12 } m={ 8 } l={ 4 }
            value={ props.value }
            inputRef={ inputRef }
            onFocus={ props.onFocus }
            onChange={ props.onChange }
            onBlur={ props.onBlur }
            required={ props.required }
        />
    );
};
WineTypeInput.displayName = "WineTypeInput";
