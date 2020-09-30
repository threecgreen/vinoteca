import { Col, Row } from "components/Grid";
import React from "react";
import RecentPurchases from "./RecentPurchases";
import { TopWineTypes } from "./TopWineTypes";

const HomeDashboard: React.FC = (_) => (
    <Row>
        <Col s={12} xl={7}>
            <RecentPurchases />
        </Col>
        <Col s={12} xl={5}>
            <TopWineTypes />
        </Col>
    </Row>
);
HomeDashboard.displayName = "HomeDashboard";
export default HomeDashboard;
