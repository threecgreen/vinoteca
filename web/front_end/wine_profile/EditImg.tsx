import { CancelOrConfirmBtns } from "components/Buttons";
import { Range } from "materialize-css";
import { Col, Row } from "components/Grid";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import { handleSubmit } from "lib/component_utils";
import React from "react";
import { WineImg } from "./WineImg";
import { Rotation } from "generated/rest";
// enum Rotation {
//     Clockwise90 = "Clockwise90",
//     CounterClockwise90 = "CounterClockwise90",
//     Clockwise180 = "Clockwise180"
// }

interface IProps {
    imagePath: string;
    onSubmit: (rotation: Rotation) => Promise<void>;
    onCancel: () => void;
}

export const EditImg: React.FC<IProps> = ({imagePath, onSubmit, onCancel}) => {
    const [rotation, setRotation] = React.useState(0);
    const [isSaving, setIsSaving] = React.useState(false);

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <Row>
                    <h4>Edit wine image</h4>
                    <WineImg path={ imagePath }
                        rotation={ rotation }
                    />
                    <RotationInput rotation={ rotation }
                        setRotation={ setRotation }
                    />
                </Row>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ handleSubmit(async () => {
                        const parsedRotation = rawToRotation(rotation);
                        if(parsedRotation === null) {
                            onCancel();
                        } else {
                            await onSubmit(parsedRotation);
                        }

                    }, setIsSaving) }
                    onCancelClick={ onCancel }
                    isSaving={ isSaving }
                />
            </ModalFooter>
        </Modal>
    );
}
EditImg.displayName = "EditImg";

interface IRotationInputProps {
    rotation: number;
    setRotation: (rotation: number) => void;
}

const rawToRotation = (raw: number): Rotation | null => {
    switch (raw) {
        case -270:
        case 90:
            return Rotation.Clockwise90;
        case -180:
        case 180:
            return Rotation.Clockwise180;
        case -90:
        case 270:
            return Rotation.CounterClockwise90;
        default:
            return null;
    }
}

const RotationInput: React.FC<IRotationInputProps> = ({rotation, setRotation}) => {
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    React.useEffect(() => {
        if (inputRef) {
            const range = new Range(inputRef.current);
            return () => range.destroy();
        }
    }, [inputRef]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const newRotation = parseInt(e.target.value, 10);
        setRotation(newRotation);
    };

    return (
        <Col s={ 12 } classes={ ["range-field"] }>
            <label htmlFor="rotation" />
            <p className="range-field">
                <input type="range" name="rotation"
                    ref={ inputRef }
                    min={ -270 } max={ 270 } step={ 90 }
                    value={ rotation }
                    onChange={ onChange }
                />
            </p>
        </Col>
    );
}
RotationInput.displayName = "RotationInput";
