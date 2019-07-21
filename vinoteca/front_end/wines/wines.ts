import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { WinesApp } from "./WinesApp";

navbar("new-wine-nav");
render(createElement(WinesApp), document.getElementById("wines-app-container"));
