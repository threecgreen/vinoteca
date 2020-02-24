import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../lib/utils";
import { navbar } from "../lib/widgets";
import { Router } from "./Router";

onLoad(() => {
    navbar();
    render(createElement(Router), document.getElementById("app-container"));
});
