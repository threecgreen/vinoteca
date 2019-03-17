import { createElement } from "react";
import * as ReactDOM from "react-dom";
import { GrapesApp } from "./GrapesApp";
import { navbar } from "../../lib/widgets";

$(() => {
    navbar();
    ReactDOM.render(createElement(GrapesApp), document.getElementById("grapes-app-container"));
});
