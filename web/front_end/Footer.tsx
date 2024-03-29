import { Link } from "@gatsbyjs/reach-router";
import { MOBILE_CUTOFF } from "components/constants";
import { useUser } from "components/context/UserContext";
import { useViewport } from "components/context/ViewportContext";
import { VERSION } from "generated/constants";
import React from "react";

export const Footer: React.FC = (_) => {
    const thisYear = new Date().getFullYear();
    const { width } = useViewport();
    const user = useUser();

    return (
        <footer className="page-footer pink darken-4 footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text brand-logo">vinoteca</h5>
                        <ul>
                            <li>
                                <Link className="footer-link"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-link"
                                    to="/about/changelog"
                                >
                                    Changelog
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-link"
                                    to="/about#bugs-and-suggestions"
                                >
                                    Report a bug
                                </Link>
                            </li>
                        </ul>
                    </div>
                    { user && <div className="col l6 s12">
                        <h5 className="white-text">List views</h5>
                        <p className="grey-text text-lighten-4">
                            Simple views for more direct access to your data.
                        </p>
                        <ul>
                            <li>
                                <Link to="/grapes"
                                    className="footer-link"
                                >
                                    Grapes
                                </Link>
                            </li>
                            <li>
                                <Link to="/producers"
                                    className="footer-link"
                                >
                                    Producers
                                </Link>
                            </li>
                        </ul>
                    </div> }
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col s12 l4">
                            <p>© { thisYear } Carter Green</p>
                        </div>
                        <div className="col s12 l4">
                            <p className={ width > MOBILE_CUTOFF ? "center" : undefined }>
                                This software and its source code are distributed under the MIT
                                License.
                            </p>
                        </div>
                        <div className="col s12 l4">
                            <p className={ `${width > MOBILE_CUTOFF
                                    ? "right"
                                    : undefined} no-indent` }
                            >
                                Version { VERSION }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
Footer.displayName = "Footer";
