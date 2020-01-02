import * as React from "react";
import { ParallaxImg } from "../../components/ParallaxImg";
import { Row, Col } from "../../components/Grid";
import { RecentPurchases } from "./RecentPurchases";

export const HomeApp: React.FC<{}> = (_) => {
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
                    </Row>
                    <Row>
                        <Col s={ 12 } xl={ 7 }>
                            <RecentPurchases />
                        </Col>
                        <Col s={ 12 } xl={ 5 }>

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
HomeApp.displayName = "HomeApp";
