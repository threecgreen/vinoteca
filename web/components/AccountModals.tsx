import React from "react";
import { createUser, login } from "../lib/api/auth";
import { IUser } from "../lib/api/Rest";
import { CancelOrConfirmBtns } from "./Buttons";
import { EmailInput, PasswordInput, TextInput, SimpleTextInput } from "./inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "./Modal";
import { Form } from "./Form";
import { useLogger } from "../lib/Logger";
import { UserInputs, userInputReducer, initUserInputData } from "./UserInputs";

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
                setPassword("");
                switch (ve.type) {
                    case "NotFound":
                        setEmail("")
                        // fallthrough
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
                { errorMsg && <p className="error-msg">{ errorMsg }</p>}
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
                    confirmDisabled={ !password || !email }
                />
            </ModalFooter>
        </Modal>
    );
}
LoginForm.displayName = "LoginForm";

export const NewUserForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const logger = useLogger("NewUserForm");

    const [data, dispatch] = React.useReducer(userInputReducer, [], initUserInputData);
    const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
    // TODO: image

    const onSubmit = async () => {
        const user = await createUser(data);
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
                { errorMsg && <p className="error-msg">{ errorMsg }</p>}
                <Form>
                    <UserInputs data={ data }
                        dispatch={ dispatch }
                    />
                </Form>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                    confirmDisabled={ !data.email || !data.name || !data.password }
                />
            </ModalFooter>
        </Modal>
    );
}
NewUserForm.displayName = "NewUserForm";
