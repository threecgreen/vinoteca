import { IWineType } from "generated/rest";
import { toDict } from "lib/api/common";
import { getWineTypes } from "lib/api/wine_types";
import React from "react";
import { RequiredIndicator } from "../RequiredIndicator";
import { InputField } from "../Grid";
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
        <InputField s={12} m={6} l={4}>
            <label>
                Wine Type{props.required && <RequiredIndicator />}
            </label>
            <Autocomplete
                name="wineType"
                value={props.value}
                onChange={props.onChange}
                completions={completions}
            />
        </InputField>
    );
};
WineTypeInput.displayName = "WineTypeInput";
