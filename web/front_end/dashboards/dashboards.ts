import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../../lib/utils";
import { navbar } from "../../lib/widgets";
import { DashboardApp } from "./DashboardApp";

onLoad(() => {
    navbar("dashboard-nav");

    render(createElement(DashboardApp),
           document.getElementById("dashboards-container"));
});
