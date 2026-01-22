import { IColor } from "generated/rest";
import { getColors } from "lib/api/colors";
import { useLogger } from "lib/Logger";
import { capitalizeFirstLetter } from "lib/utils";
import React from "react";
import { SelectInput } from "../inputs/SelectInput";
import { IOnChange } from "../IProps";

interface IProps extends IOnChange {
    s: number;
    m: number;
    l: number;
    selection: string;
    extraChoice?: string;
}

export const ColorInput: React.FC<IProps> = (props) => {
    const logger = useLogger("ColorInput");
    const [colors, setColors] = React.useState<string[]>([]);

    React.useEffect(() => {
        void (async () => {
            try {
                const rawColors: IColor[] = await getColors({});
                setColors(rawColors.map((color) => color.name));
            } catch (e) {
                logger.logException("Failed to get colors", e);
            }
        })();
    }, [logger]);

    const options = [
        { value: "", label: "Select a color", disabled: true },
        ...colors.map((color) => ({
            value: color,
            label: capitalizeFirstLetter(color),
        })),
    ];

    return (
        <SelectInput name="Color"
            s={props.s}
            m={props.m}
            l={props.l}
            selection={props.selection}
            onChange={(v) => props?.onChange(v)}
            options={options}
        />
    );
};
ColorInput.displayName = "ColorInput";
