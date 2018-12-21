import { autocomplete, datepicker, navbar } from "../../lib/widgets";

$(() => {
    navbar("new-wine-nav");
    datepicker();
    autocomplete("store");
});
