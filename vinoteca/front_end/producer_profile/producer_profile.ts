import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { ProducerProfileApp } from "./ProducerProfileApp";
import { onLoad } from "../../lib/JQueryCompat";

declare const producerId: number;

onLoad(() => {
    navbar();
    render(createElement(ProducerProfileApp, {producerId}),
           document.getElementById("producer-profile-app-container"));
});
