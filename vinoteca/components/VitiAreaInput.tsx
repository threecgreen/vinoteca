import * as React from "react";
import Logger from "../lib/Logger";
import { getVitiAreas, toDict } from "../lib/RestApi";
import { IRestModel } from "../lib/RestTypes";
import { autocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IProps extends IOnChange {
    value: string;
}

export const VitiAreaInput: React.FC<IProps> = ({value, onChange}) => {
    const logger = new Logger(VitiAreaInput.toString());
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        async function fetchVitiAreas() {
            try {
                const vitiAreas: IRestModel[] = await getVitiAreas({});
                autocomplete(inputRef, toDict(vitiAreas), onChange);
            } catch (e) {
                logger.logError("Failed to get viti area autocomplete options");
            }
        }

        fetchVitiAreas();
    }, [inputRef]);

    return (
        <StatelessTextInput name="Viti Area"
            className="autocomplete"
            inputRef={ inputRef }
            s={ 8 } l={ 4 }
            value={ value }
            onChange={ onChange }
        />
    );
}
VitiAreaInput.displayName = "VitiAreaInput";
