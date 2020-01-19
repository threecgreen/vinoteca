import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/utils";
import { navbar } from "../../lib/widgets";
import { WineProfileApp } from "./WineProfileApp";

declare const id: number;

onLoad(() => {
    navbar();
    render(createElement(WineProfileApp, {id}),
           document.getElementById("wine_profile-container"));
});
