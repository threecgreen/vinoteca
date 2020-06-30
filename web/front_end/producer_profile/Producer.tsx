import { Link } from "@reach/router";
import { CancelOrConfirmBtns } from "components/Buttons";
import { Form } from "components/Form";
import { Col, Row } from "components/Grid";
import { ProducerInput } from "components/model_inputs/ProducerInput";
import { RegionInput } from "components/model_inputs/RegionInput";
import { IProducer, IRegion } from "generated/rest";
import { handleSubmit } from "lib/utils";
import React from "react";

interface IProducerProps {
    isEditing: boolean;
    producerText: string;
    producer: IProducer;
    onProducerChange: (val: string) => void;
    regionText: string;
    region?: IRegion;
    onRegionChange: (text: string) => void;
    onConfirmClick: () => Promise<void>;
    onCancelClick: () => void;
}

export const Producer: React.FC<IProducerProps> = (props) => {
    const [isSaving, setIsSaving] = React.useState(false);

    if (props.isEditing) {
        return (
            <Row>
                <Col s={ 12 }>
                    <h3 className="bold">{ `Edit Producer ${props.producer.name}` }</h3>
                    <Form onSubmit={ () => props.producerText && props.regionText
                        && props.onConfirmClick() }
                    >
                        <ProducerInput value={ props.producerText }
                            onChange={ props.onProducerChange }
                            required={ true }
                        />
                        <RegionInput value={ props.regionText }
                            onChange={ props.onRegionChange }
                            required={ true }
                        />
                    </Form>
                </Col>
                <CancelOrConfirmBtns
                    onConfirmClick={ handleSubmit(props.onConfirmClick, setIsSaving) }
                    onCancelClick={ props.onCancelClick }
                    isSaving={ isSaving }
                    confirmDisabled={ !props.producerText || !props.regionText }
                />
            </Row>
        );
    }
    let regionInfo;
    if (props.region) {
        regionInfo = (
            <h4 className="light">
                <Link to={ `/regions/${props.region.id}/` }
                        className="text-link"
                >
                    { props.region.name }
                </Link>
            </h4>
        );
    }
    return (
        <Row>
            <Col s={ 12 }>
                <h3 className="bold">{ props.producer.name }</h3>
                { regionInfo }
        </Col>
        </Row>
    );
};
Producer.displayName = "Producer";
