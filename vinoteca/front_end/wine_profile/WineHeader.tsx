import * as React from "react";
import { Row, Col } from "../../components/Grid";

interface IProps {
    name?: string;
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
                    <a href={ `/producers/${props.producerId}` }
                        className="text-link"
                    >
                        { props.producer }
                    </a> of <a href={ `/regions/${props.regionId}` }
                        className="text-link"
                    >
                        { props.region }
                    </a>
                </h4>
            </Col>
            { ...props.children }
        </Row>
    );
};
WineHeader.displayName = "WineHeader";

const NameType: React.FC<{name?: string, wineType: string, wineTypeId: number}> = ({name, wineType, wineTypeId}) => {
    const wineTypeElem = (
        <a href={ `/wine-types/${wineTypeId}/` }>
            { wineType }
        </a>
    );
    if (name) {
        return (
            <h3 className="bold">
                { name }
                { wineTypeElem }
            </h3>
        );
    }
    return <h3 className="bold">{ wineTypeElem }</h3>;
}
NameType.displayName = "NameType";
