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

export const ProducerInput: React.FC<IProps> = ({value, required, ...props}) => {
    const logger = useLogger("ProducerInput", true);
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const onChangeRef = React.useRef((_: string) => { return; });
    React.useEffect(() => {
        // logger.logWarning(`onChange effect`);
        onChangeRef.current = props.onChange;
    }, [props.onChange]);

    React.useEffect(() => {
        // logger.logWarning(`fetchProducers effect`);
        async function fetchProducers() {
            try {
                const producers: IProducer[] = await getProducers({});
                autocomplete(inputRef, toDict(producers), onChangeRef.current);
            } catch (e) {
                logger.logError(`Failed to get producer autocomplete options. ${e.message}`);
            }
        }

        void fetchProducers();
    }, [inputRef, logger]);

    return (
        <TextInput name="Producer"
            className="autocomplete"
            s={ 7 } l={ 3 }
            inputRef={ inputRef }
            value={ value }
            onChange={ (s) => {
                logger.logWarning(`onChange`);
                onChangeRef.current(s);
            } }
            required={ required }
        />
    );
};
ProducerInput.displayName = "ProducerInput";
