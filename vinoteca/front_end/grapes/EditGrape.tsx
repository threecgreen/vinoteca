import React from "react";
import { ModalContent, Modal, ModalFooter } from "../../components/Modal";
import { TextInput } from "../../components/TextInput";
import { Row } from "../../components/Grid";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { IGrapeForm } from "../../lib/Rest";

interface IProps {
    name: string;
    onCancelClick: () => void;
    onSaveClick: (form: IGrapeForm) => void;
}

export const EditGrape: React.FC<IProps> = ({name, onCancelClick, onSaveClick}) => {
    const [text, setText] = React.useState(name);

    return (
        <Modal display>
            <ModalContent>
                <Row>
                    <h4>Edit grape</h4>
                    <TextInput name="Grape name"
                        className=""
                        value={ text }
                        onChange={ setText }
                    />
                </Row>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onConfirmClick }
                    onCancelClick={ onCancelClick }
                />
            </ModalFooter>
        </Modal>
    );
}
EditGrape.displayName = EditGrape.name
