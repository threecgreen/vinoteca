import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { Col, Row } from "../../components/Grid";
import { WineTypeInput } from "../../components/model_inputs/WineTypeInput";
import { IWineType } from "../../lib/api/Rest";

interface IProps {
    isEditing: boolean;
    wineTypeText: string;
    wineType: IWineType;
    onWineTypeChange: (val: string) => void;
    onConfirmClick: () => Promise<void>;
    onCancelClick: () => void;
}

export const WineType: React.FC<IProps> = (props) => {
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
                <Form>
                    <WineTypeInput value={ props.wineTypeText }
                        onChange={ props.onWineTypeChange }
                    />
                </Form>
            </Col>
            <CancelOrConfirmBtns
                onConfirmClick={ props.onConfirmClick }
                onCancelClick={ props.onCancelClick }
            />
        </>
    );

    return (
        <Row>
            { props.isEditing ? renderEdit() : renderView() }
        </Row>
    );
}
WineType.displayName = "WineType";

