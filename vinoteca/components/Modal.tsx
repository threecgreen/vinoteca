import React from "react";
import { Btn } from "./Buttons";
import { IChildrenProp } from "./IProps";

interface IModalProps extends IChildrenProp {
    display: boolean;
}

export const Modal: React.FC<IModalProps> = (props) => {
    // // TODO: use ref
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         modal("#vinoteca-modal");
    //     }, 200);
    // });

    if (props.display) {
        return (
            <div>
                { props.children }
            </div>
        )
    }
    return null;
}
Modal.displayName = "Modal";

interface IDeleteModalProps {
    display: boolean;
    item: string;
    onYesClick: (e: React.MouseEvent) => void;
    onNoClick: (e: React.MouseEvent) => void;
}

export const DeleteModal: React.FC<IDeleteModalProps> = (props) => {
    return (
        <Modal display={ props.display }>
            <section className="modal-content">
                <h5>Are you sure you want to delete this { props.item }?</h5>
                <p>This action is irreversible.</p>
            </section>
            <section className="modal-footer">
                <Btn classes={ ["modal-action", "red-bg"] }
                    onClick={ props.onYesClick }
                >
                    Yes, delete this { props.item }
                </Btn>
                <Btn  classes={ ["modal-action", "modal-close", "green-bg"]}
                    onClick={ props.onNoClick }
                >
                    No
                </Btn>
            </section>
        </Modal>
    )
}
DeleteModal.displayName = "DeleteModal";
