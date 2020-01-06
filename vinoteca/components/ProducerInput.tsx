import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IProps extends IOnChange {
    value: string;
    onSpecialCharClick: (c: string, position: number) => void;
}

export const ProducerInput: React.FC<IProps> = (props) => {
    const logger = new Logger(ProducerInput.name);

    React.useEffect(() => {
        async function fetchProducers() {
            try {
                const producers: IDict<string> = await get("/rest/producers/all/");
                staticAutocomplete(nameToId("Producer"), producers, props.onChange);
            } catch (e) {
                logger.logError(`Failed to get producer autocomplete options. ${e}`);
            }
        }

        fetchProducers();
    }, []);

    return (
        <StatelessTextInput name="Producer"
            className="autocomplete"
            s={ 6 } l={ 3 }
            { ...props }
        />
    )
};
ProducerInput.displayName = "ProducerInput";
