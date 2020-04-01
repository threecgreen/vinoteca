import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Btn, BtnLink } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ParallaxImg } from "../../components/ParallaxImg";
import { IUser } from "../../lib/Rest";
import { useTitle } from "../../lib/widgets";
import { RecentPurchases } from "./RecentPurchases";
import { TopWineTypes } from "./TopWineTypes";
import { NewUserForm } from "../../components/AccountModals";

interface IProps {
    user: IUser | null;
    setUser: (user: IUser) => void;
}

export const HomeApp: React.FC<RouteComponentProps<IProps>> = ({ user, setUser }) => {
    useTitle("Wine purchase tracker");

    const [showNewUserModal, setShowNewUserModal] = React.useState(false);

    const homeDashboards = user ? (
            <Row>
                <Col s={12} xl={7}>
                    <RecentPurchases />
                </Col>
                <Col s={12} xl={5}>
                    <TopWineTypes />
                </Col>
            </Row>
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
