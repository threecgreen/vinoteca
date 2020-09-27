import { RouteComponentProps } from "@reach/router";
import { ErrorHandler } from "components/ErrorHandler";
import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { WinesTable } from "components/WinesTable";
import { getWines } from "lib/api/wines";
import { useTitle } from "lib/hooks";
import { useLogger } from "lib/Logger";
import React from "react";
import { initState, reducer } from "./state";

const ShoppingListApp: React.FC<RouteComponentProps> = () => {
    const logger = useLogger("ShoppingListApp");
    useTitle("Shopping list");

    const [state, dispatch] = React.useReducer(reducer, [], initState);

    React.useEffect(() => {
        updateShoppingList();
    }, []);

    const updateShoppingList = async () => {
        const newWines = await getWines({isInShoppingList: true});
        newWines.map((wines) => dispatch({type: "setWines", wines}))
            .mapErr((error) => {
                logger.logError(`Failed to load shopping list: ${error.message}`);
                dispatch({type: "setError", error});
                return error;
            });
    }
    if (state.error.isSome()) {
        return <ErrorHandler error={ state.error.unwrap() } />;
    }
    let content;
    if (state.hasLoaded) {
        if (state.wines.length === 0) {
            content = (
                <p>Your shopping list is empty.</p>
            );
        } else {
            // TODO: add download button
            content = (
                <WinesTable wines={ state.wines } />
            );
        }
    } else {
        content = <Preloader />;
    }
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Shopping list</h3>
                    { content }
                </Col>
            </Row>
        </div>
    );
}
ShoppingListApp.displayName = "ShoppingListApp";
export default ShoppingListApp;
