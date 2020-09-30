import { CancelOrConfirmBtns } from "components/Buttons";
import { Form } from "components/Form";
import { PasswordInput } from "components/inputs/TextInput";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import { IChangePasswordForm } from "generated/rest";
import { changePassword } from "lib/api/auth";
import { useLogger } from "lib/Logger";
import React from "react";

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
                        logger.logError(
                            `Failed to create new user with ${ve.type} error: ${ve.message}`);
                }
                setIsSaving(false);
                return ve;
            });
    };

    const checkAndSubmit = () => {
        if (state.oldPassword && state.newPassword && state.newPassword2) {
            if (state.newPassword === state.newPassword2) {
                void onSubmit();
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
