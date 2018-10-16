import "tablesorter";

/** Set up a tablesorted with paging and cached filter settings. */
$(() => {
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
        size: 100,
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
});
