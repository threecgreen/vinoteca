import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { VitiAreaProfile } from "./VitiAreaProfileApp";

declare const vitiAreaId: number;

onLoad(() => {
    navbar();
    render(createElement(VitiAreaProfile, {vitiAreaId}),
           document.getElementById("viti-area-profile-app-container"));
});
