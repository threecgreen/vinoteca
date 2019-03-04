import * as Cookies from "js-cookie";
import * as React from "react";

export function CSRFToken() {
    return (
        <input itemType="hidden" name="csrfmiddlewaretoken"
               value={ Cookies.get("csrftoken") } />
    );
}
