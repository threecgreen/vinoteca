import React from "react";
import { FloatingBtn } from "../Buttons";
import { Col, InputField, Row } from "../Grid";
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
            <Row>
                <Col s={2} l={1} classes={["flex", "items-center"]}>
                    <FloatingBtn onClick={() => handleDelete(id)}
                        classes={["red-bg"]}
                    >
                        <MaterialIcon iconName="remove" />
                    </FloatingBtn>
                </Col>
                <NumberInput name="Percent"
                    number={percent}
                    s={4}
                    l={4}
                    min={0}
                    max={100}
                    step="1"
                    onChange={(n) => onChange(id, grape, n)}
                />
                <InputField s={6} l={7}>
                    <label className="block text-sm text-gray-500">
                        Grape
                    </label>
                    <Autocomplete
                        name="grape"
                        value={grape}
                        onChange={(updatedGrape) => onChange(id, updatedGrape, percent)}
                        completions={completions}
                    />
                </InputField>
            </Row>
        </Col>
    );
};
GrapeInput.displayName = "GrapeInput";
