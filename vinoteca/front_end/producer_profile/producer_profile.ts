import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { ProducerProfileApp } from "./ProducerProfileApp";

declare const producerId: number;

$(() => {
    navbar();
    render(createElement(ProducerProfileApp, {producerId}),
           document.getElementById("producer-profile-app-container"));
});
