import { CancelOrConfirmBtns } from "components/Buttons";
import { Col, Row } from "components/Grid";
import { MaterialIcon } from "components/MaterialIcon";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import { Rotation } from "generated/enums";
import { handleSubmit } from "lib/component_utils";
import React from "react";
import { WineImg } from "./WineImg";

interface IProps {
    imagePath: string;
    imageCounter: number;
    onSubmit: (rotation: Rotation) => Promise<void>;
    onCancel: () => void;
}

export const EditImg: React.FC<IProps> = ({imagePath, imageCounter, onSubmit, onCancel}) => {
    const [rotation, setRotation] = React.useState(0);
    const [isSaving, setIsSaving] = React.useState(false);

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <Row>
                    <h4>Rotate wine image</h4>
                    <div className="center-content">
                        <WineImg path={ imagePath }
                            imageCounter={ imageCounter }
                            id=""
                            rotation={ rotation }
                        />
                    </div>
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
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newRotation = parseInt(e.target.value, 10);
        setRotation(newRotation);
    };

    return (
        <Col s={12} classes={["range-field"]}>
            <label htmlFor="rotation" className="block">
                <div className="flex items-center justify-between mb-2">
                    <MaterialIcon iconName="rotate_left" />
                    <span>Rotation</span>
                    <MaterialIcon iconName="rotate_right" />
                </div>
                <input
                    type="range"
                    name="rotation"
                    min={-270}
                    max={270}
                    step={90}
                    value={rotation}
                    onChange={onChange}
                    className="w-full"
                />
            </label>
        </Col>
    );
}
RotationInput.displayName = "RotationInput";
