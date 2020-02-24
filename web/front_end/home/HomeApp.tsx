import { RouteComponentProps } from "@reach/router";
import React from "react";
import { BtnLink } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ParallaxImg } from "../../components/ParallaxImg";
import { useTitle } from "../../lib/widgets";
import { RecentPurchases } from "./RecentPurchases";
import { TopWineTypes } from "./TopWineTypes";

export const HomeApp: React.FC<RouteComponentProps> = (_) => {
    useTitle("Wine purchase tracker");

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
                            <BtnLink classes={ ["yellow-bg"] } to="/wines/new">
                                <MaterialIcon iconName="add_circle" />
                                add wine
                            </BtnLink>
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
