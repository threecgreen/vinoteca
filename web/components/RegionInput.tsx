import React from "react";
import Logger from "../lib/Logger";
import { IRegion } from "../lib/Rest";
import { EmptyResultError, getRegions, toDict } from "../lib/RestApi";
import { autocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { TextInput } from "./TextInput";
import { IDict } from "../lib/utils";

interface IProps extends IOnChange {
    value: string;
    producerText?: string;
}

export const RegionInput: React.FC<IProps> = ({value, producerText, onChange}) => {
    const logger = new Logger(RegionInput.name);

    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    // Get autocomplete options
    React.useEffect(() => {
        async function fetchAutocompleteOptions() {
            try {
                const regions: IRegion[] = await getRegions({});
                const result: IDict<string> = {};
                regions.forEach((region) => {
                    result[region.name] = `/static/img/flags/${region.name}.svg`;
                });
                autocomplete(inputRef, result, onChange);
            } catch (e) {
                logger.logError(`Failed to get region autocomplete options. ${e.message}`);
            }
        }
        fetchAutocompleteOptions();
    }, [inputRef]);

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
                    logger.logWarning(`Error fetching regions based on producer. ${e.message}`);
                    throw e;
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
            inputRef={ inputRef }
            enabled={ enabled }
            value={ value }
            onChange={ onChange }
        />
    );
}
RegionInput.displayName = "RegionInput";
