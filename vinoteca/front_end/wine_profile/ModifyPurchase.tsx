import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { Modal, ModalContent, ModalFooter } from "../../components/Modal";
import { IPurchaseData, purchaseInputReducer, PurchaseInputs } from "../../components/PurchaseInputs";
import { IPurchase } from "../../lib/Rest";

interface IProps {
    title: string;
    purchase: IPurchase;
    onSubmit: (purchase: IPurchaseData) => void;
    onCancel: () => void;
}

/**
 * Used for creating a new purchase as well as editing an existing one, hence
 * `ModifyPurchase`
 */
export const ModifyPurchase: React.FC<IProps> = ({title, purchase, onCancel, onSubmit}) => {
    const [state, dispatch] = React.useReducer(purchaseInputReducer, {
        ...purchase,
        store: purchase.store ?? "",
        memo: purchase.memo ?? "",
        shouldAddToInventory: null
    });

    return (
        <Modal display>
            <ModalContent>
                <Row>
                    <h4>{ title }</h4>
                    <PurchaseInputs displayInventoryBtn={ false }
                        data={ state }
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
ModifyPurchase.displayName = "ModifyPurchase";
