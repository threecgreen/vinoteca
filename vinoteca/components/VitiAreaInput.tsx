import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";
import { toDict } from "../lib/RestApi";
import { IRestModel } from "../lib/RestTypes";

interface IProps extends IOnChange {
    value: string;
    onSpecialCharClick: (c: string, position: number) => void;
}

export const VitiAreaInput: React.FC<IProps> = (props) => {
    const logger = new Logger(VitiAreaInput.toString());

    React.useEffect(() => {
        async function fetchVitiAreas() {
            try {
                const vitiAreas: IRestModel[] = await get("/rest/viti-areas");
                staticAutocomplete(nameToId("Viti Area"), toDict(vitiAreas), props.onChange);
            } catch (e) {
                logger.logError("Failed to get viti area autocomplete options");
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
