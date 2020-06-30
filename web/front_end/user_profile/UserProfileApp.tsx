import { navigate } from "@reach/router";
import { Btn } from "components/Buttons";
import { useSetUser, useUser } from "components/context/UserContext";
import { Col, Row } from "components/Grid";
import format from "date-fns/esm/format";
import { IChangeUserForm } from "generated/rest";
import { updateUser } from "lib/api/auth";
import { useLogger } from "lib/Logger";
import { useCanonical, useDescription, useTitle } from "lib/widgets";
import React from "react";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { EditUser } from "./EditUser";

enum Mode {
    Display,
    Edit,
    ChangePassword,
}

const UserProfileApp: React.FC<{}> = (_) => {
    const logger = useLogger("UserProfileApp");
    const [mode, setMode] = React.useState(Mode.Display);

    const user = useUser();
    const setUser = useSetUser();
    if (!user) {
        navigate("/");
        return null;
    }

    useTitle(`${user}'s profile`);
    useDescription(`${user}'s profile. The current user`);
    useCanonical("/profile");

    const onSubmitChanges = async (form: IChangeUserForm) => {
        try {
            const updatedUser = await updateUser(form);
            updatedUser.map(setUser)
                // TODO: better graceful error handling
                .mapErr((e) => logger.logWarning(`Failed to update profile: ${e}`));
        } catch (e) {
            logger.logWarning(`Failed to update profile: ${e.message}`, {form});
        } finally {
            setMode(Mode.Display);
        }
    };

    let modal;
    if (mode === Mode.Edit) {
        modal = (
            <EditUser user={ user }
                onSubmit={ onSubmitChanges }
                onCancel={ () => setMode(Mode.Display) }
            />
        );
    } else if (mode === Mode.ChangePassword) {
        modal = (
            <ChangePasswordForm onFinish={ () => setMode(Mode.Display) } />
        );
    }

    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3>Welcome back { user.name }</h3>

                    <h6><b>Email:</b> { user.email }</h6>
                    <h6><b>Account created at: </b>{ format(user.createdAt, "PPpp") }</h6>
                    <h6><b>Last login: </b>{ format(user.lastLogin, "PPpp") }</h6>
                </Col>
            </Row>
            <Row>
                <Col s={ 12 }>
                    <Btn classes={ ["red-bg"] }
                        onClick={ () => setMode(Mode.Edit) }
                    >
                        Edit
                    </Btn>
                    <Btn classes={ ["yellow-bg"] }
                        onClick={ () => setMode(Mode.ChangePassword) }
                    >
                        Change password
                    </Btn>
                </Col>
            </Row>
            { modal }
        </div>
    );
};
UserProfileApp.displayName = "UserProfileApp";
export default UserProfileApp;
