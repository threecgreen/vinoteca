import React from "react";
import M from "materialize-css";
import { Btn } from "./Buttons";
import { IChildrenProp } from "./IProps";

interface IModalProps extends IChildrenProp {
    display: boolean;
}

export const Modal: React.FC<IModalProps> = ({children, display}) => {
    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    React.useEffect(() => {
        const instance = new M.Modal(ref.current);
        if (display) {
            instance.open();
            // Returning function from useEffect will be called when the
            // component is unmounted
            return () => instance.close()
        } else {
            instance.close();
        }
    }, [display, ref]);

    if (display) {
        return (
            <div ref={ ref } className="modal">
                { children }
            </div>
        )
    }
    return null;
}
Modal.displayName = "Modal";

export const ModalContent: React.FC<IChildrenProp> = ({children}) => (
    <section className="modal-content">
        { children }
    </section>
)
ModalContent.displayName = "ModalContent";

export const ModalFooter: React.FC<IChildrenProp> = ({children}) => (
    <section className="modal-footer">
        { children }
    </section>
)
ModalFooter.displayName = "ModalFooter";

interface IDeleteModalProps {
    display: boolean;
    item: string;
    onYesClick: () => void;
    onNoClick: () => void;
}

export const DeleteModal: React.FC<IDeleteModalProps> = (props) => {
    return (
        <Modal display={ props.display }>
            <ModalContent>
                <h5>Are you sure you want to delete this { props.item }?</h5>
                <p>This action is irreversible.</p>
            </ModalContent>
            <ModalFooter>
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
            </ModalFooter>
        </Modal>
    )
}
DeleteModal.displayName = "DeleteModal";
