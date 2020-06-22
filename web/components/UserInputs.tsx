import React from "react";
import { IUserForm } from "../lib/api/Rest";
import { EmailInput, PasswordInput, SimpleTextInput } from "./inputs/TextInput";

type Action =
    | {type: "setEmail", email: string}
    | {type: "setName", name: string}
    | {type: "setPassword", password: string};

export const initUserInputData = (): IUserForm => ({
    email: "",
    name: "",
    password: "",
});

export const userInputReducer: React.Reducer<IUserForm, Action> = (state, action) => {
    switch (action.type) {
        case "setEmail":
            return {...state, email: action.email};
        case "setName":
            return {...state, name: action.name};
        case "setPassword":
            return {...state, password: action.password};
        default:
            return state;
    }
};

interface IProps {
    data: IUserForm;
    dispatch: React.Dispatch<Action>;
    includePassword?: boolean;
}

// TODO: re-enter password input
export const UserInputs: React.FC<IProps> = ({data, dispatch, includePassword}) => (
    <>
        <EmailInput name="Email"
            value={ data.email }
            onChange={ (email) => dispatch({type: "setEmail", email}) }
        />
        <SimpleTextInput name="Name"
            type="text"
            autocomplete="username"
            value={ data.name }
            onChange={ (name) => dispatch({type: "setName", name}) }
            required={ true }
        />
        { (includePassword ?? true) && <PasswordInput name="Password"
            autocomplete="new-password"
            className=""
            value={ data.password }
            onChange={ (password) => dispatch({type: "setPassword", password}) }
        /> }
    </>
);
UserInputs.displayName = "UserInputs";
