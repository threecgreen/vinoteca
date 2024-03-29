import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { Table } from "components/Table";
import { DeleteRecord } from "front_end/list_view/DeleteRecord";
import { EditRecord } from "front_end/list_view/EditRecord";
import { initListViewState, listViewReducer } from "front_end/list_view/state";
import { IProducer } from "generated/rest";
import { deleteProducer, getProducers, updateProducer } from "lib/api/producers";
import { useTitle } from "lib/hooks";
import { LogLevel, useLogger } from "lib/Logger";
import React from "react";
import { ProducerListItem } from "./ProducerListItem";

const ProducersApp: React.FC = () => {
    const logger = useLogger("ProducersApp")
    const [state, dispatch] = React.useReducer(listViewReducer, initListViewState());

    useTitle("Producers");

    React.useEffect(() => {
        async function fetchProducers() {
            try {
                const producers: IProducer[] = await getProducers({});
                dispatch({type: "setRecords", records: producers});
            } catch (e) {
                logger.logException("Failed to load producers", e, {}, LogLevel.Warning);
            } finally {
                dispatch({type: "hasLoaded"});
            }
        }
        void fetchProducers();
    }, [logger]);

    // Handlers
    const onEditClick = (id: number) => dispatch({type: "setToEdit", id});
    const onDeleteClick = (id: number) => {
        dispatch({type: "setToDelete", id});
    }
    const onConfirmDeleteClick = async () => {
        dispatch({type: "setToDisplay"});
        if (state.mode.type === "delete") {
            const id = state.mode.id;
            try {
                await deleteProducer(id);
                dispatch({type: "deleteRecord", id});
            } catch (e) {
                logger.logException("Failed to delete producer", e, {producerId: id},
                                    LogLevel.Warning);
            }
        }
    }
    const onCancelClick  = () => dispatch({type: "setToDisplay"});
    const onSaveClick = async (producer: IProducer) => {
        dispatch({type: "setToDisplay"});
        if (state.mode.type === "edit") {
            const id = state.mode.id;
            try {
                const updatedProducers = await updateProducer(producer);
                dispatch({type: "updateRecord", record: updatedProducers});
            } catch (e) {
                logger.logException("Failed to save producer change for producer", e,
                                    {producerId: id}, LogLevel.Warning);
            }
        }
    };

    let content = null;
    if (!state.hasLoaded) {
        content = <Preloader />;
    } else {
        let modalComponent = null;
        if (state.mode.type === "edit") {
            const producer = state.records[state.mode.id] as IProducer;
            modalComponent = (
                <EditRecord recordName="producer"
                    name={ producer?.name ?? "" }
                    onCancelClick={ onCancelClick }
                    onSaveClick={ (form) => onSaveClick({...producer, name: form.name}) }
                />
            );
        } else if (state.mode.type === "delete") {
            const grape = state.records[state.mode.id];
            modalComponent = (
                <DeleteRecord recordName="producer"
                    name={ grape?.name ?? "" }
                    onYesClick={ onConfirmDeleteClick }
                    onNoClick={ onCancelClick }
                />
            );
        }
        const sortedProducers = Object.values(state.records)
            .sort((p1, p2) => p1.name.localeCompare(p2.name)) as IProducer[];

        content = (
            <>
                <Table condensed>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { sortedProducers.map((producer) => (
                            <ProducerListItem key={ producer.id }
                                producer={ producer }
                                onEditClick={ onEditClick }
                                onDeleteClick={ onDeleteClick }
                            />
                        )) }
                    </tbody>
                </Table>
                { modalComponent }
            </>
        );
    }
    return (
        <div className="text-container">
            <Row>
                <Col s={ 12 }>
                    <h1 className="page-title med-heading">Producers</h1>
                    { content }
                </Col>
            </Row>
        </div>
    );
}
ProducersApp.displayName = "ProducersApp";
export default ProducersApp;
