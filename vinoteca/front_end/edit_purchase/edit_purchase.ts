import { autocomplete, datepicker } from "../../lib/widgets";

declare const purchaseDate: number;

$(() => {
    datepicker(purchaseDate);
    autocomplete("store");
    $("#delete-purchase-modal").modal();
});
