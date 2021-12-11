import { navigate } from "@reach/router";
import { FloatingBtn } from "components/Buttons";
import { FixedActionList } from "components/FixedActionList";
import { Col, Row } from "components/Grid";
import { MaterialIcon } from "components/MaterialIcon";
import { DeleteModal } from "components/Modal";
import { Preloader } from "components/Preloader";
import { ColumnToExclude, WinesTable } from "components/WinesTable";
import { IProducer, IRegion, IWine } from "generated/rest";
import { EmptyResultError } from "lib/api/common";
import { deleteProducer, getProducer, updateProducer } from "lib/api/producers";
import { getRegion } from "lib/api/regions";
import { getWines } from "lib/api/wines";
import { useTitle } from "lib/hooks";
import { LogLevel, useLogger } from "lib/Logger";
import React from "react";
import { Producer } from "./Producer";

export enum ProducerProfileTextInput {
    Producer,
    Region,
}

enum Mode {
    Display,
    Edit,
    Delete,
}

interface IState {
    mode: Mode;
    // Editable fields
    producerText: string;
    regionText: string;
    // "Pure" state, only mutated on successful changes sent to server
    producer?: IProducer;
    region?: IRegion;
    wines: IWine[];
}

type Action =
    | { type: "setMode", mode: Mode }
    | { type: "setProducerText", text: string }
    | { type: "setRegionText", text: string }
    | { type: "setProducer", producer: IProducer }
    | { type: "setRegion", region: IRegion }
    | { type: "setWines", wines: IWine[] }
    | { type: "reset"};

const reducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setMode":
            return { ...state, mode: action.mode };
        case "setProducerText":
            return { ...state, producerText: action.text };
        case "setRegionText":
            return { ...state, regionText: action.text };
        case "setProducer":
            return {
                ...state,
                mode: Mode.Display,
                producer: action.producer,
                producerText: action.producer.name,
            };
        case "setRegion":
            return {
                ...state,
                mode: Mode.Display,
                region: action.region,
                regionText: action.region.name,
            };
        case "setWines":
            return { ...state, wines: action.wines };
        case "reset":
            return {
                ...state,
                mode: Mode.Display,
                producerText: state.producer?.name ?? "",
                regionText: state.region?.name ?? "",
            };
        default:
            return state;
    }
};

interface IProps {
    producerId: number;
}

const ProducerProfileApp: React.FC<IProps> = ({producerId}) => {
    const logger = useLogger("ProducerProfileApp");

    const [state, dispatch] = React.useReducer(reducer, [], () => ({
        mode: Mode.Display,
        producerText: "",
        regionText: "",
        producer: undefined,
        region: undefined,
        wines: [],
    }));

    useTitle(state.producer?.name ?? "Producer profile");

    React.useEffect(() => {
        const getProducerData = async () => {
            try {
                const producer = await getProducer(producerId);
                dispatch({type: "setProducer", producer});
                const region = await getRegion({id: producer.regionId});
                dispatch({type: "setRegion", region});
            } catch (e) {
                logger.logException("Error getting producer data", e, {}, LogLevel.Warning);
            }
        };

        async function fetchData() {
            try {
                const [_, wines] = await Promise.all([
                    getProducerData(),
                    getWines({producerId}),
                ]);
                dispatch({type: "setWines", wines: wines.unwrap()});
            } catch (e) {
                logger.logException("Failed to load producer", e, {id: producerId},
                                    LogLevel.Warning);
            }
        }

        void fetchData();
    }, [logger, producerId]);

    const onConfirmClick = async () => {
        try {
            const [regionChanged, regionId] = await handleRegionChanges();
            if (state.producer
                && (state.producerText !== state.producer.name || regionChanged)) {

                const producer = await updateProducer({
                    id: producerId,
                    name: state.producerText,
                    regionId,
                });
                dispatch({type: "setProducer", producer});
            } else {
                dispatch({type: "reset"});
            }
        } catch (err) {
            logger.logException("Failed to save changes to the database", err, {},
                                LogLevel.Warning);
        }
    };

    const handleRegionChanges = async (): Promise<[boolean, number]> => {
        if ((state.regionText && !state.region)
            || (state.region && state.regionText !== state.region.name)) {

            // TODO: limit region to set values
            try {
                const region = await getRegion({name: state.regionText});
                dispatch({type: "setRegion", region});
                return [true, region.id];
            } catch (err) {
                if (err instanceof Error && EmptyResultError.isInstance(err)) {
                    logger.logWarning("Invalid region while trying to edit producer",
                                      {producer: state.producerText,
                                       region: state.regionText});
                } else {
                    logger.logException("Error fetching region", err,
                                        {region: state.regionText,
                                         producer: state.producerText});
                }
                throw err;
            }
        }
        if (state.region) {
            return[false, state.region.id];
        }
        return [false, -1];
    };

    const onDeleteClick = async () => {
        try {
            await deleteProducer(producerId);
            // Redirect home
            void navigate("/");
        } catch (ex) {
            logger.logException("Failed to delete producer", ex, {id: producerId},
                                LogLevel.Warning);
        }
    };

    if (!state.producer) {
        return <Preloader />;
    }
    const modal = state.mode === Mode.Delete
        ? <DeleteModal item="producer"
            onNoClick={ () => dispatch({type: "setMode", mode: Mode.Display}) }
            onYesClick={ onDeleteClick }
        /> : null;
    return (
        <div className="container">
            <Producer isEditing={ state.mode === Mode.Edit }
                producer={ state.producer }
                producerText={ state.producerText }
                onProducerChange={ (text) => dispatch({type: "setProducerText", text}) }
                region={ state.region }
                regionText={ state.regionText }
                onRegionChange={ (text) => dispatch({type: "setRegionText", text}) }
                onConfirmClick={ onConfirmClick }
                onCancelClick={ () => dispatch({type: "reset"}) }
            />
            <Row>
                <Col s={ 12 } l={ 9 }>
                    <h5>Wines</h5>
                </Col>
                <Col s={ 12 } l={ 3 } classes={ ["fixed-action-div"] }>
                    <FixedActionList>
                        <FloatingBtn onClick={ () => dispatch({type: "setMode", mode: Mode.Edit}) }
                            classes={ ["yellow-bg"] }
                        >
                            <MaterialIcon iconName="edit" />
                        </FloatingBtn>
                        <FloatingBtn
                            onClick={ () => dispatch({type: "setMode", mode: Mode.Delete}) }
                            classes={ ["red-bg"] }
                        >
                            <MaterialIcon iconName="delete" />
                        </FloatingBtn>
                    </FixedActionList>
                </Col>
                <Col s={ 12 }>
                    <WinesTable wines={ state.wines }
                        excludeColumn={ ColumnToExclude.Producer }
                    />
                </Col>
            </Row>
            { modal }
        </div>
    );

};
ProducerProfileApp.displayName = "ProducerProfileApp";
export default ProducerProfileApp;
