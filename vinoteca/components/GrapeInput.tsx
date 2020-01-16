import React from "react";
import { IDict } from "../lib/utils";
import { FloatingBtn } from "./Buttons";
import { InputField } from "./Grid";
import { MaterialIcon } from "./MaterialIcon";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";
import { autocomplete } from "../lib/widgets";

interface IProps {
    id: number;
    completions: IDict<string | null>;
    grape: string;
    percent: number | null;
    handleDelete: (e: React.MouseEvent, id: number) => void;
    onChange: (id: number, name: string, percent: number | null) => void;
}

export const GrapeInput: React.FC<IProps> = ({id, completions, grape, percent, handleDelete, onChange}) => {
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        autocomplete(inputRef, completions, (s) => onChange(id, s, percent))
    }, [inputRef, completions, onChange, id, percent]);

    return (
        <>
            <InputField s={ 1 }>
                <FloatingBtn onClick={ (e) => handleDelete(e, id) }
                    classes={ ["red-bg"] }
                >
                    <MaterialIcon iconName="remove" />
                </FloatingBtn>
            </InputField>
            <NumberInput name="Percent"
                s={ 3 }
                number={ percent }
                min={ 0 }
                max={ 100 }
                step="1"
                onChange={ (n) => onChange(id, name, n) }
            />
            <TextInput name="Grape"
                s={ 8 }
                className="autocomplete"
                value={ grape }
                onChange={ (v) => onChange(id, v, percent) }
                inputRef={ inputRef }
            />
        </>
    );
}
GrapeInput.displayName = "GrapeInput";
