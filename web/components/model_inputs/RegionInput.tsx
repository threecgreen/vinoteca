import { IRegion } from "generated/rest";
import { EmptyResultError } from "lib/api/common";
import { getRegions } from "lib/api/regions";
import { useLogger } from "lib/Logger";
import { autocomplete } from "lib/widgets";
import React from "react";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    required: boolean;
    producerText?: string;
}

// TODO: validate region exists
export const RegionInput: React.FC<IProps> = ({value, producerText, required, ...props}) => {
    const logger = useLogger("RegionInput");

    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const onChangeRef = React.useRef((_: string) => { return; });
    React.useEffect(() => {
        onChangeRef.current = props.onChange;
    }, [props.onChange]);

    // Get autocomplete options
    React.useEffect(() => {
        async function fetchAutocompleteOptions() {
            try {
                const regions: IRegion[] = await getRegions({});
                const result: Record<string, string> = {};
                regions.forEach((region) => {
                    result[region.name] = `/static/img/flags/${region.name}.svg`;
                });
                autocomplete(inputRef, result, onChangeRef.current);
            } catch (e) {
                logger.logError(`Failed to get region autocomplete options. ${e.message}`);
            }
        }
        void fetchAutocompleteOptions();
    }, [inputRef, logger]);

    const [enabled, setEnabled] = React.useState(true);

    // Try to get region from producer input. If found, lock and set value
    React.useEffect(() => {
        async function fetchProducerRegion() {
            try {
                logger.logInfo("Updating region autocomplete options");
                const regions = await getRegions({producerName: producerText});
                if (regions.length === 1) {
                    onChangeRef.current(regions[0].name);
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
            void fetchProducerRegion();
        } else {
            setEnabled(true);
        }
    }, [logger, producerText, setEnabled]);

    return (
        <TextInput name="Region"
            className="autocomplete"
            s={ 5 } l={ 3 }
            inputRef={ inputRef }
            enabled={ enabled }
            value={ value }
            onChange={ onChangeRef.current }
            required={ required }
        />
    );
};
RegionInput.displayName = "RegionInput";
