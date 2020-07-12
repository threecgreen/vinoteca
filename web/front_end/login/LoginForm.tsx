import { ConfirmBtn } from "components/Buttons";
import { Form } from "components/Form";
import { EmailInput, PasswordInput } from "components/inputs/TextInput";
import { IUser } from "generated/rest";
import { login } from "lib/api/auth";
import { useLogger } from "lib/Logger";
import React from "react";

interface IProps {
    onFinish: (user: IUser) => void;
}

export const LoginForm: React.FC<IProps> = ({onFinish}) => {
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

    return (
        <Form onSubmit={ () => password && email && onSubmit() }>
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
            <ConfirmBtn onClick={ onSubmit }
                text="Submit"
                isSaving={ isSaving }
                disabled={ !password || !email }
            />
        </Form>
    );
};
LoginForm.displayName = "LoginForm";
