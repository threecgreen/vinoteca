import { FormSelect } from "materialize-css";
import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict } from "../lib/utils";
import { IOnChange } from "./IProps";
import { StatelessSelectInput } from "./StatelessSelectInput";

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
                const colors: IDict<string> = await get("/rest/colors/all/");
                setSelectionOptions(concatIfNotNull(Object.keys(colors)));
                const formSelect = new FormSelect(selectRef.current!);
            } catch (e) {
                logger.logError(`Failed to get colors with error '${e}'`);
            }
        }

        fetchColors();
    }, []);

    return (
        <StatelessSelectInput name="Color"
            s={ 4 } l={ 2 }
            selectRef={ selectRef }
            options={ selectionOptions }
            onChange={ (v) => props?.onChange(v) }
            { ...props }
        />
    );
}
ColorInput.displayName = "ColorInput";
