import React from "react";
import { Col, Row } from "../../components/Grid";
import { ByTheNumbers } from "./ByTheNumbers";
import { PurchasesByYear } from "./PurchasesByYear";
import { TopProducers, TopRegions, TopVitiAreas } from "./Top";

export const DashboardApp: React.FC<{}> = (_) => {
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Wine Purchase Stats</h3>
                </Col>
            </Row>
            <Row>
                <Col s={ 12 }>
                    <PurchasesByYear />
                </Col>
                <Col s={ 12 } l={ 6 } xl={ 4 }>
                    <TopProducers />
                    <TopRegions />
                </Col>
                <Col s={ 12 } l={ 6 } xl={ 4 }>
                    <ByTheNumbers />
                </Col>
                <Col s={ 12 } l={ 6 } xl={ 4 }>
                    <TopVitiAreas />
                </Col>
            </Row>
        </div>
    );
}
DashboardApp.displayName = "DashboardApp";
