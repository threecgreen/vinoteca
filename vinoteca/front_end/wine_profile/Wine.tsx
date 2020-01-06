import * as React from "react";
import { Row, Col } from "../../components/Grid";
import { WineGrape } from "../../components/GrapesFormApp";

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

export const Wine: React.FC<IProps> = (props) => {
    let nameType: string;
    if (props.name) {
        nameType = `${props.name} ${props.wineType}`;
    } else {
        nameType = `${props.wineType}`;
    }

    return (
        <Row>
            <Col s={ 12 }>
                <NameType { ...props } />
                <h4>
                    <a href={ `/producers/${props.producerId}` }
                        className="text-link"
                    >
                        { props.producer }
                    </a>
                    of
                    <a href={ `/regions/${props.regionId}` }
                        className="text-link"
                    >
                        { props.region }
                    </a>
                </h4>
            </Col>
            { ...props.children }
        </Row>
    )
};
Wine.displayName = "Wine";

const NameType: React.FC<{name?: string, wineType: string, wineTypeId: number}> = ({name, wineType, wineTypeId}) => {
    if (name) {
        return (
            <h3 className="bold">
                { name }
                <a href={ `/wine-types/${wineTypeId}/` }>
                    { wineType }
                </a>
            </h3>
        );
    }
    if (name) {
        return <h3 className="bold">{ name }</h3>;
    }
    return <h3 className="bold"></h3>
}
NameType.displayName = "NameType";
