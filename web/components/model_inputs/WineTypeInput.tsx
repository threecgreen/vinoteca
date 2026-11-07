import { IWineType } from "generated/rest";
import { toDict } from "lib/api/common";
import { getWineTypes } from "lib/api/wine_types";
import React from "react";
import { Autocomplete } from "../inputs/Autocomplete";
import { IOnChange } from "../IProps";

interface IWineTypeInputProps extends IOnChange {
    value: string;
    required: boolean;
}

export const WineTypeInput: React.FC<IWineTypeInputProps> = (props) => {
    const [completions, setCompletions] = React.useState<Record<string, string | null>>({});

    React.useEffect(() => {
        async function fetchWineTypes() {
            const wineTypes: IWineType[] = await getWineTypes({});
            setCompletions(toDict(wineTypes));
        }
        void fetchWineTypes();
    }, []);

    return (
        <Autocomplete name="Wine Type"
            s={ 12 } m={ 6 } l={ 4 }
            value={ props.value }
            onChange={ props.onChange }
            completions={ completions }
            required={ props.required }
        />
    );
};
WineTypeInput.displayName = "WineTypeInput";
