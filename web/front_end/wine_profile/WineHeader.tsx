import { Link } from "@reach/router";
import { Col, Row } from "components/Grid";
import React from "react";

interface IProps {
    name: string | null;
    producer: string;
    producerId: number;
    region: string;
    regionId: number;
    wineType: string;
    wineTypeId: number;
    children: any;
}

export const WineHeader: React.FC<IProps> = (props) => {
    return (
        <Row>
            <Col s={ 12 } key="wineHeader">
                <NameType { ...props } />
                <h4>
                    <Link to={ `/producers/${props.producerId}` }
                        className="text-link"
                    >
                        { props.producer }
                    </Link> of <Link to={ `/regions/${props.regionId}` }
                        className="text-link"
                    >
                        { props.region }
                    </Link>
                </h4>
            </Col>
            { ...props.children }
        </Row>
    );
};
WineHeader.displayName = "WineHeader";

interface INameTypeProps {
    name: string | null;
    wineType: string;
    wineTypeId: number;
}

const NameType: React.FC<INameTypeProps> = ({name, wineType, wineTypeId}) => {
    const wineTypeElem = (
        <a href={ `/wine-types/${wineTypeId}/` }>
            { wineType }
        </a>
    );
    if (name) {
        return (
            <h3 className="bold">
                { name } { wineTypeElem }
            </h3>
        );
    }
    return <h3 className="bold">{ wineTypeElem }</h3>;
};
NameType.displayName = "NameType";
