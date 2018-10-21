import { navbar, autocomplete } from "../../lib/widgets";
import { specialChars } from "../../lib/special_chars";

$(() => {
    navbar();
    specialChars();
    autocomplete("region");
})
