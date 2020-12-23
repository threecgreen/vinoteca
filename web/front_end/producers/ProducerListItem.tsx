import { FloatingBtn } from "components/Buttons";
import { MaterialIcon } from "components/MaterialIcon";
import { ProducerCell } from "components/TableCells";
import { IProducer } from "generated/rest";
import React from "react";

interface IProps {
    producer: IProducer;
    onEditClick: (id: number) => void;
    onDeleteClick: (id: number) => void;
}

export const ProducerListItem: React.FC<IProps> = ({producer, onEditClick, onDeleteClick}) => (
    <tr>
        <ProducerCell id={ producer.id }
            name={ producer.name }
        />
        <td>
            <FloatingBtn onClick={ () => onEditClick(producer.id) }
                classes={ ["small", "yellow-bg"] }
            >
                <MaterialIcon iconName="edit" />
            </FloatingBtn>
        </td>
        <td>
            <FloatingBtn onClick={ () => onDeleteClick(producer.id) }
                classes={ ["small", "red-bg"] }
            >
                <MaterialIcon iconName="delete" />
            </FloatingBtn>
        </td>
    </tr>
);
ProducerListItem.displayName = "ProducerListItem";
