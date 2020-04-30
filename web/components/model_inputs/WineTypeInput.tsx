import React from "react";
import { IWineType } from "../../lib/Rest";
import { getWineTypes, toDict } from "../../lib/rest_api";
import { autocomplete } from "../../lib/widgets";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IWineTypeInputProps extends IOnChange {
    value: string;
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
        />
    );
}
WineTypeInput.displayName = "WineTypeInput";
