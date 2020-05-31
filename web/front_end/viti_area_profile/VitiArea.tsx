import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { Col, Row } from "../../components/Grid";
import { VitiAreaInput } from "../../components/model_inputs/VitiAreaInput";
import { IVitiArea } from "../../lib/api/Rest";
import { handleSubmit } from "../../lib/utils";

interface IProps {
    isEditing: boolean;
    vitiAreaText: string;
    vitiArea: IVitiArea;
    onVitiAreaChange: (val: string) => void;
    onConfirmClick: () => Promise<void>;
    onCancelClick: () => void;
}

// TODO: stats component?
export const VitiArea: React.FC<IProps> = (props) => {
    const [isSaving, setIsSaving] = React.useState(false);

    if (props.isEditing) {
        return (
            <Row>
                <Col s={ 10 }>
                    <h3 className="bold">Edit Viticultural Area</h3>
                    <Form onSubmit={ props.onConfirmClick }>
                        <VitiAreaInput value={ props.vitiAreaText }
                            onChange={ props.onVitiAreaChange }
                        />
                    </Form>
                </Col>
                <CancelOrConfirmBtns
                    onConfirmClick={ handleSubmit(props.onConfirmClick, setIsSaving) }
                    onCancelClick={ props.onCancelClick }
                    isSaving={ isSaving }
                />
            </Row>
        );
    }
    return (
        <Row>
            <Col s={ 12 }>
                <h3>
                    <span className="bold">{ props.vitiArea.name }</span>
                </h3>
                {/* TODO: Stats here */}
            </Col>
        </Row>
    );
}
VitiArea.displayName = "VitiArea";
