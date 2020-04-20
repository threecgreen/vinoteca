import { redirectTo } from "@reach/router";
import format from "date-fns/esm/format";
import React from "react";
import { Col, Row } from "../../components/Grid";
import { useUser } from "../../components/UserContext";

export const UserProfileApp: React.FC<{}> = (_) => {
    const user = useUser();
    if (!user) {
        redirectTo("/");
        return null;
    }
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3>Welcome back { user.name }</h3>

                    <h6><b>Email:</b> { user.email }</h6>
                    <h6><b>Account created at: </b>{ format(new Date(user.createdAt), "PPpp") }</h6>
                </Col>
            </Row>
        </div>
    );
}
UserProfileApp.displayName = "UserProfileApp";
