import React from "react";
import { toDict } from "../../lib/api/common";
import { IVitiArea } from "../../lib/api/Rest";
import { getVitiAreas } from "../../lib/api/viti_areas";
import { useLogger } from "../../lib/Logger";
import { autocomplete } from "../../lib/widgets";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    regionText?: string;
}

export const VitiAreaInput: React.FC<IProps> = ({value, regionText, onChange}) => {
    const logger = useLogger("VitiAreaInput");
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
        <TextInput name="Viticultural Area"
            className="autocomplete"
            inputRef={ inputRef }
            s={ 12 } m={ 8 } l={ 4 }
            value={ value }
            onChange={ onChange }
        />
    );
}
VitiAreaInput.displayName = "VitiAreaInput";
