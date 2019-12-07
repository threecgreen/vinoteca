import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { WineTypeProfileApp } from "./WineTypeProfileApp";

declare const wineTypeId: number;

onLoad(() => {
    navbar();
    render(createElement(WineTypeProfileApp, {wineTypeId}),
           document.getElementById("wine-type-profile-app-container"));
});
