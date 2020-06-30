import { CancelOrConfirmBtns } from "components/Buttons";
import { Form } from "components/Form";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import { userInputReducer, UserInputs } from "components/UserInputs";
import { IChangeUserForm, IUser } from "generated/rest";
import { handleSubmit } from "lib/utils";
import React from "react";

interface IProps {
    user: IUser;
    onSubmit: (form: IChangeUserForm) => Promise<void>;
    onCancel: () => void;
}

export const EditUser: React.FC<IProps> = ({user, onSubmit, onCancel}) => {
    const [mutableUser, dispatch] = React.useReducer(userInputReducer,
        {password: "", email: user.email, name: user.name});

    const [isSaving, setIsSaving] = React.useState(false);

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <Form onSubmit={ () => mutableUser.email && mutableUser.name
                    && onSubmit(mutableUser) }
                >
                    <UserInputs data={ mutableUser }
                        dispatch={ dispatch }
                        includePassword={ false }
                    />
                </Form>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ handleSubmit(() => onSubmit(mutableUser), setIsSaving) }
                    onCancelClick={ onCancel }
                    isSaving={ isSaving }
                    confirmDisabled={ !mutableUser.email || !mutableUser.name }
                />
            </ModalFooter>
        </Modal>
    );
};
EditUser.displayName = "EditUser";
