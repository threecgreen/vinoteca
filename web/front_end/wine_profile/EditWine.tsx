import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { grapeReducer, GrapesInputs } from "../../components/model_inputs/GrapesInputs";
import { IWine, IWineGrape } from "../../lib/api/Rest";
import { handleSubmit } from "../../lib/utils";
import { IWineData, wineInputReducer, WineInputs } from "../new_wine/WineInputs";

interface IProps {
    wine: IWine;
    grapes: IWineGrape[];
    onSubmit: (wine: IWineData, grapes: IWineGrape[]) => Promise<void>;
    onCancel: () => void;
}

export const EditWine: React.FC<IProps> = ({wine, grapes, onSubmit, onCancel}) => {
    const [mutableWine, wineDispatch] = React.useReducer(wineInputReducer, {
        ...wine,
        name: wine.name ?? "",
        description: wine.description ?? "",
        rating: wine.rating ?? 5,
        isRatingEnabled: wine.rating !== null,
        file: wine.image ? new File([], wine.image) : null,
        notes: wine.notes ?? "",
        vitiArea: wine.vitiArea ?? "",
        why: wine.why ?? "",
    });
    const [mutableGrapes, grapesDispatch] = React.useReducer(grapeReducer, grapes);

    const [isSaving, setIsSaving] = React.useState(false);

    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <Row>
                    <h4>Edit wine</h4>
                    <WineInputs data={ mutableWine }
                        dispatch={ wineDispatch }
                    />
                    <GrapesInputs grapes={ mutableGrapes }
                        dispatch={ grapesDispatch }
                    />
                </Row>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ handleSubmit(() => onSubmit(mutableWine, mutableGrapes), setIsSaving) }
                    onCancelClick={ onCancel }
                    isSaving={ isSaving }
                    confirmDisabled={ !wine.producer || !wine.region || !wine.wineType }
                />
            </ModalFooter>
        </Modal>
    );
}
EditWine.displayName = "EditWine";
