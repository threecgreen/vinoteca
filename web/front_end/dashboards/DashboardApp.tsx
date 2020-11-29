import { Col, Row } from "components/Grid";
import { useTitle } from "lib/hooks";
import React from "react";
import { ByTheNumbers } from "./ByTheNumbers";
import { PurchasesByYearGraph, PurchasesByYearTable } from "./PurchasesByYear";
import { TopColors, TopGrapes, TopProducers, TopRegions, TopVitiAreas } from "./Top";

const DashboardApp: React.FC = (_) => {
    useTitle("Dashboards");

    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h1 className="page-title med-heading">Wine purchase stats</h1>
                </Col>
            </Row>
            <Row>
                <Col s={ 12 }>
                    <PurchasesByYearGraph />
                </Col>
                <Col s={ 12 } l={ 6 } xl={ 4 }>
                    <TopProducers />
                    <TopRegions />
                </Col>
                <Col s={ 12 } l={ 6 } xl={ 4 }>
                    <ByTheNumbers />
                    <TopColors />
                    <TopGrapes />
                </Col>
                <Col s={ 12 } l={ 6 } xl={ 4 }>
                    <PurchasesByYearTable />
                    <TopVitiAreas />
                </Col>
            </Row>
        </div>
    );
};
DashboardApp.displayName = "DashboardApp";
export default DashboardApp;
