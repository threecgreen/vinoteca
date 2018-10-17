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
        },
        widgets: ["filter"],
        widthFixed: true,
    }).tablesorterPager({
        container: $(".ts-pager"),
        cssGoto: ".pagenum",
        removeRows: false,
        size: 50,
    }).on("filterInit", () => {
        // check that storage ulility is loaded
        if ($.tablesorter.storage) {
            // get saved filters
            const f = $.tablesorter.storage(this, "tablesorter-filters") || [];
            $(this).trigger("search", [f]);
        }
    }).on("filterEnd", function() {
        if ($.tablesorter.storage) {
            // save current filters
            const f = $(this).find(".tablesorter-filter").map(() => {
                return ($(this).val()) as string || "";
            }).get();
            $.tablesorter.storage(this, "tablesorter-filters", f);
        }
    });

    // 50 needs to be quoted
    $("#pagesize-sel").val("50");
});
