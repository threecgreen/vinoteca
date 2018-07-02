import $ from "jquery"
import "materialize-css"

export function autocomplete(dataModel: string, limit = 5, minLength = 1): void {
    $(`#auto-${dataModel}`).autocomplete({
        // Request data model objects from JSON endpoint
        data: {},
        limit: limit,
        minLength: minLength
    })
}
