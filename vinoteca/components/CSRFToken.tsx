import * as React from "react";
import { readCookie } from "../lib/Cookies";

export const CSRFToken: React.FC =  () => {
    return (
        <input itemType="hidden"
            style={ {display: "none"} }
            name="csrfmiddlewaretoken"
            defaultValue={ readCookie("csrftoken") }
        />
    );
}
CSRFToken.displayName = "CSRFToken";
