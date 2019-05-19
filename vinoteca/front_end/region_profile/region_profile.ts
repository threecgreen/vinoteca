import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { RegionProfile } from "./RegionProfileApp";

declare const regionId: number;

$(() => {
    navbar();
    render(createElement(RegionProfile, {regionId: regionId}),
           document.getElementById("region-profile-app-container"));
});
