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
// TODO: include grapes
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

    return (
        <Modal>
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
                    onConfirmClick={ () => onSubmit(state) }
                    onCancelClick={ onCancel }
                />
            </ModalFooter>
        </Modal>
    );
}
EditWine.displayName = EditWine.name;
