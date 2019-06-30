import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { WineTypeProfileApp } from "./WineTypeProfileApp";

declare const wineTypeId: number;

$(() => {
    navbar();
    render(createElement(WineTypeProfileApp, {wineTypeId}),
           document.getElementById("wine-type-profile-app-container"));
});
