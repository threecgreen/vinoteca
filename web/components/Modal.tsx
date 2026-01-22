import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment } from "react";
import { Btn } from "./Buttons";
import { IChildrenProp } from "./IProps";

interface IModalProps extends IChildrenProp {
    onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({children, onClose}) => {
    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-sm bg-white shadow-xl transition-all">
                                { children }
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
Modal.displayName = "Modal";

export const ModalContent: React.FC<IChildrenProp> = ({children, ...props}) => (
    <section className="p-6" {...props}>
        { children }
    </section>
);
ModalContent.displayName = "ModalContent";

export const ModalFooter: React.FC<IChildrenProp> = ({children}) => (
    <section className="flex justify-end gap-2 p-4 border-t border-gray-200">
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
                <h5 className="text-lg font-medium">Are you sure you want to delete this { item }?</h5>
                <p className="mt-2 text-gray-600">This action is irreversible.</p>
            </ModalContent>
            <ModalFooter>
                <Btn classes={ ["red-bg"] }
                    onClick={ onYesClick }
                >
                    Yes, delete this { item }
                </Btn>
                <Btn classes={ ["green-bg"] }
                    onClick={ onNoClick }
                >
                    No
                </Btn>
            </ModalFooter>
        </Modal>
    );
};
DeleteModal.displayName = "DeleteModal";
