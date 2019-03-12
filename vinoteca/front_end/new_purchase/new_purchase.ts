import { createElement } from "react";
import * as ReactDOM from "react-dom";
import { PurchaseInputs } from "../../components/PurchaseInputs";
import { autocomplete, datepicker, navbar } from "../../lib/widgets";

$(() => {
    navbar("new-wine-nav");
    // datepicker();
    // autocomplete("store");
    ReactDOM.render(createElement(PurchaseInputs, {displayInventoryBtn: true}),
                    document.getElementById("new-purchase-container"));
});
