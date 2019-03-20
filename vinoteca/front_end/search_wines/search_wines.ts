// import { clearTable, resetFormBtn, toggleRegion,
//          updateVitiAreaSelections } from "../../lib/new_wines";
// import { IWineSearchResultsJSON } from "../../lib/rest";
// import SpecialCharController from "../../lib/SpecialCharController";
import { createElement } from "react";
import { render } from "react-dom";
import { navbar } from "../../lib/widgets";
import { SearchWinesApp } from "./SearchWinesApp";

/** Update search results when search fields change */
// function liveWineSearch(searchParams: JQuery<HTMLInputElement>,
//                         wineType: JQuery<HTMLInputElement>, color: JQuery<HTMLInputElement>,
//                         producer: JQuery<HTMLInputElement>, region: JQuery<HTMLInputElement>,
//                         vitiArea: JQuery<HTMLInputElement>) {
//     $(searchParams).on("change", (event) => {
//         // Prevents double event
//         if (!event.originalEvent) {
//             return;
//         }
//         // Send search fields data to Search Wines URL
//         $.get("/wines/search/json-results/", {
//               color: color.val(),
//               producer: producer.val(),
//               region: region.val(),
//               viti_area: vitiArea.val(),
//               wine_type: wineType.val(),
//         }, (searchResultsJSON: IWineSearchResultsJSON) => {
//             clearTable();
//             // Update search results with received data
//             // Greater than 1 because spaces count in length
//             if (searchResultsJSON.results.length > 1) {
//                 $("table tbody").append(searchResultsJSON.results);
//                 $("table").show();
//             } else {
//                 $("#no-results").show();
//             }
//         });
//     });
// }

$(() => {
    navbar("new-wine-nav");
    render(createElement(SearchWinesApp), document.getElementById("search-wines-app-container"));
    // const producer: JQuery<HTMLInputElement> = $("#auto-producer");
    // const region: JQuery<HTMLInputElement> = $("#auto-region");

    // toggleRegion($("#auto-producer"), region);
    // updateVitiAreaSelections(region, $("#auto-viti-area"));
    // $("select").formSelect();
    // // Search fields autocomplete
    // autocomplete("wine-type");
    // autocomplete("producer");
    // autocomplete("region");
    // autocomplete("viti-area");

    // const specCharCtl = new SpecialCharController();
    // resetFormBtn();
    // $(region).prop("disabled", false);
    // liveWineSearch($(".input-field"), $("#auto-wine-type"), $("#color"), producer,
    //                region, $("#auto-viti-area"));
});
