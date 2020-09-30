import { ConfirmBtn } from "components/Buttons";
import { Form } from "components/Form";
import { initUserInputData, userInputReducer, UserInputs } from "components/UserInputs";
import { IUser } from "generated/rest";
import { createUser } from "lib/api/auth";
import { useLogger } from "lib/Logger";
import React from "react";

interface IProps {
    onFinish: (user: IUser) => void;
}

export const NewUserForm: React.FC<IProps> = ({onFinish}) => {
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
                        logger.logError(
                            `Failed to create new user with ${ve.type} error: ${ve.message}`);
                }
                setIsSaving(false);
                return ve;
            });
    };

    return (
        <Form onSubmit={ () => data.email && data.name && data.password && onSubmit() }>
            { errorMsg && <p className="error-msg">{ errorMsg }</p>}
            <UserInputs data={ data }
                dispatch={ dispatch }
            />
            <ConfirmBtn onClick={ onSubmit }
                isSaving={ isSaving }
                disabled={ !data.password || !data.email || !data.password }
            />
        </Form>
    );
};
NewUserForm.displayName = "NewUserForm";
