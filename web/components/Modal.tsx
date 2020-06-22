import M from "materialize-css";
import React from "react";
import { Btn } from "./Buttons";
import { IChildrenProp } from "./IProps";

interface IModalProps extends IChildrenProp {
    onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({children, onClose}) => {
    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    React.useEffect(() => {
        const instance = new M.Modal(ref.current, {onCloseEnd: onClose});
        instance.open();
        // Returning function from useEffect will be called when the
        // component is unmounted
        return () => instance?.close();
    }, [ref]);

    return (
        <div ref={ ref } className="modal">
            { children }
        </div>
    );
};
Modal.displayName = "Modal";

export const ModalContent: React.FC<IChildrenProp & any> = ({children, ...props}) => (
    <section className="modal-content" {...props}>
        { children }
    </section>
);
ModalContent.displayName = "ModalContent";

export const ModalFooter: React.FC<IChildrenProp> = ({children}) => (
    <section className="modal-footer">
        { children }
    </section>
);
ModalFooter.displayName = "ModalFooter";

interface IDeleteModalProps {
    item: string;
    onYesClick: () => void;
    onNoClick: () => void;
}

export const DeleteModal: React.FC<IDeleteModalProps> = ({item, onYesClick, onNoClick}) => {
    return (
        <Modal onClose={ onNoClick }>
            <ModalContent>
                <h5>Are you sure you want to delete this { item }?</h5>
                <p>This action is irreversible.</p>
            </ModalContent>
            <ModalFooter>
                <Btn classes={ ["modal-action", "red-bg"] }
                    onClick={ onYesClick }
                >
                    Yes, delete this { item }
                </Btn>
                <Btn  classes={ ["modal-action", "modal-close", "green-bg"]}
                    onClick={ onNoClick }
                >
                    No
                </Btn>
            </ModalFooter>
        </Modal>
    );
};
DeleteModal.displayName = "DeleteModal";
