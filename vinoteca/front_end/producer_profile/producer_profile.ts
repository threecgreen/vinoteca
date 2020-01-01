import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { ProducerProfileApp } from "./ProducerProfileApp";

declare const id: number;

onLoad(() => {
    navbar();
    render(createElement(ProducerProfileApp, {producerId: id}),
           document.getElementById("producer_profile-container"));
});
