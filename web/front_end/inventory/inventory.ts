import { createElement } from "react";
import * as ReactDOM from "react-dom";
import { navbar } from "../../lib/widgets";
import { InventoryApp } from "./InventoryApp";

navbar("inventory-nav");
ReactDOM.render(createElement(InventoryApp), document.getElementById("inventory-container"));
