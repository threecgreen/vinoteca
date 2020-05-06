import { FormSelect } from "materialize-css";
import React from "react";
import { getColors } from "../../lib/api/colors";
import { IColor } from "../../lib/api/Rest";
import Logger, { useLogger } from "../../lib/Logger";
import { SelectInput } from "../inputs/SelectInput";
import { IOnChange } from "../IProps";
import { useViewport } from "../ViewportContext";

interface IProps extends IOnChange {
    s: number;
    m: number;
    l: number;
    selection: string;
    extraChoice?: string;
}

export const useColorsSelect = (logger: Logger): [string[], React.MutableRefObject<HTMLSelectElement>] => {
    const [selectionOptions, setSelectionOptions] = React.useState<string[]>([]);
    const selectRef = React.useRef() as React.MutableRefObject<HTMLSelectElement>;
    const [formSelect, setFormSelect] = React.useState<FormSelect | null>(null);
    const {width} = useViewport();

    React.useEffect(() => {
        async function fetchColors() {
            try {
                const colors: IColor[] = await getColors({});
                setSelectionOptions(colors.map((color) => color.name));
            } catch (e) {
                logger.logError(`Failed to get colors: ${e.message}`);
            }
        }

        fetchColors();
    }, []);

    React.useEffect(() => {
        if (!formSelect) {
            if (width > 600) {
                const formSelect = new FormSelect(selectRef.current!);
                setFormSelect(formSelect);
            }
        } else if (width <= 600) {
            formSelect.destroy();
            setFormSelect(null);
        }
        return () => formSelect?.destroy();
    }, [width]);

    return [selectionOptions, selectRef]
}

export const ColorInput: React.FC<IProps> = (props) => {
    const logger = useLogger("ColorInput");

    const [selectionOptions, selectRef] = useColorsSelect(logger);

    return (
        <SelectInput name="Color"
            selectRef={ selectRef }
            selectText={ props.extraChoice }
            options={ selectionOptions }
            onChange={ (v) => props?.onChange(v) }
            { ...props }
        />
    );
}
ColorInput.displayName = "ColorInput";
