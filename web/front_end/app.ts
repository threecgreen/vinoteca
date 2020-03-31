import { createElement } from "react";
import { render } from "react-dom";
import { onError, onLoad } from "../lib/utils";
import { Router } from "./Router";

onLoad(() => {
    window.onerror = onError;
    render(createElement(Router), document.getElementById("app-container"));
});
