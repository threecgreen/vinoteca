import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { NewWineApp } from "./NewWineApp";

onLoad(() => {
    navbar("new-wine-nav");
    render(createElement(NewWineApp), document.getElementById("new_wine-container"));
});
