import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { ProducerProfileApp } from "./ProducerProfileApp";

declare const producerId: number;

onLoad(() => {
    navbar();
    render(createElement(ProducerProfileApp, {producerId}),
           document.getElementById("producer-profile-app-container"));
});
