import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { WineTypeProfileApp } from "./WineTypeProfileApp";

declare const id: number;

onLoad(() => {
    navbar();
    render(createElement(WineTypeProfileApp, {wineTypeId: id}),
           document.getElementById("wine_type_profile-container"));
});
