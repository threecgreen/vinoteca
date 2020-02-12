import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/utils";
import { navbar } from "../../lib/widgets";
import { HomeApp } from "./HomeApp";
import { Router } from "./Router";

onLoad(() => {
    navbar();
    render(createElement(Router), document.getElementById("home-container"))
    // render(createElement(HomeApp),
    //        document.getElementById("home-container"));
});
