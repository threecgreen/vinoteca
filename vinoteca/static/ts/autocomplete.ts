import $ from "jquery"
import "materialize-css"

/** This function assists in configuring Materialize CSS autocomplete given the
 * name of the data model. It fetches the corresponding data models from a JSON
 * endpoint.
 */
export function autocomplete(dataModel: string, limit = 5, minLength = 1): void {
    $(`#auto-${dataModel}`).autocomplete({
        // Request data model objects from JSON endpoint
        data: {},
        limit: limit,
        minLength: minLength
    })
}
