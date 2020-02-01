import * as React from "react";
import { ParallaxImg } from "../../components/ParallaxImg";
import { Row, Col } from "../../components/Grid";
import { RecentPurchases } from "./RecentPurchases";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Btn } from "../../components/Buttons";
import { TopWineTypes } from "./TopWineTypes";
import { redirect } from "../../lib/utils";

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
                        <div className="center-align">
                            <Btn classes={ ["yellow-bg"] }
                                onClick={ () => redirect("/wines/new") }
                            >
                                <MaterialIcon iconName="add_circle" />
                                add wine
                            </Btn>
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
