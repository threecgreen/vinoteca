import { changePassword, createUser, login } from "lib/api/auth";
import { IChangePasswordForm, IUser } from "lib/api/Rest";
import { useLogger } from "lib/Logger";
import React from "react";
import { CancelOrConfirmBtns } from "./Buttons";
import { Form } from "./Form";
import { EmailInput, PasswordInput } from "./inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "./Modal";
import { initUserInputData, userInputReducer, UserInputs } from "./UserInputs";

interface IUserProps {
    onFinish: (user: IUser) => void;
    onCancel: () => void;
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
                        setEmail("");
                        // fallthrough
                    case "BadRequest":
                    case "Forbidden":
                    case "MissingConstraint":
                        setErrorMsg(ve.message);
                        break;
                    default:
                        logger.logError(`Failed to login with ${ve.type} error: ${ve.message}`);
                }
                setIsSaving(false);
            });
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSubmit();
        }
    };

    return (
        <Modal onClose={ onCancel }>
            <Form onSubmit={ () => password && email && onSubmit() }>
                <ModalContent onKeyDown={ onKeyDown }>
                    { errorMsg && <p className="error-msg">{ errorMsg }</p>}
                    <EmailInput name="Email"
                        value={ email }
                        onChange={ setEmail }
                    />
                    <PasswordInput name="Password"
                        autocomplete="current-password"
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
};
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
                setIsSaving(false);
            });
    };

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
};
NewUserForm.displayName = "NewUserForm";

type State = IChangePasswordForm & {newPassword2: string};

type Action =
    | {type: "setOldPassword", oldPassword: string}
    | {type: "setNewPassword", newPassword: string}
    | {type: "setNewPassword2", newPassword2: string}
    | {type: "reset"};

const initState = () => ({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
});

export const changePasswordReducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case "setOldPassword":
            return {...state, oldPassword: action.oldPassword};
        case "setNewPassword":
            return {...state, newPassword: action.newPassword};
        case "setNewPassword2":
            return {...state, newPassword2: action.newPassword2};
        case "reset":
            return initState();
        default:
            return state;
    }
};

export interface IChangePasswordProps {
    onFinish: () => void;
}

export const ChangePasswordForm: React.FC<IChangePasswordProps> = ({onFinish}) => {
    const logger = useLogger("ChangePasswordForm");

    const [state, dispatch] = React.useReducer(changePasswordReducer, [], initState);
    const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
    const [isSaving, setIsSaving] = React.useState(false);

    const onSubmit = async () => {
        setIsSaving(true);
        const res = await changePassword(state);
        res
            .map(onFinish)
            .mapErr((ve) => {
                switch (ve.type) {
                    case "BadRequest":
                    case "MissingConstraint":
                        setErrorMsg(ve.message);
                        break;
                    default:
                        logger.logError(`Failed to create new user with ${ve.type} error: ${ve.message}`);
                }
                setIsSaving(false);
            });
    };

    const checkAndSubmit = () => {
        if (state.oldPassword && state.newPassword && state.newPassword2) {
            if (state.newPassword === state.newPassword2) {
                onSubmit();
            } else {
                setErrorMsg("New passwords must match");
            }
        }
    };

    return (
        <Modal onClose={ onFinish }>
            <Form onSubmit={ checkAndSubmit }>
                <ModalContent>
                    { errorMsg && <p className="error-msg">{ errorMsg }</p>}
                    <PasswordInput name="Current password"
                        autocomplete="current-password"
                        value={ state.oldPassword }
                        onChange={ (oldPassword) =>
                            dispatch({type: "setOldPassword", oldPassword}) }
                    />
                    <PasswordInput name="New password"
                        autocomplete="new-password"
                        value={ state.newPassword }
                        onChange={ (newPassword) =>
                            dispatch({type: "setNewPassword", newPassword}) }
                    />
                    <PasswordInput name="Re-enter new password"
                        autocomplete="new-password"
                        value={ state.newPassword2 }
                        onChange={ (newPassword2) =>
                            dispatch({type: "setNewPassword2", newPassword2}) }
                    />
                </ModalContent>
                <ModalFooter>
                    <CancelOrConfirmBtns
                        onConfirmClick={ checkAndSubmit }
                        onCancelClick={ onFinish }
                        isSaving={ isSaving }
                        confirmDisabled={ !state.oldPassword || !state.newPassword
                            || !state.newPassword2 || state.newPassword !== state.newPassword2 }
                    />
                </ModalFooter>
            </Form>
        </Modal>
    );
};
ChangePasswordForm.displayName = "ChangePasswordForm";
