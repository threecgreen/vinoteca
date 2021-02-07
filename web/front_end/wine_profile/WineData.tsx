import { Link } from "@reach/router";
import { FloatingBtn } from "components/Buttons";
import { MaterialIcon } from "components/MaterialIcon";
import { capitalizeFirstLetter } from "lib/utils";
import React from "react";
import { InventoryChange } from "../inventory/InventoryTable";
import { CheckboxInput } from "components/inputs/CheckboxInput";
import { Row } from "components/Grid";

interface IProps {
    color: string;
    description: string | null;
    inventory: number;
    lastPurchaseVintage: number | null;
    notes: string | null;
    rating: number | null;
    vitiArea: string | null;
    vitiAreaId: number | null;
    why: string | null;
    isInShoppingList: boolean;
    // Handlers
    onInventoryChange: (changeType: InventoryChange) => void;
    onIsInShoppingListChange: (isInShoppingList: boolean) => void;
}

export const WineData: React.FC<IProps> = (props) => (
    <>
        <h5 className="light">{ capitalizeFirstLetter(props.color) }</h5>
        <h5 className="inline-h">
            <b>Inventory: </b> { props.inventory }
        </h5>
        &nbsp;
        <FloatingBtn classes={ ["green-bg", "btn-floating-small"] }
            onClick={ () => props.onInventoryChange(InventoryChange.Increase) }
        >
            <MaterialIcon iconName="add_circle" />
        </FloatingBtn>
        &thinsp;
        <FloatingBtn classes={ ["red-bg", "btn-floating-small"] }
            onClick={ () => props.onInventoryChange(InventoryChange.Decrease) }
        >
            <MaterialIcon iconName="do_not_disturb_on" />
        </FloatingBtn>
        { props.lastPurchaseVintage &&
            <h5><b>Vintage:</b> { props.lastPurchaseVintage }</h5>
        }
        { props.vitiArea && props.vitiAreaId &&
            <h5>
                <b>Viticultural area:</b>&nbsp;
                <Link to={ `/viti-areas/${props.vitiAreaId}` }
                    className="text-link"
                >
                    { props.vitiArea }
                </Link>
            </h5>
        }
        { props.description &&
            <h6><b>Description:</b> { props.description }</h6>
        }
        { props.rating &&
            <h6><b>Rating:</b> { props.rating.toFixed(0) }</h6>
        }
        { props.notes &&
            <h6><b>Notes:</b> { props.notes }</h6>
        }
        { props.why &&
            <h6><b>Why:</b> { props.why }</h6>
        }
        <Row>
            <CheckboxInput isChecked={ props.isInShoppingList }
                name="is-in-shopping-list"
                text="In shopping list"
                onClick={ props.onIsInShoppingListChange }
            />
        </Row>
    </>
);
WineData.displayName = "WineData";
