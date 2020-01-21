import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { IPurchaseData, purchaseInputReducer, PurchaseInputs } from "../../components/PurchaseInputs";
import { IPurchase } from "../../lib/Rest";

interface IProps {
    purchase: IPurchase;
    onSubmit: (editedPurchase: IPurchaseData) => void;
    onCancel: () => void;
}

export const EditPurchase: React.FC<IProps> = ({purchase, onCancel, onSubmit}) => {
    const [state, dispatch] = React.useReducer(purchaseInputReducer, {
        ...purchase,
        store: purchase.store ?? "",
        memo: purchase.memo ?? "",
        shouldAddToInventory: null
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
                    <h4>Edit purchase</h4>
                    <PurchaseInputs displayInventoryBtn={ false }
                        data={ state }
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
    );
}
EditPurchase.displayName = "EditPurchase";
