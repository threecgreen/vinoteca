import React from "react";
import { Row, Col } from "../../components/Grid";
import { Link } from "@reach/router";

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
            <Col s={ 12 }>
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

const NameType: React.FC<{name: string | null, wineType: string, wineTypeId: number}> = ({name, wineType, wineTypeId}) => {
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
}
NameType.displayName = "NameType";
