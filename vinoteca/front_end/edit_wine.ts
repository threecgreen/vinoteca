// import "materialize-css";
// import { showNextGrapeInput, toggleRating, toggleRegion,
//          updateVitiAreaSelections } from "../lib/new_wines";
// import { autocomplete } from "../lib/widgets";

// const region = $("#auto-region");

// $(() => {
//     $("select").material_select();
//     autocomplete("wine-type");
//     autocomplete("producer");
//     toggleRegion($('#auto-producer'), region, "{% url "REST Region" %}", "{% url "Get Producers JSON" %}");
//     autocomplete("region");
//     {% if rating %}
//         toggleRating($("#has-rating")[0], $("#rating")[0], true);
//     {% else %}
//         toggleRating($("#has-rating")[0], $("#rating")[0], false);
//     {% endif %}
//     updateVitiAreaSelections(region, $('#auto-viti-area'), "{% url "REST Viti Area" %}");
//     showNextGrapeInput($(".grape-btn"));
// });
// {# Gave weird error when in same document ready function #}
// $(function () {
//     autocomplete("grape", 5, 1, "[id^=auto-grape-]");
//     {# Run first for initial region #}
//     $(region).trigger("change");
// })