import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { InventoryChange } from "../inventory/InventoryTable";
import { MaterialIcon } from "../../components/MaterialIcon";
import { capitalizeFirstLetter } from "../../lib/utils";

interface IProps {
    color: string;
    description: string | null;
    inventory: number;
    mostRecentVintage: number | null;
    notes: string | null;
    rating: number | null;
    vitiArea: string | null;
    vitiAreaId: number | null;
    why: string | null;
    // Handlers
    onInventoryChange: (changeType: InventoryChange) => void;
}

export const WineData: React.FC<IProps> = (props) => {
    const onInventoryChange = (event: React.MouseEvent, inventoryChange: InventoryChange) => {
        event.preventDefault();
        props.onInventoryChange(inventoryChange);
    }

    return (
        <>
            <h5 className="light">{ capitalizeFirstLetter(props.color) }</h5>
            <h5 className="inline-h">
                <b>Inventory: </b> { props.inventory }
            </h5>
            &thinsp;
            <FloatingBtn classes={ ["green-bg", "btn-small"] }
                onClick={ (e) => onInventoryChange(e, InventoryChange.Increase) }
            >
                <MaterialIcon iconName="add_circle" />
            </FloatingBtn>
            <FloatingBtn classes={ ["red-bg", "btn-small"] }
                onClick={ (e) => onInventoryChange(e, InventoryChange.Decrease) }
            >
                <MaterialIcon iconName="do_not_disturb_on" />
            </FloatingBtn>
            { props.description &&
                <h6><b>Description:</b> { props.description }</h6>
            }
            {/* TODO: Float formatting */}
            { props.rating &&
                <h6><b>Rating:</b> { props.rating }</h6>
            }
            { props.notes &&
                <h6><b>Notes:</b> { props.notes }</h6>
            }
            { props.why &&
                <h6><b>Why:</b> { props.why }</h6>
            }
        </>
    );
}
WineData.displayName = "WineData";
