import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/utils";
import { navbar } from "../../lib/widgets";
import { HomeApp } from "./HomeApp";

onLoad(() => {
    navbar();
    render(createElement(HomeApp),
           document.getElementById("home-container"));
});
