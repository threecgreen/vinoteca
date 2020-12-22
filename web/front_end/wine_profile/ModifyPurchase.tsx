import { CancelOrConfirmBtns } from "components/Buttons";
import { Row } from "components/Grid";
import { Modal, ModalContent, ModalFooter } from "components/Modal";
import {
    IPurchaseData, purchaseInputReducer, PurchaseInputs
} from "components/model_inputs/PurchaseInputs";
import { IPurchase } from "generated/rest";
import { handleSubmit } from "lib/component_utils";
import React from "react";

interface IProps {
    title: string;
    purchase: IPurchase;
    displayInventoryBtn: boolean;
    onSubmit: (purchase: IPurchaseData) => Promise<void>;
    onCancel: () => void;
}

/**
 * Used for creating a new purchase as well as editing an existing one, hence
 * `ModifyPurchase`
 */
export const ModifyPurchase: React.FC<IProps> = ({
    title, purchase, displayInventoryBtn, onCancel, onSubmit,
}) => {
    const [state, dispatch] = React.useReducer(purchaseInputReducer, {
        ...purchase,
        store: purchase.store ?? "",
        memo: purchase.memo ?? "",
        shouldAddToInventory: displayInventoryBtn ? true : null,
    });
    const [isSaving, setIsSaving] = React.useState(false);

    // TODO: Use form?
    return (
        <Modal onClose={ onCancel }>
            <ModalContent>
                <Row>
                    <h4>{ title }</h4>
                    <PurchaseInputs displayInventoryBtn={ displayInventoryBtn }
                        data={ state }
                        dispatch={ dispatch }
                    />
                </Row>
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ handleSubmit(() => onSubmit(state), setIsSaving) }
                    onCancelClick={ onCancel }
                    isSaving={ isSaving }
                />
            </ModalFooter>
        </Modal>
    );
};
ModifyPurchase.displayName = "ModifyPurchase";
