import React from "react";
import { Flag } from "../../components/Flag";
import { Col, Row } from "../../components/Grid";
import { IRegion } from "../../lib/Rest";

interface IRegionProps {
    region: IRegion;
}

// TODO: stats component?
export const Region: React.FC<IRegionProps> = ({region}) => {
    return (
        <Row>
            <Col s={ 12 }>
                <h3>
                    { /* TODO: fix alignment */ }
                    <Flag region={ region.name } />
                    <span className="bold">{ region.name }</span>
                </h3>
                {/* TODO: Stats here */}
            </Col>
        </Row>
    );
}
Region.displayName = "Region";
