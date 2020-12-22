import { DeleteModal } from "components/Modal";
import React from "react";

interface IProps {
    recordName: string;
    name: string;
    onYesClick: () => void;
    onNoClick: () => void;
}

export const DeleteRecord: React.FC<IProps> = ({recordName, name, ...props}) => (
    <DeleteModal
        item={ `${recordName}, ${name}`}
        { ...props }
    />
);
DeleteRecord.displayName = "DeleteRecord";
