import { specialChars } from "../../lib/special_chars";
import { autocomplete, navbar } from "../../lib/widgets";

$(() => {
    navbar();
    specialChars();
    autocomplete("region");
});
