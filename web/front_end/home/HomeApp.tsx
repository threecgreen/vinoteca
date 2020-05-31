import { RouteComponentProps } from "@reach/router";
import React, { Suspense } from "react";
import { NewUserForm } from "../../components/AuthModals";
import { Btn, BtnLink } from "../../components/Buttons";
import { AsyncComponent } from "../../components/CommonRoutes";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ParallaxImg } from "../../components/ParallaxImg";
import { Preloader } from "../../components/Preloader";
import { useSetUser, useUser } from "../../components/UserContext";
import { useTitle } from "../../lib/widgets";

export const HomeApp: React.FC<RouteComponentProps<{}>> = () => {
    useTitle("Wine purchase tracker");

    const user = useUser();
    const setUser = useSetUser();

    const [showNewUserModal, setShowNewUserModal] = React.useState(false);

    const homeDashboards = user ? (
            <Suspense fallback={ <Preloader /> }>
                <AsyncComponent componentName="HomeDashboard" />
            </Suspense>
        ) : null;

    const button = user ? (
        <BtnLink classes={["yellow-bg"]} to="/wines/new">
            <MaterialIcon iconName="add_circle" />
            add wine
        </BtnLink>
    ) : (
        <Btn classes={ ["yellow-bg"] } onClick={ () => setShowNewUserModal(true) }>
            <MaterialIcon iconName="add_circle" />
            create account
        </Btn>
    );

    return (
        <>
            <ParallaxImg src="/static/img/bourgogne.jpg" alt="Vineyard" />
            <div className="section white">
                <div className="container">
                    <Row>
                        <Col s={12}>
                            <h1 className="center bold">
                                Welcome to <span className="brand-logo">vinoteca</span>
                            </h1>
                            <h5 className="center">A wine purchase tracker and review system</h5>
                        </Col>
                        <div className="center-align">
                            { button }
                        </div>
                    </Row>
                    { homeDashboards }
                </div>
            </div>
            { showNewUserModal && <NewUserForm onCancel={ () => setShowNewUserModal(false) }
                onFinish={ (user) => {
                    setUser!(user);
                    setShowNewUserModal(false);
                }}
            /> }
        </>
    );
}
HomeApp.displayName = "HomeApp";
