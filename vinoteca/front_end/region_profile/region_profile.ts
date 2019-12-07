import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/JQueryCompat";
import { navbar } from "../../lib/widgets";
import { RegionProfile } from "./RegionProfileApp";

declare const regionId: number;

onLoad(() => {
    navbar();
    render(createElement(RegionProfile, {regionId}),
           document.getElementById("region-profile-app-container"));
});
