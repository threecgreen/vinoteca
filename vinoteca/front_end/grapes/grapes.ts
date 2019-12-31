import { createElement } from "react";
import * as ReactDOM from "react-dom";
import { navbar } from "../../lib/widgets";
import { GrapesApp } from "./GrapesApp";

navbar();
ReactDOM.render(createElement(GrapesApp), document.getElementById("grapes-container"));
