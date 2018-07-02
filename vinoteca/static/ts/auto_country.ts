import $ from "jquery"
import "materialize-css"

$(function () {
    $('#auto-country').autocomplete({
        data: {
            // {% for country in countries %}
            //     "{{ country.name }}": null,
            // {% endfor %}
        },
        limit: 5,
        minLength: 1
    })
});
