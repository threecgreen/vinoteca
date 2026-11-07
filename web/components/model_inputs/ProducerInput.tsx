import { IProducer } from "generated/rest";
import { toDict } from "lib/api/common";
import { getProducers } from "lib/api/producers";
import { useLogger } from "lib/Logger";
import React from "react";
import { Autocomplete } from "../inputs/Autocomplete";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    required: boolean;
}

export const ProducerInput: React.FC<IProps> = ({value, required, onChange}) => {
    const logger = useLogger("ProducerInput", true);
    const [completions, setCompletions] = React.useState<Record<string, string | null>>({});

    React.useEffect(() => {
        async function fetchProducers() {
            try {
                const producers: IProducer[] = await getProducers({});
                setCompletions(toDict(producers));
            } catch (e) {
                logger.logException("Failed to get producer autocomplete options", e);
            }
        }

        void fetchProducers();
    }, [logger]);

    return (
        <Autocomplete name="Producer"
            s={ 12 } m={ 6 } l={ 3 }
            value={ value }
            onChange={ onChange }
            completions={ completions }
            required={ required }
        />
    );
};
ProducerInput.displayName = "ProducerInput";
