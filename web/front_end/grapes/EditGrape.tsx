import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { TextInput } from "../../components/inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { IGrapeForm } from "../../lib/api/Rest";

interface IProps {
    name: string;
    onCancelClick: () => void;
    onSaveClick: (form: IGrapeForm) => Promise<void>;
}

export const EditGrape: React.FC<IProps> = ({name, onCancelClick, onSaveClick}) => {
    const [text, setText] = React.useState(name);

    return (
        <Modal onClose={ onCancelClick }>
            <ModalContent>
                <Row>
                    <h4>Edit grape</h4>
                    <TextInput name="Name"
                        className=""
                        value={ text }
                        onChange={ setText }
                    />
                </Row>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ () => onSaveClick({name: text}) }
                    onCancelClick={ onCancelClick }
                />
            </ModalFooter>
        </Modal>
    );
}
EditGrape.displayName = EditGrape.name
