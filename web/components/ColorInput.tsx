import { FormSelect } from "materialize-css";
import React from "react";
import Logger from "../lib/Logger";
import { IColor } from "../lib/Rest";
import { getColors } from "../lib/RestApi";
import { IOnChange } from "./IProps";
import { SelectInput } from "./SelectInput";

interface IProps extends IOnChange {
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
    const logger = new Logger("ColorInput");

    const [selectionOptions, selectRef] = useColorsSelect(logger, props.extraChoice);

    return (
        <SelectInput name="Color"
            s={ 4 } l={ 2 }
            selectRef={ selectRef }
            options={ selectionOptions }
            onChange={ (v) => props?.onChange(v) }
            { ...props }
        />
    );
}
ColorInput.displayName = "ColorInput";
