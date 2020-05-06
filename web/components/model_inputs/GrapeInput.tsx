import React from "react";
import { IDict } from "../../lib/utils";
import { autocomplete } from "../../lib/widgets";
import { FloatingBtn } from "../Buttons";
import { Col, InputField } from "../Grid";
import { NumberInput } from "../inputs/NumberInput";
import { TextInput } from "../inputs/TextInput";
import { MaterialIcon } from "../MaterialIcon";

interface IProps {
    id: number;
    completions: IDict<string | null>;
    grape: string;
    percent: number | null;
    handleDelete: (id: number) => void;
    onChange: (id: number, name: string, percent: number | null) => void;
}

export const GrapeInput: React.FC<IProps> = ({id, completions, grape, percent, handleDelete, onChange}) => {
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        autocomplete(inputRef, completions, (s) => onChange(id, s, percent))
    }, [inputRef, completions, onChange, id, percent]);

    return (
        <Col classes={ ["grape-block"] } s={ 12 } l={ 6 }>
            <InputField s={ 1 }
                classes={ ["col"] }
            >
                <FloatingBtn onClick={ () => handleDelete(id) }
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
                onChange={ (n) => onChange(id, grape, n) }
            />
            <TextInput name="Grape"
                s={ 8 }
                className="autocomplete"
                value={ grape }
                onChange={ (grape) => onChange(id, grape, percent) }
                inputRef={ inputRef }
            />
        </Col>
    );
}
GrapeInput.displayName = "GrapeInput";
