import React from "react";
import Logger from "../lib/Logger";
import { IRegion } from "../lib/Rest";
import { EmptyResultError, getRegions, toDict } from "../lib/RestApi";
import { IDict } from "../lib/utils";
import { autocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { TextInput } from "./TextInput";

interface IProps extends IOnChange {
    value: string;
    producerText?: string;
}

export const RegionInput: React.FC<IProps> = ({value, producerText, onChange}) => {
    const logger = new Logger(RegionInput.name);

    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    // Get autocomplete options
    const [autocompleteOptions, setAutocompleteOptions] = React.useState<IDict<string | null>>({});
    React.useEffect(() => {
        async function fetchAutocompleteOptions() {
            try {
                const regions: IRegion[] = await getRegions({});
                setAutocompleteOptions(toDict(regions));
                autocomplete(inputRef, autocompleteOptions, onChange);
            } catch {
                logger.logError("Failed to get region autocomplete options");
            }
        }
        fetchAutocompleteOptions();
    }, [inputRef, setAutocompleteOptions]);

    const [enabled, setEnabled] = React.useState(true);

    // Try to get region from producer input. If found, lock and set value
    React.useEffect(() => {
        async function fetchProducerRegion() {
            try {
                logger.logInfo("Updating region autocomplete options");
                const regions = await getRegions({producerName: producerText});
                if (regions.length === 1) {
                    onChange(regions[0].name);
                    setEnabled(false);
                } else {
                    setEnabled(true);
                }
            } catch (e) {
                // Ignore empty result errors
                if (!EmptyResultError.isInstance(e)) {
                    logger.logWarning(`Error fetching regions based on producer. ${e}`);
                    Promise.reject(e);
                }
            }
        }

        if (producerText) {
            fetchProducerRegion();
        } else {
            setEnabled(true);
        }
    }, [producerText, setEnabled]);

    return (
        <TextInput name="Region"
            className="autocomplete"
            s={ 6 } l={ 3 }
            enabled={ enabled }
            value={ value }
            onChange={ onChange }
        />
    );
}
RegionInput.displayName = "RegionInput";
