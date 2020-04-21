import React from "react";
import Logger from "../../lib/Logger";
import { IProducer } from "../../lib/Rest";
import { getProducers, toDict } from "../../lib/RestApi";
import { autocomplete } from "../../lib/widgets";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
}

export const ProducerInput: React.FC<IProps> = ({value, onChange}) => {
    const logger = new Logger("ProducerInput");
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
            s={ 6 } l={ 3 }
            inputRef={ inputRef }
            value={ value }
            onChange={ onChange }
        />
    )
};
ProducerInput.displayName = "ProducerInput";
