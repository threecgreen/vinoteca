import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useTitle, useDescription } from "../../lib/widgets";
import { MaterialIcon } from "../../components/MaterialIcon";

export const AboutApp: React.FC<RouteComponentProps> = (_props) => {
    useTitle("About");
    useDescription("History of vinoteca, changelog, and links to submit bugs and suggestions");

    const addr = "crtrgreen" + "@" + "gmail" + ".com";
    const subject = "vinoteca bug";

    return (
        <div className="container">
            <h3 className="page-title">About</h3>

            <div className="section">
                <p>
                    Vinoteca grew out of an Excel spreadsheet used to track wine purchases into
                    a Django web app with the SQLite database synced between machines using OneDrive.
                </p>

                <h5>Features</h5>
                <ul className="bullets">
                    <li>Wine ratings and pictures</li>
                    <li>Dashboard of wine purchase statistics and charts</li>
                    <li>Wine grape composition charts</li>
                </ul>

                <h5>Built with</h5>
                <ul className="bullets">
                    <li><a href="https://rocket.rs" className="text-link">Rocket</a></li>
                    <li><a className="text-link" href="https://www.postgresql.org/">PostgreSQL</a></li>
                    <li><a href="https://reactjs.org" className="text-link">React</a></li>
                    <li><a className="text-link" href="https://materializecss.com/">Materialize CSS</a></li>
                    <li><a className="text-link" href="https://github.com/stevenrskelton/flag-icon">Flags by Steven Skelton</a></li>
                    <li><a className="text-link" href="https://www.reddit.com/r/travel/comments/6z7cu0/loved_visiting_burgundy_right_before_harvest/">Cover photo from /u/CollideStorm</a></li>
                </ul>
            </div>

            <div className="section">
                <h4>
                    <a className="page-link"
                        // @ts-ignore
                        name="changelog"
                    >
                        <MaterialIcon iconName="track_changes" />
                        &nbsp;
                        Changelog
                    </a>
                </h4>

                <h5>6.0.0</h5>
                <p>Initial hosted version. All previous versions ran locally.</p>
            </div>

            <div className="section">
                <h4>
                    <a className="page-link"
                        // @ts-ignore
                        name="bugs-and-suggestions"
                    >
                        <MaterialIcon iconName="bug_report" />
                        &nbsp;
                        Bugs and suggestions
                    </a>
                </h4>
                <p>
                    Send me an <a className="text-link" href={ `mailto:${addr}?subject=${subject}` }>email</a> with
                    any issues or bugs you encounter and any suggestions for improvements.
                </p>

                <h6>Webmail links</h6>
                <ul>
                    <li>
                        <div className="valign-wrapper">
                            <span><img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" alt="Gmail logo"/></span>
                            &nbsp;
                            <a className="text-link"
                                href={ `https://mail.google.com/mail/?view=cm&fs=1&to=${addr}&su=${subject}` }
                            >
                                Gmail
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="valign-wrapper">
                            <span><img src="https://outlook-1.cdn.office.net/owamail/2020061402.02/resources/images/favicons/mail-seen.ico" alt="Outlook logo"/></span>
                            &nbsp;
                            <a className="text-link"
                                href={ `https://outlook.live.com/owa/?to=${addr}&subject=${subject}&path=/mail/action/compose` }
                            >
                                Outlook
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
