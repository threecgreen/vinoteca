import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { IWine } from "../../lib/Rest";
import { IWineData, wineInputReducer, WineInputs } from "../new_wine/WineInputs";

interface IProps {
    wine: IWine;
    onSubmit: (wine: IWineData) => void;
    onCancel: () => void;
}

// TODO: include file
export const EditWine: React.FC<IProps> = ({wine, onSubmit, onCancel}) => {
    const [state, dispatch] = React.useReducer(wineInputReducer, {
        ...wine,
        name: wine.name ?? "",
        description: wine.description ?? "",
        rating: wine.rating ?? 5,
        isRatingEnabled: wine.rating !== null,
        file: null,
        notes: wine.notes ?? "",
        vitiArea: wine.vitiArea ?? "",
        why: wine.why ?? "",
    });

    const onConfirmClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onSubmit(state);
    }

    const onCancelClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onCancel();
    }

    return (
        <Modal display>
            <ModalContent>
                <Row>
                    <h4>Edit wine</h4>
                    <WineInputs data={ state }
                        dispatch={ dispatch }
                    />
                </Row>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onConfirmClick }
                    onCancelClick={ onCancelClick }
                />
            </ModalFooter>
        </Modal>
    )
}
EditWine.displayName = EditWine.name;
