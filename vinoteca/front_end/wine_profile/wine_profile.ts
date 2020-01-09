import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar, tabs } from "../../lib/widgets";
import { WineProfileApp } from "./WineProfileApp";

declare const id: number;

onLoad(() => {
    navbar();
    tabs();
    render(createElement(WineProfileApp, {id}),
           document.getElementById("wine_profile-container"));
});
