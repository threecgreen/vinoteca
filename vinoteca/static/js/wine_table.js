/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="tablesorter.d.ts" />
var _this = this;
/** Set up a tablesorted with paging and cached filter settings. */
$(function () {
    $("table").tablesorter({
        theme: "materialize",
        widgetOptions: {
            filter_cssFilter: ["browser-default"],
            filter_ignoreCase: true,
            filter_reset: ".reset"
        },
        widgets: ["filter"],
        widthFixed: true
    }).tablesorterPager({
        container: $(".ts-pager"),
        cssGoto: ".pagenum",
        removeRows: false,
        size: 100
    }).on("filterInit", function () {
        // check that storage ulility is loaded
        if ($.tablesorter.storage) {
            // get saved filters
            var f = $.tablesorter.storage(_this, "tablesorter-filters") || [];
            $(_this).trigger("search", [f]);
        }
    }).on("filterEnd", function () {
        var _this = this;
        if ($.tablesorter.storage) {
            // save current filters
            var f = $(this).find(".tablesorter-filter").map(function () {
                return ($(_this).val()) || "";
            }).get();
            $.tablesorter.storage(this, "tablesorter-filters", f);
        }
    });
});
//# sourceMappingURL=wine_table.js.map