/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="tablesorter.d.ts" />

/** Set up a tablesorted with paging and cached filter settings. */
$(function () {
    $("table").tablesorter({
        theme: "materialize",
        widthFixed: true,
        widgets: ["filter"],
        widgetOptions: {
            filter_reset: ".reset",
            filter_ignoreCase: true,
            filter_cssFilter: ["browser-default"]
        }
    }).tablesorterPager({
        container: $(".ts-pager"),
        cssGoto: ".pagenum",
        removeRows: false,
        size: 100
    }).on("filterInit", function () {
        // check that storage ulility is loaded
        if ($.tablesorter.storage) {
            // get saved filters
            let f = $.tablesorter.storage(this, "tablesorter-filters") || [];
            $(this).trigger("search", [f]);
        }
    }).on("filterEnd", function () {
        if ($.tablesorter.storage) {
            // save current filters
            let f = $(this).find(".tablesorter-filter").map(function () {
                return <string>($(this).val()) || "";
            }).get();
            $.tablesorter.storage(this, "tablesorter-filters", f)
        }
    })
});