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

export const VitiAreaInput: React.FC<IProps> = (props) => {
    const logger = new Logger(VitiAreaInput.toString());

    React.useEffect(() => {
        async function fetchVitiAreas() {
            try {
                const vitiAreas: IDict<string> = await get("/rest/viti-areas/all/");
                staticAutocomplete(nameToId("Viti Area"), vitiAreas, props.onChange);
            } catch (e) {
                logger.logError(`Failed to get producer autocomplete options. ${e}`);
            }
        }

        fetchVitiAreas();
    }, []);

    return (
        <StatelessTextInput name="Viti Area"
            className="autocomplete"
            s={ 8 } l={ 4 }
            { ...props }
        />
    );
}
VitiAreaInput.displayName = "VitiAreaInput";
