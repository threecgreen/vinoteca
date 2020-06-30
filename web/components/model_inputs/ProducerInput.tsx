import { IProducer } from "generated/rest";
import { toDict } from "lib/api/common";
import { getProducers } from "lib/api/producers";
import { useLogger } from "lib/Logger";
import { autocomplete } from "lib/widgets";
import React from "react";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    required: boolean;
}

export const ProducerInput: React.FC<IProps> = ({value, onChange, required}) => {
    const logger = useLogger("ProducerInput");
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        async function fetchProducers() {
            try {
                const producers: IProducer[] = await getProducers({});
                autocomplete(inputRef, toDict(producers), onChange);
            } catch (e) {
                logger.logError(`Failed to get producer autocomplete options. ${e.message}`);
            }
        }

        fetchProducers();
    }, [inputRef]);

    return (
        <TextInput name="Producer"
            className="autocomplete"
            s={ 7 } l={ 3 }
            inputRef={ inputRef }
            value={ value }
            onChange={ onChange }
            required={ required }
        />
    );
};
ProducerInput.displayName = "ProducerInput";
