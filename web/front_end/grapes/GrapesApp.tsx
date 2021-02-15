import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { DeleteRecord } from "front_end/list_view/DeleteRecord";
import { EditRecord } from "front_end/list_view/EditRecord";
import { initListViewState, listViewReducer } from "front_end/list_view/state";
import { IGrape, IGrapeForm } from "generated/rest";
import { deleteGrape, getGrapes, updateGrape } from "lib/api/grapes";
import { useTitle } from "lib/hooks";
import { useLogger } from "lib/Logger";
import React from "react";
import { GrapesList } from "./GrapesList";

const GrapesApp: React.FC = (_) => {
    const logger = useLogger("GrapesApp");
    const [state, dispatch] = React.useReducer(listViewReducer, initListViewState());

    useTitle("Grapes");

    React.useEffect(() => {
        async function fetchGrapes() {
            try {
                const grapes: IGrape[] = await getGrapes({});
                dispatch({type: "setRecords", records: grapes});
            } catch (e) {
                logger.logWarning(`Failed to load grapes: ${e.message}`);
            } finally {
                dispatch({type: "hasLoaded"});
            }
        }

        void fetchGrapes();
    }, [logger]);

    const onEditClick = (id: number) => dispatch({type: "setToEdit", id});
    const onDeleteClick = (id: number) => {
        if ((state.records[id] as IGrape).wineCount === 0) {
            dispatch({type: "setToDelete", id});
        }
    }
    const onConfirmDeleteClick = async () => {
        dispatch({type: "setToDisplay"});
        if (state.mode.type === "delete") {
            const id = state.mode.id;
            try {
                await deleteGrape(id);
                dispatch({type: "deleteRecord", id});
            } catch (e) {
                logger.logWarning(`Failed to delete grape for grape with id ${id}: ${e.message}`);
            }
        }
    }
    const onCancelClick  = () => dispatch({type: "setToDisplay"});
    const onSaveClick = async (grape: IGrapeForm) => {
        dispatch({type: "setToDisplay"});
        if (state.mode.type === "edit") {
            const id = state.mode.id;
            try {
                const updatedGrape = await updateGrape(id, grape);
                dispatch({type: "updateRecord", record: updatedGrape});
            } catch (e) {
                logger.logWarning(
                    `Failed to save grape change for grape with id ${id}: ${e.message}`);
            }
        }
    };

    let content = null;
    if (!state.hasLoaded) {
        content = <Preloader />;
    } else {
        let modalComponent = null;
        if (state.mode.type === "edit") {
            const grape = state.records[state.mode.id];
            modalComponent = (
                <EditRecord recordName="grape"
                    name={ grape?.name ?? "" }
                    onCancelClick={ onCancelClick }
                    onSaveClick={ onSaveClick }
                />
            );
        } else if (state.mode.type === "delete") {
            const grape = state.records[state.mode.id];
            modalComponent = (
                <DeleteRecord recordName="grape"
                    name={ grape?.name ?? "" }
                    onYesClick={ onConfirmDeleteClick }
                    onNoClick={ onCancelClick }
                />
            );
        }
        content = (
            <>
                <GrapesList grapes={ Object.values(state.records as IGrape[]) }
                    onEditClick={ onEditClick }
                    onDeleteClick={ onDeleteClick }
                />
                { modalComponent }
            </>
        );
    }

    return (
        <div className="text-container">
            <Row>
                <Col s={ 12 }>
                    <h1 className="page-title med-heading">Grapes</h1>
                    { content }
                </Col>
            </Row>
        </div>
    );
};
GrapesApp.displayName = "GrapesApp";
export default GrapesApp;
