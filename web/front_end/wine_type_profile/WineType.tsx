import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { WineTypeInput } from "../../components/WineTypeInput";
import { IRestModel } from "../../lib/RestTypes";

interface IProps {
    isEditing: boolean;
    wineTypeText: string;
    wineType: IRestModel;
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
                <form autoComplete="off">
                    <WineTypeInput value={ props.wineTypeText }
                        onChange={ props.onWineTypeChange }
                    />
                </form>
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

