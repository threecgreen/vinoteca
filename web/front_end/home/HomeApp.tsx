import { RouteComponentProps, Link } from "@reach/router";
import React from "react";
import { Btn } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ParallaxImg } from "../../components/ParallaxImg";
import { redirect } from "../../lib/utils";
import { RecentPurchases } from "./RecentPurchases";
import { TopWineTypes } from "./TopWineTypes";

export const HomeApp: React.FC<RouteComponentProps> = (_) => {
    return (
        <>
            <ParallaxImg src="/static/img/bourgogne.jpg" alt="Vineyard" />
            <div className="section white">
                <div className="container">
                    <Row>
                        <Col s={ 12 }>
                            <h1 className="center bold">
                                Welcome to <span className="brand-logo">vinoteca</span>
                            </h1>
                            <h5 className="center">A wine purchase tracker and review system</h5>
                        </Col>
                        <div className="center-align">
                            <Link className="yellow-bg" to="wines/add">
                                <MaterialIcon iconName="add_circle" />
                                add wine
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <Col s={ 12 } xl={ 7 }>
                            <RecentPurchases />
                        </Col>
                        <Col s={ 12 } xl={ 5 }>
                            <TopWineTypes />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
HomeApp.displayName = "HomeApp";
