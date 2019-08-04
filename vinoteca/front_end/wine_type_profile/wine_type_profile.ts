import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { WineTypeProfileApp } from "./WineTypeProfileApp";
import { onLoad } from "../../lib/JQueryCompat";

declare const wineTypeId: number;

onLoad(() => {
    navbar();
    render(createElement(WineTypeProfileApp, {wineTypeId}),
           document.getElementById("wine-type-profile-app-container"));
});
