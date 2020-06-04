import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useTitle } from "../../lib/widgets";

export const AboutApp: React.FC<RouteComponentProps> = (_props) => {
    useTitle("About");

    return (
        <div className="container">
            <h3 className="page-title">About</h3>

            <section>
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
            </section>

            <section>
                <h4><a className="page-link"
                // @ts-ignore
                name="bugs-and-suggestions">Bugs and suggestions</a></h4>
                <p>
                    Send me an <a className="text-link" href="mailto:cartergr@usc.edu?subject=vinoteca">email</a> with
                    any issues or bugs you encounter and any suggestions for improvements.
                </p>
            </section>

            <section>
                <h4><a className="page-link"
                // @ts-ignore
                name="changelog">Changelog</a></h4>

                <h5>6.0.0</h5>
                <p>Initial hosted version. All previous versions ran locally.</p>
            </section>
        </div>
    );
}
