import React from "react";
import { IUser, IChangeUserForm } from "../../lib/api/Rest";
import { userInputReducer, initUserInputData, UserInputs } from "../../components/UserInputs";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { Form } from "../../components/Form";
import { CancelOrConfirmBtns } from "../../components/Buttons";

interface IProps {
    user: IUser;
    onSubmit: (form: IChangeUserForm) => Promise<void>;
    onCancel: () => void;
}

export const EditUser: React.FC<IProps> = ({user, onSubmit, onCancel}) => {
    const [mutableUser, dispatch] = React.useReducer(userInputReducer,
                                                     {password: "", email: user.email, name: user.name});

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <Form onSubmit={ () => mutableUser.email && mutableUser.name && onSubmit(mutableUser) }>
                    <UserInputs data={ mutableUser }
                        dispatch={ dispatch }
                        includePassword={ false }
                    />
                </Form>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns onConfirmClick={ () => onSubmit(mutableUser) }
                    onCancelClick={ onCancel }
                    confirmDisabled={ !mutableUser.email || !mutableUser.name }
                />
            </ModalFooter>
        </Modal>
    );
}
EditUser.displayName = "EditUser";
