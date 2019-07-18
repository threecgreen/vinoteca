import * as React from "react";
import { readCookie } from "../lib/Cookies";

export function CSRFToken() {
    return (
        <input itemType="hidden"
            name="csrfmiddlewaretoken"
            value={ readCookie("csrftoken") }
        />
    );
}
