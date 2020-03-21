import { createElement } from "react";
import { render } from "react-dom";
import { onLoad } from "../lib/utils";
import { Footer } from "./Footer";
import { Top } from "./Navbar";
import { Router } from "./Router";

onLoad(() => {
    render(createElement(Top), document.getElementById("navbar-container"));
    render(createElement(Router), document.getElementById("app-container"));
    render(createElement(Footer), document.getElementById("footer-container"));
});
