import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { onLoad } from "../../lib/JQueryCompat";
import { NewWineApp } from "./NewWineApp";


onLoad(() => {
    navbar("new-wine-nav");
    render(createElement(NewWineApp), document.getElementById("new-wine-app-container"));
})
