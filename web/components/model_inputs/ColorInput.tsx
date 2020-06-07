import React from "react";
import { getColors } from "../../lib/api/colors";
import { IColor } from "../../lib/api/Rest";
import { useLogger } from "../../lib/Logger";
import { capitalizeFirstLetter } from "../../lib/utils";
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
        (async () => {
            try {
                const colors: IColor[] = await getColors({});
                setColors(colors.map((color) => color.name));
            } catch (e) {
                logger.logError(`Failed to get colors: ${e.message}`);
            }
        })()
    }, []);

    return (
        <SelectInput name="Color"
            { ...props }
            onChange={ (v) => props?.onChange(v) }
        >
            <option key="default" value="" disabled>Select a color</option>
            { colors.map((color) => (
                <option key={ color } value={ color }>{ capitalizeFirstLetter(color) }</option>
            )) }
        </SelectInput>
    );
}
ColorInput.displayName = "ColorInput";
