import React from "react";
import { FloatingBtn } from "../Buttons";
import { Col } from "../Grid";
import { Autocomplete } from "../inputs/Autocomplete";
import { NumberInput } from "../inputs/NumberInput";
import { MaterialIcon } from "../MaterialIcon";

interface IProps {
    id: number;
    completions: Record<string, string | null>;
    grape: string;
    percent: number | null;
    handleDelete: (id: number) => void;
    onChange: (id: number, name: string, percent: number | null) => void;
}

export const GrapeInput: React.FC<IProps> = ({id, completions, grape, percent,
                                              handleDelete, onChange}) => {
    return (
        <Col s={12} l={6}>
            {/* Sized by content rather than the viewport grid so the row fits in modals */}
            <div className="flex items-center">
                <FloatingBtn onClick={() => handleDelete(id)}
                    classes={["red-bg", "flex-none"]}
                >
                    <MaterialIcon iconName="remove" />
                </FloatingBtn>
                <div className="w-24 flex-none">
                    <NumberInput name="Percent"
                        id={ `percent-${id}` }
                        number={percent}
                        s={12}
                        min={0}
                        max={100}
                        step="1"
                        onChange={(n) => onChange(id, grape, n)}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <Autocomplete name="Grape"
                        id={ `grape-${id}` }
                        s={ 12 }
                        value={ grape }
                        onChange={ (updatedGrape) => onChange(id, updatedGrape, percent) }
                        completions={ completions }
                    />
                </div>
            </div>
        </Col>
    );
};
GrapeInput.displayName = "GrapeInput";
