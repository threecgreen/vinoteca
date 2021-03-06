import { IWineGrape, IWineGrapesForm } from "generated/rest";
import { toDict } from "lib/api/common";
import { getGrapes, getOrCreateGrape } from "lib/api/grapes";
import Logger, { useLogger } from "lib/Logger";
import { maxBy, sumBy } from "lib/utils";
import React from "react";
import { FloatingBtn } from "../Buttons";
import { Col, InputField, Row } from "../Grid";
import { MaterialIcon } from "../MaterialIcon";
import { GrapeInput } from "./GrapeInput";

export const wineGrapesToForm = async (
    wineGrapes: IWineGrape[], wineId: number
): Promise<IWineGrapesForm> => {
    const wineGrapesForm: IWineGrapesForm = {
        wineId,
        grapes: await Promise.all(wineGrapes.map(async (wg) => {
            const grape = await getOrCreateGrape({name: wg.grape}, {name: wg.grape});
            return {
                grapeId: grape.id,
                percent: wg.percent,
            };
        })),
    };
    return wineGrapesForm;
};

type Action =
    | { type: "addGrape" }
    | { type: "deleteGrape", id: number }
    | { type: "modifyGrape", id: number, grape: string, percent: number | null }
    | { type: "setWineId", wineId: number }
    | { type: "reset" };

const remainingGrapePct = (grapes: IWineGrape[]): number => {
    if (grapes.length > 0) {
        const sum = sumBy(grapes, (wg) => wg.percent || 0);
        if (sum <= 100) {
            return 100 - sum;
        } else {
            new Logger("remainingGrapePct")
                .logWarning("Total grape percentage is greater than 100%");
            return 0;
        }
    }
    return 100;
};

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
                    ? {
                        id: action.id,
                        percent: action.percent,
                        grape: action.grape,
                        grapeId: grape.grapeId,
                        wineId: grape.wineId,
                    }
                    : grape
            ));
        case "setWineId":
            return grapes.map((grape) => ({
                ...grape,
                wineId: action.wineId,
            }));
        case "reset":
            return [];
        default:
            return grapes;
    }
};

interface IProps {
    grapes: IWineGrape[];
    dispatch: React.Dispatch<Action>;
}

export const GrapesInputs: React.FC<IProps> = ({grapes, dispatch}) => {
    const [completions, setCompletions] = React.useState<Record<string, string | null>>({});
    const logger = useLogger("GrapesInputs");

    React.useEffect(() => {
        async function fetchGrapes() {
            try {
                const rawCompletions = await getGrapes({});
                setCompletions(toDict(rawCompletions));
            } catch (e) {
                logger.logWarning(`Failed to fetch grape autocompletions: ${e}`);
            }
        }

        void fetchGrapes();
    }, [logger, setCompletions]);

    return (
        <Row>
            <Col s={ 12 }>
                <h6>Grape composition</h6>
            </Col>
            { grapes.map((grape) => (
                <GrapeInput key={ grape.grapeId }
                    id={ grape.grapeId }
                    completions={ completions }
                    grape={ grape.grape }
                    percent={ grape.percent }
                    handleDelete={ (id) => dispatch({type: "deleteGrape", id}) }
                    onChange={ (id, newGrape, percent) => dispatch({
                        type: "modifyGrape",
                        id,
                        grape: newGrape,
                        percent,
                    }) }
                />
            )) }
            <InputField classes={ ["col"] }>
                <FloatingBtn onClick={ () => dispatch({type: "addGrape"}) }
                    classes={ ["green-bg"] }
                >
                    <MaterialIcon iconName="add" />
                </FloatingBtn>
            </InputField>
        </Row>
    );
};
GrapesInputs.displayName = "GrapesInputs";
