import { CancelOrConfirmBtns } from "components/Buttons";
import { Row } from "components/Grid";
import { TextInput } from "components/inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import { handleSubmit } from "lib/component_utils";
import React from "react";

interface IProps {
    recordName: string;
    name: string;
    onCancelClick: () => void;
    onSaveClick: (form: {name: string}) => Promise<void>;
}

export const EditRecord: React.FC<IProps> = ({recordName, name, onCancelClick, onSaveClick}) => {
    const [text, setText] = React.useState(name);
    const [isSaving, setIsSaving] = React.useState(false);

    return (
        <Modal onClose={ onCancelClick }>
            <ModalContent>
                <Row>
                    <h4>Edit { recordName }</h4>
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
EditRecord.displayName = "EditRecord";
