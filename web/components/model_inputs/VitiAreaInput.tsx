import { IVitiArea } from "generated/rest";
import { toDict } from "lib/api/common";
import { getVitiAreas } from "lib/api/viti_areas";
import { useLogger } from "lib/Logger";
import React from "react";
import { InputField } from "../Grid";
import { Autocomplete } from "../inputs/Autocomplete";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    value: string;
    regionText?: string;
}

export const VitiAreaInput: React.FC<IProps> = ({value, regionText, ...props}) => {
    const logger = useLogger("VitiAreaInput");
    const [completions, setCompletions] = React.useState<Record<string, string | null>>({});

    React.useEffect(() => {
        async function fetchVitiAreas() {
            try {
                const vitiAreas: IVitiArea[] = await getVitiAreas({regionName: regionText});
                setCompletions(toDict(vitiAreas));
            } catch (e) {
                logger.logException("Failed to get viti area autocomplete options", e);
            }
        }

        void fetchVitiAreas();
    }, [logger, regionText]);

    return (
        <InputField s={12} m={6} l={4}>
            <label>Viticultural Area</label>
            <Autocomplete
                name="vitiArea"
                value={value}
                onChange={props.onChange}
                completions={completions}
            />
        </InputField>
    );
};
VitiAreaInput.displayName = "VitiAreaInput";
