import { CancelOrConfirmBtns } from "components/Buttons";
import { Row } from "components/Grid";
import { TextInput } from "components/inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import { IGrapeForm } from "generated/rest";
import { handleSubmit } from "lib/utils";
import React from "react";

interface IProps {
    name: string;
    onCancelClick: () => void;
    onSaveClick: (form: IGrapeForm) => Promise<void>;
}

export const EditGrape: React.FC<IProps> = ({name, onCancelClick, onSaveClick}) => {
    const [text, setText] = React.useState(name);
    const [isSaving, setIsSaving] = React.useState(false);

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
                    onConfirmClick={ handleSubmit(() => onSaveClick({name: text}), setIsSaving) }
                    onCancelClick={ onCancelClick }
                    isSaving={ isSaving }
                />
            </ModalFooter>
        </Modal>
    );
};
EditGrape.displayName = EditGrape.name;
