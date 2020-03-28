import React from "react";
import Logger from "../lib/Logger";
import { IWineGrape, IWineGrapesForm } from "../lib/Rest";
import { getGrapes, getOrCreateGrape, toDict } from "../lib/RestApi";
import { IDict, maxBy, sumBy } from "../lib/utils";
import { FloatingBtn } from "./Buttons";
import { GrapeInput } from "./GrapeInput";
import { Col, InputField, Row } from "./Grid";
import { MaterialIcon } from "./MaterialIcon";

export const wineGrapesToForm = async (wineGrapes: IWineGrape[], wineId: number) => {
    const wineGrapesForm: IWineGrapesForm = {
        wineId: wineId,
        grapes: await Promise.all(wineGrapes.map(async (wg) => {
            const grape = await getOrCreateGrape({name: wg.grape}, {name: wg.grape});
            return {
                grapeId: grape.id,
                percent: wg.percent,
            };
        })),
    };
    return wineGrapesForm;
}

type Action =
    | { type: "addGrape" }
    | { type: "deleteGrape", id: number }
    | { type: "modifyGrape", id: number, grape: string, percent: number | null }
    | { type: "setWineId", wineId: number }

const remainingGrapePct = (grapes: IWineGrape[]): number => {
    if (grapes.length > 0) {
        const sum = sumBy(grapes, (wg) => wg.percent || 0);
        if (sum <= 100) {
            return 100 - sum;
        } else {
            new Logger("remainingGrapePct").logWarning("Total grape percentage is greater than 100%");
            return 0;
        }
    }
    return 100;
}

export const grapeReducer: React.Reducer<IWineGrape[], Action> = (grapes, action) => {
    switch (action.type) {
        case "addGrape":
            const maxId = maxBy(grapes, (grape) => grape.grapeId)?.grapeId ?? 0;
            const hasGrapePct = grapes.some((grape) => grape.percent !== null && grape.grape);
            const remPct = remainingGrapePct(grapes);
            const wineId = grapes.length > 0 ? grapes[grapes.length - 1].wineId : 0;
            // Need to create new array to assuage React diffing algo
            return [
                ...grapes, {
                percent: hasGrapePct ? remPct : null,
                grape: "",
                grapeId: maxId + 1,
                wineId,
            }];
        case "deleteGrape":
            return grapes.filter((grape) => grape.grapeId !== action.id);
        case "modifyGrape":
            return grapes.map((grape) => (
                (grape.grapeId === action.id)
                    ? {id: action.id, percent: action.percent, grape: action.grape, grapeId: grape.grapeId, wineId: grape.wineId}
                    : grape
            ));
        case "setWineId":
            return grapes.map((grape) => ({
                ...grape,
                wineId: action.wineId,
            }));
        default:
            return grapes;
    }
}

interface IProps {
    grapes: IWineGrape[];
    dispatch: React.Dispatch<Action>;
}

export const GrapesInputs: React.FC<IProps> = ({grapes, dispatch}) => {
    const [completions, setCompletions] = React.useState<IDict<string | null>>({});

    React.useEffect(() => {
        async function fetchGrapes() {
            const completions = await getGrapes({});
            setCompletions(toDict(completions));
        }

        fetchGrapes();
    }, [setCompletions])

    return (
        <Row>
            <Col s={ 12 }>
                <h6>Grape composition</h6>
            </Col>
            { grapes.map((grape, i) => (
                <GrapeInput key={ grape.grapeId }
                    id={ i }
                    completions={ completions }
                    grape={ grape.grape }
                    percent={ grape.percent }
                    handleDelete={ (id) => dispatch({type: "deleteGrape", id}) }
                    onChange={ (id, grape, percent) => dispatch({type: "modifyGrape", id, grape, percent}) }
                />
            )) }
            <InputField>
                <FloatingBtn onClick={ () => dispatch({type: "addGrape"}) }
                    classes={ ["green-bg"] }
                >
                    <MaterialIcon iconName="add" />
                </FloatingBtn>
            </InputField>
        </Row>
    );
}
GrapesInputs.displayName = "GrapesInputs";
