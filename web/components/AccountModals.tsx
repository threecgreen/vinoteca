import React from "react";
import { IUser } from "../lib/Rest";
import { createUser, login } from "../lib/RestApi";
import { CancelOrConfirmBtns } from "./Buttons";
import { EmailInput, PasswordInput, TextInput } from "./inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "./Modal";

interface IUserProps {
    onFinish: (user: IUser) => void,
    onCancel: () => void,
}

export const LoginForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = async () => {
        const user = await login({email, password});
        onFinish(user);
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSubmit();
        }
    }

    return (
        <Modal onClose={ onCancel }>
            <ModalContent onKeyDown={ onKeyDown }>
                <EmailInput name="E-mail"
                    className=""
                    value={ email }
                    onChange={ setEmail }
                />
                <PasswordInput name="Password"
                    className=""
                    value={ password }
                    onChange={ setPassword }
                />
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </ModalFooter>
        </Modal>
    );
}
LoginForm.displayName = "LoginForm";

export const NewUserForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    // TODO: image

    const onSubmit = async () => {
        const user = await createUser({email, name, password});
        onFinish(user);
    }

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <EmailInput name="E-mail"
                    className=""
                    value={ email }
                    onChange={ setEmail }
                />
                <TextInput name="Name"
                    className=""
                    value={ name }
                    onChange={ setName }
                />
                <PasswordInput name="Password"
                    className=""
                    value={ password }
                    onChange={ setPassword }
                />
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </ModalFooter>
        </Modal>
    );
}
NewUserForm.displayName = "NewUserForm";
