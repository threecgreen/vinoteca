// Library defaults first so styles.css overrides them
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { installOverscrollColor } from "lib/overscrollColor";
import { installStaleChunkReload } from "lib/staleChunkReload";
import { onError, onLoad } from "lib/utils";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./Router";

onLoad(() => {
    window.onerror = onError;
    installStaleChunkReload();
    installOverscrollColor();
    const elem = document.getElementById("app-container");
    if (!elem) {
        throw new Error("Failed to find root element for app.");
    }
    const root = createRoot(elem);
    root.render(<StrictMode><Router /></StrictMode> );
});
