import * as React from "react";
import { Col, Row } from "../../components/Grid";

export const DashboardApp: React.FC<{}> = (_) => {
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Wine Purchase Stats</h3>
                </Col>
            </Row>
        </div>
    );
}
DashboardApp.displayName = "DashboardApp";
