import { FormSelect } from "materialize-css";
import * as React from "react";
import Logger from "../lib/Logger";
import { IColor } from "../lib/Rest";
import { getColors } from "../lib/RestApi";
import { IOnChange } from "./IProps";
import { SelectInput } from "./SelectInput";

interface IProps extends IOnChange {
    selection: string;
    extraChoice?: string;
}

export const ColorInput: React.FC<IProps> = (props) => {
    const [selectionOptions, setSelectionOptions] = React.useState<string[]>([]);
    const selectRef = React.useRef() as React.RefObject<HTMLSelectElement>;

    const logger = new Logger(ColorInput.name);

    const concatIfNotNull= (options: string[]): string[] => {
        if (props.extraChoice) {
            return [props.extraChoice].concat(options);
        }
        return options;
    }

    React.useEffect(() => {
        async function fetchColors() {
            try {
                const colors: IColor[] = await getColors({});
                setSelectionOptions(concatIfNotNull(colors.map((color) => color.name)));
                const formSelect = new FormSelect(selectRef.current!);
            } catch {
                logger.logError("Failed to get colors");
            }
        }

        fetchColors();
    }, []);

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
