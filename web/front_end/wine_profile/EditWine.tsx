import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { IWine, IWineGrape } from "../../lib/Rest";
import { IWineData, wineInputReducer, WineInputs } from "../new_wine/WineInputs";
import { grapeReducer, GrapesInputs } from "../../components/GrapesInputs";
import { PreloaderCirc } from "../../components/Preloader";

interface IProps {
    wine: IWine;
    grapes: IWineGrape[];
    hasImage: boolean;
    onSubmit: (wine: IWineData, grapes: IWineGrape[]) => void;
    onCancel: () => void;
}

export const EditWine: React.FC<IProps> = ({wine, grapes, hasImage, onSubmit, onCancel}) => {
    const [mutableWine, wineDispatch] = React.useReducer(wineInputReducer, {
        ...wine,
        name: wine.name ?? "",
        description: wine.description ?? "",
        rating: wine.rating ?? 5,
        isRatingEnabled: wine.rating !== null,
        file: hasImage ? new File([], `${wine.id}.png`) : null,
        notes: wine.notes ?? "",
        vitiArea: wine.vitiArea ?? "",
        why: wine.why ?? "",
    });
    const [mutableGrapes, grapesDispatch] = React.useReducer(grapeReducer, grapes);

    const checkFileAndSubmit = () => {
        if (mutableWine.file && mutableWine.file.name === `${wine.id}.png`) {
            // Don't submit mock file
            onSubmit({...mutableWine, file: null}, mutableGrapes);
        }
        onSubmit(mutableWine, mutableGrapes);
    }

    return (
        <Modal>
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
                    onConfirmClick={ checkFileAndSubmit }
                    onCancelClick={ onCancel }
                />
            </ModalFooter>
        </Modal>
    );
}
EditWine.displayName = "EditWine";
