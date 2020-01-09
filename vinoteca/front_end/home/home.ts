import { navbar, tabs } from "../../lib/widgets";
import { onLoad } from "../../lib/JQueryCompat";
import { render } from "react-dom";
import { createElement } from "react";
import { HomeApp } from "./HomeApp";

onLoad(() => {
    navbar();
    tabs();
    render(createElement(HomeApp),
           document.getElementById("home-container"));
});
