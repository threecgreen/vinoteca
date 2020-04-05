import React from "react";
import M from "materialize-css";
import { Btn } from "./Buttons";
import { IChildrenProp } from "./IProps";

interface IModalProps extends IChildrenProp {
}

export const Modal: React.FC<IModalProps> = ({children}) => {
    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    React.useEffect(() => {
        const instance = new M.Modal(ref.current);
        instance.open();
        // Returning function from useEffect will be called when the
        // component is unmounted
        return () => instance?.close()
    }, [ref]);

    return (
        <div ref={ ref } className="modal">
            { children }
        </div>
    );
}
Modal.displayName = "Modal";

export const ModalContent: React.FC<IChildrenProp & any> = ({children, ...props}) => (
    <section className="modal-content" {...props}>
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
    item: string;
    onYesClick: () => void;
    onNoClick: () => void;
}

export const DeleteModal: React.FC<IDeleteModalProps> = (props) => {
    return (
        <Modal>
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
    );
}
DeleteModal.displayName = "DeleteModal";
