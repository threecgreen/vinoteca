/// <reference path="../../@types/tablesorter.d.ts" />

import "materialize-css";
import "tablesorter";
import { navbar } from "../../lib/widgets";
import "./jquery.tablesorter.pager";
import "./jquery.tablesorter.widgets";

$(() => {
    navbar();
    $("select").formSelect();

    $("table").tablesorter({
        theme: "materialize",
        widgetOptions: {
            filter_cssFilter: ["browser-default"],
            filter_ignoreCase: true,
            filter_reset: ".reset",
            filter_saveFilter: true,
        },
        widgets: ["filter"],
        widthFixed: true,
    }).tablesorterPager({
        container: $(".ts-pager"),
        cssGoto: ".pagenum",
        removeRows: false,
        size: 50,
    });

    // 50 needs to be quoted
    $("#pagesize-sel").val("50");
});
