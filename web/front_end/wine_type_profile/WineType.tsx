import { CancelOrConfirmBtns } from "components/Buttons";
import { Form } from "components/Form";
import { Col, Row } from "components/Grid";
import { WineTypeInput } from "components/model_inputs/WineTypeInput";
import { IWineType } from "generated/rest";
import { handleSubmit } from "lib/component_utils";
import React from "react";

interface IProps {
    isEditing: boolean;
    wineTypeText: string;
    wineType: IWineType;
    onWineTypeChange: (val: string) => void;
    onConfirmClick: () => Promise<void>;
    onCancelClick: () => void;
}

export const WineType: React.FC<IProps> = (props) => {
    const [isSaving, setIsSaving] = React.useState(false);

    const renderView = () => (
        <Col s={ 12 }>
            <h3>
                <span className="bold">{ props.wineType.name }</span>
            </h3>
        </Col>
    );

    const renderEdit = () => (
        <>
            <Col s={ 10 }>
                <h3 className="bold">Edit Wine Type</h3>
                <Form onSubmit={ props.onConfirmClick }>
                    <WineTypeInput value={ props.wineTypeText }
                        onChange={ props.onWineTypeChange }
                        required={ true }
                    />
                </Form>
            </Col>
            <CancelOrConfirmBtns
                onConfirmClick={ handleSubmit(props.onConfirmClick, setIsSaving) }
                onCancelClick={ props.onCancelClick }
                isSaving={ isSaving }
            />
        </>
    );

    return (
        <Row>
            { props.isEditing ? renderEdit() : renderView() }
        </Row>
    );
};
WineType.displayName = "WineType";
