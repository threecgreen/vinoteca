/// <reference path="../../@types/tablesorter.d.ts" />
import { createElement } from "react";
import { render } from "react-dom";
import * as $ from "jquery";
import "tablesorter";
import { navbar } from "../../lib/widgets";
import { WinesApp } from "./WinesApp";
// import "./jquery.tablesorter.pager";
// import "./jquery.tablesorter.widgets";

    // navbar("wines-nav");
    // $("select").formSelect();

    // $("table").tablesorter({
    //     theme: "materialize",
    //     widgetOptions: {
    //         filter_cssFilter: ["browser-default"],
    //         filter_ignoreCase: true,
    //         filter_reset: ".reset",
    //         filter_saveFilters: true,
    //     },
    //     widgets: ["filter"],
    //     widthFixed: true,
    // }).tablesorterPager({
    //     container: $(".ts-pager"),
    //     cssGoto: ".pagenum",
    //     removeRows: false,
    //     size: 50,
    // });

    // // 50 needs to be quoted
    // $("#pagesize-sel").val("50");

navbar("new-wine-nav");
render(createElement(WinesApp), document.getElementById("wines-app-container"));
