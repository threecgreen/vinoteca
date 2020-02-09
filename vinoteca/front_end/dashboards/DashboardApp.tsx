import React from "react";
import { Col, Row } from "../../components/Grid";
import { ByTheNumbers } from "./ByTheNumbers";
import { PurchasesByYearGraph, PurchasesByYearTable } from "./PurchasesByYear";
import { TopGrapes, TopProducers, TopRegions, TopVitiAreas, TopColors } from "./Top";

export const DashboardApp: React.FC<{}> = (_) => {
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Wine purchase Stats</h3>
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
}
DashboardApp.displayName = "DashboardApp";
