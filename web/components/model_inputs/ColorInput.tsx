import { FormSelect } from "materialize-css";
import React from "react";
import Logger, { useLogger } from "../../lib/Logger";
import { IColor } from "../../lib/api/Rest";
import { getColors } from "../../lib/api/colors";
import { SelectInput } from "../inputs/SelectInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    s: number;
    m: number;
    l: number;
    selection: string;
    extraChoice?: string;
}

export const useColorsSelect = (logger: Logger, extraChoice?: string): [string[], React.MutableRefObject<HTMLSelectElement>] => {
    const [selectionOptions, setSelectionOptions] = React.useState<string[]>([]);
    const selectRef = React.useRef() as React.MutableRefObject<HTMLSelectElement>;

    const concatIfNotNull= (options: string[]): string[] => {
        if (extraChoice) {
            return [extraChoice].concat(options);
        }
        return options;
    }

    React.useEffect(() => {
        async function fetchColors() {
            try {
                const colors: IColor[] = await getColors({});
                setSelectionOptions(concatIfNotNull(colors.map((color) => color.name)));
                new FormSelect(selectRef.current!);
            } catch (e) {
                logger.logError(`Failed to get colors: ${e.message}`);
            }
        }

        fetchColors();
    }, []);
    return [selectionOptions, selectRef]
}

export const ColorInput: React.FC<IProps> = (props) => {
    const logger = useLogger("ColorInput");

    const [selectionOptions, selectRef] = useColorsSelect(logger, props.extraChoice);

    return (
        <SelectInput name="Color"
            selectRef={ selectRef }
            options={ selectionOptions }
            onChange={ (v) => props?.onChange(v) }
            { ...props }
        />
    );
}
ColorInput.displayName = "ColorInput";
