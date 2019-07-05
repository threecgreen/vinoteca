import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { VitiAreaProfile } from "./VitiAreaProfileApp";

declare const vitiAreaId: number;

$(() => {
    navbar();
    render(createElement(VitiAreaProfile, {vitiAreaId}),
           document.getElementById("viti-area-profile-app-container"));
});
