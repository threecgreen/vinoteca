import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { SearchWinesApp } from "./SearchWinesApp";

navbar("new-wine-nav");
render(createElement(SearchWinesApp), document.getElementById("search_wines-container"));
