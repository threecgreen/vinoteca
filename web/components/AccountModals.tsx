import React from "react";
import { createUser, login } from "../lib/api/auth";
import { IUser } from "../lib/api/Rest";
import { CancelOrConfirmBtns } from "./Buttons";
import { EmailInput, PasswordInput, TextInput } from "./inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "./Modal";
import { Form } from "./Form";
import { useLogger } from "../lib/Logger";

interface IUserProps {
    onFinish: (user: IUser) => void,
    onCancel: () => void,
}

export const LoginForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const logger = useLogger("LoginForm");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

    const onSubmit = async () => {
        const userResult = await login({email, password});
        userResult.map(onFinish)
            .mapErr((ve) => {
                switch (ve.type) {
                    case "BadRequest":
                    case "Forbidden":
                    case "MissingConstraint":
                        setErrorMsg(ve.message);
                        break;
                    default:
                        logger.logError(`Failed to login with ${ve.type} error: ${ve.message}`);
                }
            })
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
                { errorMsg && <p>{ errorMsg }</p>}
                <Form>
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
                </Form>
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
    const logger = useLogger("NewUserForm");

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
    // TODO: image

    const onSubmit = async () => {
        const user = await createUser({email, name, password});
        user.map(onFinish)
            .mapErr((ve) => {
                switch (ve.type) {
                    case "BadRequest":
                    case "MissingConstraint":
                        setErrorMsg(ve.message);
                        break;
                    default:
                        logger.logError(`Failed to create new user with ${ve.type} error: ${ve.message}`);
                }
            });
    }

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                { errorMsg && <p>{ errorMsg }</p>}
                <Form>
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
                </Form>
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
