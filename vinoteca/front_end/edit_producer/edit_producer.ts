import SpecialCharController from "../../lib/SpecialCharController";
import { autocomplete, navbar } from "../../lib/widgets";

$(() => {
    navbar();
    const controller = new SpecialCharController();
    autocomplete("region");
});
