import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Col, Row } from "../../components/Grid";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { IGrape, IGrapeForm } from "../../lib/Rest";
import { getGrapes, updateGrape } from "../../lib/RestApi";
import { useTitle } from "../../lib/widgets";
import { EditGrape } from "./EditGrape";
import { GrapesList } from "./GrapesList";
import { grapeStateReducer, initGrapeState } from "./state";

export const GrapesApp: React.FC<RouteComponentProps> = (_props) => {
    const logger = new Logger(GrapesApp.name);
    const [state, dispatch] = React.useReducer(grapeStateReducer, initGrapeState());

    useTitle("Grapes");

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
        dispatch({type: "setToDisplay"});
        if (state.mode.type === "edit") {
            const id = state.mode.id
            try {
                const updatedGrape = await updateGrape(id, grape);
                dispatch({type: "setGrapes", grapes: state.grapes.map((g) => g.id === id ? updatedGrape : g)});
            } catch (e) {
                logger.logWarning(`Failed to save grape change for grape with id ${id}: ${e.message}`);
            }
        }
    }

    if (state.grapes.length === 0) {
        return <Preloader />;
    }
    let editComponent = null;
    if (state.mode.type === "edit") {
        const id = state.mode.id;
        editComponent = (
            <EditGrape name={ state.grapes.find((g) => g.id === id)?.name ?? "" }
                onCancelClick={ onCancelClick }
                onSaveClick={ onSaveClick }
            />
        )
    }
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Grapes</h3>
                    <GrapesList grapes={ state.grapes }
                        onEditClick={ onEditClick }
                    />
                    { editComponent }
                </Col>
            </Row>
        </div>
    );
}
GrapesApp.displayName = GrapesApp.name;
