import React from "react";
import Logger from "../lib/Logger";
import { IVitiArea } from "../lib/Rest";
import { getVitiAreas, toDict } from "../lib/RestApi";
import { autocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { TextInput } from "./TextInput";

interface IProps extends IOnChange {
    value: string;
    regionText?: string;
}

export const VitiAreaInput: React.FC<IProps> = ({value, regionText, onChange}) => {
    const logger = new Logger(VitiAreaInput.name);
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        async function fetchVitiAreas() {
            try {
                const vitiAreas: IVitiArea[] = await getVitiAreas({regionName: regionText});
                autocomplete(inputRef, toDict(vitiAreas), onChange);
            } catch (e) {
                logger.logError("Failed to get viti area autocomplete options");
            }
        }

        fetchVitiAreas();
    }, [inputRef, regionText]);

    return (
        <TextInput name="Viti Area"
            className="autocomplete"
            inputRef={ inputRef }
            s={ 8 } l={ 4 }
            value={ value }
            onChange={ onChange }
        />
    );
}
VitiAreaInput.displayName = "VitiAreaInput";
