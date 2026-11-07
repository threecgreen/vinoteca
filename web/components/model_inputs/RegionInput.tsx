import { IRegion } from "generated/rest";
import { EmptyResultError } from "lib/api/common";
import { getRegions } from "lib/api/regions";
import { useLogger } from "lib/Logger";
import React from "react";
import { Autocomplete } from "../inputs/Autocomplete";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    required: boolean;
    producerText?: string;
}

export const RegionInput: React.FC<IProps> = ({value, producerText, required, onChange}) => {
    const logger = useLogger("RegionInput");
    const [completions, setCompletions] = React.useState<Record<string, string | null>>({});
    const [enabled, setEnabled] = React.useState(true);
    const onChangeRef = React.useRef(onChange);
    onChangeRef.current = onChange;

    // Get autocomplete options
    React.useEffect(() => {
        async function fetchAutocompleteOptions() {
            try {
                const regions: IRegion[] = await getRegions({});
                const result: Record<string, string> = {};
                regions.forEach((region) => {
                    result[region.name] = `/static/img/flags/${region.name}.svg`;
                });
                setCompletions(result);
            } catch (e) {
                logger.logException("Failed to get region autocomplete options", e);
            }
        }
        void fetchAutocompleteOptions();
    }, [logger]);

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
                if (!(e instanceof Error) || !EmptyResultError.isInstance(e)) {
                    logger.logWarning(`Error fetching regions based on producer. ${e}`,
                                      {producerText});
                    throw e;
                }
            }
        }

        if (producerText) {
            void fetchProducerRegion();
        } else {
            setEnabled(true);
        }
    }, [logger, producerText]);

    return (
        <Autocomplete name="Region"
            s={ 12 } m={ 6 } l={ 3 }
            value={ value }
            onChange={ onChange }
            completions={ completions }
            required={ required }
            enabled={ enabled }
        />
    );
};
RegionInput.displayName = "RegionInput";
