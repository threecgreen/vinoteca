import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Col, Row } from "../../components/Grid";
import { useTitle } from "../../lib/widgets";
import { ByTheNumbers } from "./ByTheNumbers";
import { PurchasesByYearGraph, PurchasesByYearTable } from "./PurchasesByYear";
import { TopColors, TopGrapes, TopProducers, TopRegions, TopVitiAreas } from "./Top";

export const DashboardApp: React.FC<RouteComponentProps> = (_) => {
    useTitle("Dashboards");

    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Wine purchase stats</h3>
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
