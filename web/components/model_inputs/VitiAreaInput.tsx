import { IVitiArea } from "generated/rest";
import { toDict } from "lib/api/common";
import { getVitiAreas } from "lib/api/viti_areas";
import { useLogger } from "lib/Logger";
import { autocomplete } from "lib/widgets";
import React from "react";
import { TextInput } from "../inputs/TextInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    regionText?: string;
}

export const VitiAreaInput: React.FC<IProps> = ({value, regionText, ...props}) => {
    const logger = useLogger("VitiAreaInput");
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const onChangeRef = React.useRef((_: string) => { return; });
    React.useEffect(() => {
        onChangeRef.current = props.onChange;
    }, [props.onChange]);

    React.useEffect(() => {
        async function fetchVitiAreas() {
            try {
                const vitiAreas: IVitiArea[] = await getVitiAreas({regionName: regionText});
                autocomplete(inputRef, toDict(vitiAreas), onChangeRef.current);
            } catch (e) {
                logger.logError("Failed to get viti area autocomplete options");
            }
        }

        void fetchVitiAreas();
    }, [inputRef, logger, regionText]);

    return (
        <TextInput name="Viticultural Area"
            className="autocomplete"
            inputRef={ inputRef }
            s={ 12 } m={ 7 } l={ 4 }
            value={ value }
            onChange={ onChangeRef.current }
        />
    );
};
VitiAreaInput.displayName = "VitiAreaInput";
