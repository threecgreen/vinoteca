import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/utils";
import { navbar } from "../../lib/widgets";
import { VitiAreaProfile } from "./VitiAreaProfileApp";

declare const id: number;

onLoad(() => {
    navbar();
    render(createElement(VitiAreaProfile, {vitiAreaId: id}),
           document.getElementById("viti_area_profile-container"));
});
