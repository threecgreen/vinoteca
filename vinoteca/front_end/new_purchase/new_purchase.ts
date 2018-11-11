import { autocomplete, datepicker, navbar } from "../../lib/widgets";

$(() => {
    navbar();
    datepicker();
    autocomplete("store");
});
