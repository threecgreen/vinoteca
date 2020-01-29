import React from "react";
import { Col, Row } from "../../components/Grid";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { IGrape, IGrapeForm } from "../../lib/Rest";
import { getGrapes, updateGrape } from "../../lib/RestApi";
import { GrapesList } from "./GrapesList";
import { grapeStateReducer, initGrapeState } from "./state";

export const GrapesApp: React.FC<{}> = (_props) => {
    const logger = new Logger(GrapesApp.name);
    const [state, dispatch] = React.useReducer(grapeStateReducer, initGrapeState());

    React.useEffect(() => {
        async function fetchGrapes() {
            const grapes: IGrape[] = await getGrapes({});
            dispatch({type: "setGrapes", grapes});
        }

        fetchGrapes();
    }, []);

    const onEditClick = (id: number) => dispatch({type: "setToEdit", id});
    const onCancelClick  = () => dispatch({type: "setToDisplay"});
    const onSaveClick = async (grape: IGrapeForm) => {
        if (state.mode.type === "edit") {
            const id = state.mode.id
            try {
                const updatedGrape = await updateGrape(id, grape);
                dispatch({type: "setGrapes", grapes: state.grapes.map((g) => g.id === id ? updatedGrape : g)});
            } catch (e) {
                logger.logWarning(`Failed to save grape change for grape with id ${id}: ${e.message}`);
            } finally {
                dispatch({type: "setToDisplay"});
            }
        }
    }

    if (state.grapes.length === 0) {
        return <Preloader />;
    }
    // TODO: show edit modal
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Grapes</h3>
                    <GrapesList grapes={ state.grapes }
                        onEditClick={ onEditClick }
                    />
                </Col>
            </Row>
        </div>
    );
}
GrapesApp.displayName = GrapesApp.name;
