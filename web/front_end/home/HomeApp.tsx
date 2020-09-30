import { RouteComponentProps } from "@reach/router";
import { BtnLink } from "components/Buttons";
import { AsyncComponent } from "components/CommonRoutes";
import { useUser } from "components/context/UserContext";
import { Col, Row } from "components/Grid";
import { MaterialIcon } from "components/MaterialIcon";
import { ParallaxImg } from "components/ParallaxImg";
import { Preloader } from "components/Preloader";
import { useCanonical, useDescription, useTitle } from "lib/hooks";
import React, { Suspense } from "react";

export const HomeApp: React.FC<RouteComponentProps> = () => {
    useTitle("Wine purchase tracker");
    useDescription("A simple, free wine purchase tracker");
    useCanonical("");

    const user = useUser();

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
        <BtnLink classes={ ["yellow-bg"] } to="/register">
            <MaterialIcon iconName="add_circle" />
            register
        </BtnLink>
    );

    return (
        <>
            <ParallaxImg src="/static/img/bourgogne.jpg"
                // eslint-disable-next-line max-len
                alt="Lush rows of grapevines with a small building in the distance in Burgundy, France"
            />
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
        </>
    );
};
HomeApp.displayName = "HomeApp";
