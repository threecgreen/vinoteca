import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { IGrape, IGrapeForm } from "generated/rest";
import { getGrapes, updateGrape } from "lib/api/grapes";
import { useTitle } from "lib/hooks";
import { useLogger } from "lib/Logger";
import React from "react";
import { EditGrape } from "./EditGrape";
import { GrapesList } from "./GrapesList";
import { grapeStateReducer, initGrapeState } from "./state";

const GrapesApp: React.FC = (_) => {
    const logger = useLogger("GrapesApp");
    const [state, dispatch] = React.useReducer(grapeStateReducer, initGrapeState());

    useTitle("Grapes");

    React.useEffect(() => {
        async function fetchGrapes() {
            try {
                const grapes: IGrape[] = await getGrapes({});
                dispatch({type: "setGrapes", grapes});
            } catch (e) {
                logger.logWarning(`Failed to load grapes: ${e.message}`);
            } finally {
                dispatch({type: "hasLoaded"});
            }
        }

        void fetchGrapes();
    }, [logger]);

    const onEditClick = (id: number) => dispatch({type: "setToEdit", id});
    const onCancelClick  = () => dispatch({type: "setToDisplay"});
    const onSaveClick = async (grape: IGrapeForm) => {
        dispatch({type: "setToDisplay"});
        if (state.mode.type === "edit") {
            const id = state.mode.id;
            try {
                const updatedGrape = await updateGrape(id, grape);
                dispatch({type: "updateGrape", grape: updatedGrape});
            } catch (e) {
                logger.logWarning(
                    `Failed to save grape change for grape with id ${id}: ${e.message}`);
            }
        }
    };

    if (!state.hasLoaded) {
        return <Preloader />;
    }
    let editComponent = null;
    if (state.mode.type === "edit") {
        const grape = state.grapes[state.mode.id];
        editComponent = (
            <EditGrape name={ grape?.name ?? "" }
                onCancelClick={ onCancelClick }
                onSaveClick={ onSaveClick }
            />
        );
    }
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h1 className="page-title med-heading">Grapes</h1>
                    <GrapesList grapes={ Object.values(state.grapes) }
                        onEditClick={ onEditClick }
                    />
                    { editComponent }
                </Col>
            </Row>
        </div>
    );
};
GrapesApp.displayName = "GrapesApp";
export default GrapesApp;
