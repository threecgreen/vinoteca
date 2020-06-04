import React from "react";
import { createUser, login } from "../lib/api/auth";
import { IUser } from "../lib/api/Rest";
import { useLogger } from "../lib/Logger";
import { CancelOrConfirmBtns } from "./Buttons";
import { Form } from "./Form";
import { EmailInput, PasswordInput } from "./inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "./Modal";
import { initUserInputData, userInputReducer, UserInputs } from "./UserInputs";

interface IUserProps {
    onFinish: (user: IUser) => void,
    onCancel: () => void,
}

export const LoginForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const logger = useLogger("LoginForm");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
    const [isSaving, setIsSaving] = React.useState(false);

    const onSubmit = async () => {
        setIsSaving(true);
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
        setIsSaving(false);
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSubmit();
        }
    }

    return (
        <Modal onClose={ onCancel }>
            <Form onSubmit={ () => password && email && onSubmit() }>
                <ModalContent onKeyDown={ onKeyDown }>
                    { errorMsg && <p className="error-msg">{ errorMsg }</p>}
                    <EmailInput name="E-mail"
                        className=""
                        value={ email }
                        onChange={ setEmail }
                    />
                    <PasswordInput name="Password"
                        autocomplete="current-password"
                        className=""
                        value={ password }
                        onChange={ setPassword }
                    />
                </ModalContent>
                <ModalFooter>
                    <CancelOrConfirmBtns
                        onConfirmClick={ onSubmit }
                        onCancelClick={ onCancel }
                        isSaving={ isSaving }
                        confirmDisabled={ !password || !email }
                    />
                </ModalFooter>
            </Form>
        </Modal>
    );
}
LoginForm.displayName = "LoginForm";

export const NewUserForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const logger = useLogger("NewUserForm");

    const [data, dispatch] = React.useReducer(userInputReducer, [], initUserInputData);
    const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
    const [isSaving, setIsSaving] = React.useState(false);
    // TODO: image

    const onSubmit = async () => {
        setIsSaving(true);
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
        setIsSaving(false);
    }

    return (
        <Modal onClose={ onCancel }>
            <Form onSubmit={ () => data.email && data.name && data.password && onSubmit() }>
                <ModalContent>
                    { errorMsg && <p className="error-msg">{ errorMsg }</p>}
                        <UserInputs data={ data }
                            dispatch={ dispatch }
                        />
                </ModalContent>
                <ModalFooter>
                    <CancelOrConfirmBtns
                        onConfirmClick={ onSubmit }
                        onCancelClick={ onCancel }
                        isSaving={ isSaving }
                        confirmDisabled={ !data.email || !data.name || !data.password }
                    />
                </ModalFooter>
            </Form>
        </Modal>
    );
}
NewUserForm.displayName = "NewUserForm";
