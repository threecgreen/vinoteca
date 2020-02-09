import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/utils";
import { navbar } from "../../lib/widgets";
import { RegionProfile } from "./RegionProfileApp";

declare const id: number;

onLoad(() => {
    navbar();
    render(createElement(RegionProfile, {regionId: id}),
           document.getElementById("region_profile-container"));
});
