import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useTitle } from "../../lib/widgets";

export const AboutApp: React.FC<RouteComponentProps> = (_props) => {
    useTitle("About");

    return (
        <div className="container">

            <h3 className="page-title">About</h3>
            <p>Vinoteca grew out of an Excel spreadsheet used to track wine purchases.</p>

            <h5>Features</h5>
            <ul className="bullets">
                <li>Wine ratings and pictures</li>
                <li>Dashboard of wine purchase statistics and charts</li>
                <li>Wine grape composition charts</li>
            </ul>

            <h5>Built with</h5>
            <ul className="bullets">
                <li><a href="https://rocket.rs" className="text-link">Rocket</a></li>
                <li><a className="text-link" href="http://materializecss.com/">Materialize <abbr title="Cascading Style Sheets">CSS</abbr></a></li>
                <li><a className="text-link" href="https://www.sqlite.org/index.html">SQLite</a></li>
                <li><a className="text-link" href="https://github.com/stevenrskelton/flag-icon">Flags by Steven Skelton</a></li>
                <li><a className="text-link" href="https://www.reddit.com/r/travel/comments/6z7cu0/loved_visiting_burgundy_right_before_harvest/">Cover photo from /u/CollideStorm</a></li>
            </ul>

            <br />
            <h4><a className="page-link"
            // @ts-ignore
             name="help">Help</a></h4>
            <h5>Adding wines</h5>
            <p>
                To add a new purchase click the new purchase button in the top navigation bar.
                If this wine is already in the system, select &ldquo;Previously Purchased&rdquo; and find the wine using the
                search utility.
                If this is the first time you&rsquo;ve purchased this wine, select &ldquo;First-time Purchase&rdquo; and enter the relevant information.
            </p>

            <h5>Viewing wines</h5>
            <p>Go to &ldquo;Wines&rdquo; to sort, filter and view wine information.</p>

            <h5>Editing wines</h5>
            <p>
                In order to edit a wine&rsquo;s information, click on any wine to go its profile page.
                Then hover over the menu button on the left side and click the pencil icon.
                Make your changes and then click &ldquo;Confirm Edits.&rdquo;
                To edit purchase details, simply click the pencil icon next to the purchase you would like to edit in the
                wine&rsquo;s &ldquo;Purchases&rdquo; table.
            </p>

            <h5>Bugs and suggestions</h5>
            <p>Send me an <a className="text-link" href="mailto:cartergr@usc.edu?subject=vinoteca">email</a>
                with any problems or bugs you encounter and any suggestions you have for improvements.</p>

            <br />

            <h4><a className="page-link"
            // @ts-ignore
            name="changelog">Changelog</a></h4>

            <h5>5.1.2</h5>
            <p>Fix nullable date input</p>

            <h5>5.1.1</h5>
            <ul className="bullets">
                <li>Color migration</li>
                <li>Add tests</li>
            </ul>

            <h5>5.1.0</h5>
            <ul className="bullets">
                <li>Complete transition to single-page app</li>
                <li>More detailed client-side logging</li>
                <li>Improved version comparison when deciding whether to update</li>
                <li>Bug fixes:
                    <ul className="bullets">
                        <li>Fix filter by name and wine type in wines table</li>
                        <li>Fix bugs involving updating wine grapes</li>
                        <li>Fix client-side logger module names</li>
                    </ul>
                </li>
            </ul>

            <h5>5.0.7</h5>
            <ul className="bullets">
                <li>Add indication of when a form is being submitted</li>
                <li>Prevent double submission of forms</li>
                <li>Add tests</li>
            </ul>

            <h5>5.0.6</h5>
            <ul className="bullets">
                <li>Fix bug where wines without a purchase woudn&rsquo;t show up in inventory</li>
                <li>Run database migrations on startup</li>
            </ul>

            <h5>5.0.5</h5>
            <ul className="bullets">
                <li>Add option to add new purchase to inventory</li>
                <li>Fix bug with configurable media directory and adding new wine images</li>
                <li>Fix out-of-bounds panic when forcing vinoteca update</li>
                <li>Prevent partial entity creation when adding a new wine</li>
                <li>Null handling:<ul className="bullets">
                    <li>Allow new purchase without date</li>
                    <li>Allow new wines without a purchase</li>
                    <li>Fix error when creating a purchase without a store</li>
                </ul></li>
            </ul>

            <h5>5.0.4</h5>
            <ul className="bullets">
                <li>Fix issue where working directory affected which config was read</li>
                <li>Update script installs <code>.deb</code></li>
            </ul>

            <h5>5.0.3</h5>
            <p>Fix null handling in inventory</p>

            <h5>5.0.2</h5>
            <ul className="bullets">
                <li>Fix missing vendors bundle</li>
                <li>Fix WSL detection for opening new tab</li>
            </ul>

            <h5>5.0.1</h5>
            <p>Fix migration and update scripts</p>

            <h5>5.0.0</h5>
            <ul className="bullets">
                <li>Move to rust
                    <ul className="bullets">
                        <li>Better performance</li>
                        <li>Better error messages and error handling</li>
                        <li>Ease and speed of updating</li>
                    </ul>
                </li>
                <li>Move remaining front-end logic to React
                    <ul className="bullets">
                        <li>Redesigned wine profiles</li>
                        <li>Incremental load dashboards</li>
                        <li>Convert front-end to single app</li>
                        <li>Consolidate special character implementations</li>
                    </ul>
                </li>
                <li>Many bug fixes</li>
            </ul>
            <h5>4.5.0</h5>
            <ul className="bullets">
                <li>New non-nullable columns:
                    <ul className="bullets">
                        <li>Producers must have a region</li>
                        <li>Wines must have a color</li>
                        <li>Wines must have a producer</li>
                        <li>Wines must have a wine type</li>
                    </ul>
                </li>
                <li>Rest filters button for wines page</li>
                <li>Fix lingering turquoise color in some buttons</li>
                <li>Export inventory to CSV</li>
                <li>Webpack optimizations resulting in 80% reduction in bundle size</li>
            </ul>
            <h5>4.4.4</h5>
            <ul className="bullets">
                <li>Extend sort by wine type then name to inventory</li>
                <li>Fix build failure</li>
                <li>Fix null wine type in wines table</li>
            </ul>

            <h5>4.4.3</h5>
            <ul className="bullets">
                <li>Fix grapes not displaying in edit wine page</li>
                <li>Fix displaying grape composition pie chart when some grapes had percentages, but others did not</li>
                <li>Sort by wine type then name in wines page</li>
                <li>Fix navbar in inventory and wines pages</li>
                <li>Fix button spacing in new wine page</li>
                <li>Add preloader to inventory</li>
                <li>Closer spacing of Fixed Action Buttons for easier use</li>
            </ul>

            <h5>4.4.2</h5>
            <ul className="bullets">
                <li>Fix missing name from new wine form</li>
                <li>Special characters for purchase inputs in new wine form</li>
                <li>Add ability to delete producer if there are no associated wines</li>
            </ul>

            <h5>4.4.1</h5>
            <ul className="bullets">
                <li>Fix empty color error in wines table</li>
            </ul>

            <h5>4.4.0</h5>
            <ul className="bullets">
                <li>Improved wines table</li>
                <li>Improved new wine entry</li>
                <li>Special characters button insert at current cursor position</li>
                <li>Tweaked wine profile to make wine photo smaller</li>
                <li>Upgrade to Python 3.8</li>
                <li>Remove JQuery dependency</li>
            </ul>

            <h5>4.3.4</h5>
            <ul className="bullets">
                <li>Fix adding and editing grapes</li>
                <li>Fix last purchase price missing from inventory</li>
                <li>Fix last purchase date off by one day in inventory</li>
                <li>Change default inventory sorting to newest first</li>
                <li>Fix unwanted auto percentages when adding grapes when previous grapes did not have a percentage specified</li>
            </ul>

            <h5>4.3.3</h5>
            <ul className="bullets">
                <li>Minor scripts bug fixes</li>
            </ul>

            <h5>4.3.2</h5>
            <ul className="bullets">
                <li>Update webpack dependency &lsquo;terser&rsquo; that was causing NPM build error</li>
                <li>Add ability to force full upgrade with <code>-f</code> flag</li>
            </ul>

            <h5>4.3.1</h5>
            <ul className="bullets">
                <li>Tweak some dashboards to use bottles purchased count instead of the number of distinct varieties</li>
                <li>Upgrade dependencies</li>
                <li>Run on 0.0.0.0:8000 instead of 127.0.0.0:8000</li>
            </ul>

            <h5>4.3.0</h5>
            <ul className="bullets">
                <li>Viticultural area editing</li>
                <li>Wine type editing</li>
                <li>Table sorting:<ul>
                    <li>Inventory</li>
                    <li>Grapes list</li>
                </ul></li>
                <li>Update region profile</li>
                <li>Add Croatian flag</li>
            </ul>

            <h5>4.2.1</h5>
            <p>Fix top producers sorting.</p>

            <h5>4.2.0</h5>
            <ul className="bullets">
                <li>Improve producer viewing and editing</li>
                <li>Improve UI and methodology for search of existing wines</li>
                <li>Remove unused <code>is_us</code> field from regions</li>
                <li>Improve safety and data isolation of tests</li>
                <li>&ldquo;Prune&rdquo; unused NPM packages during update</li>
                <li>Add progress bar to webpack build</li>
                <li>Dependencies:
                    <ul className="bullets">
                        <li>Update dependencies</li>
                        <li>Reduce JQuery dependence</li>
                        <li>Remove lodash, ts-node, path and moment dependencies</li>
                    </ul>
                </li>
            </ul>

            <h5>4.1.5</h5>
            <ul className="bullets">
                <li>Make install script agnostic of working directory</li>
            </ul>

            <h5>4.1.4</h5>
            <ul className="bullets">
                <li>Add miniconda to PATH in install script</li>
                <li>Improve find conda logic</li>
            </ul>

            <h5>4.1.3</h5>
            <ul className="bullets">
                <li>Improve logging</li>
                <li>Improve JavaScript build reliability</li>
                <li>Fix bug where configuration was overwritten while running tests</li>
                <li>Fix tests when using non-default media path</li>
                <li>Fix warning when running <code>vinoteca update</code></li>
                <li>Fix incorrect info in Purchases by Year dashboard</li>
            </ul>

            <h5>4.1.2</h5>
            <ul className="bullets">
                <li>Fix issue setting database path</li>
            </ul>

            <h5>4.1.1</h5>
            <ul className="bullets">
                <li>Fix bug with configuring alternative paths</li>
                <li>Improve speed of update if there are no changes</li>
            </ul>

            <h5>4.1.0</h5>
            <ul className="bullets">
                <li>New page for editing grape names</li>
                <li>Improved error-handling:</li>
                <li>Continue color standardization</li>
                <ul className="bullets">
                    <li>Client-side logging</li>
                    <li>Error toasts</li>
                </ul>
                <li>Bug fixes:</li>
                <ul className="bullets">
                    <li>Fixed autocomplete for grape entry for wines</li>
                </ul>
            </ul>

            <h5>4.0.4</h5>
            <ul className="bullets">
                <li>Fix date format error when editing purchases</li>
                <li>Fix missing last purchased date for wines with no vintage</li>
                <li>Fix overlapping text bug in forms</li>
                <li>Fix bug where default vintage had reverted to current year</li>
                <li>Don&rsquo;t show &lsquo;None&rsquo; when wine has no region</li>
                <li>Remove dead code</li>
                <li>Stop modifying <code>package.lock.json</code> during install and update</li>
                <li>Update dependencies</li>
            </ul>

            <h5>4.0.3</h5>
            <ul className="bullets">
                <li>Re-add homepage image</li>
                <li>Fix &ldquo;Unique constraint failed&rdquo; error when editing a producer</li>
                <li>Fix leading and trailing whitespace in form inputs</li>
                <li>Fix missing varieties in &ldquo;Top Viticultural Areas&rdquo; dashboard</li>
                <li>Fix bug where wine page title was incorrect</li>
            </ul>

            <h5>4.0.2</h5>
            <ul className="bullets">
                <li>Change inventory price column from average price to last purchase price</li>
                <li>Fix bug where wines purchased at an unknown date would be shown as having an &lsquo;NV&rsquo; vintage in the inventory table</li>
                <li>Attempt to resolve node in conda environment issues</li>
            </ul>

            <h5>4.0.1</h5>
            <ul className="bullets">
                <li>Fix issue creating vinoteca executable</li>
                <li>Fix issue configuring database path</li>
                <li>Fix key error during image saving</li>
            </ul>

            <h5>4.0.0</h5>
            <ul className="bullets">
                <li>Improved grape entry and editing</li>
                <li>More logical links</li>
                <li>Add logging for better debugging</li>
                <li>Code deduplication for increased visual consistency</li>
                <li>Database location, log file location and the wine images folder are now configurable</li>
                <li>Add ã and õ as available special characters</li>
                <li>Increas delay before opening browser</li>
                <li>Add price column to inventory</li>
                <li>Internal restructuring and refactoring</li>
                <li>Improve null checks in TypeScript</li>
                <li>Add automated <abbr title="Continuous Integration">CI</abbr> testing</li>
                <li>Bug fixes:<ul className="bullets">
                    <li>Fix bug where wines table filters were not being saved</li>
                    <li>Fix navbar on smaller screens</li>
                    <li>Fix installation of CLI (no longer modify user&rsquo;s PATH</li>
                    <li>Fix erroneously enabled grape composition pie chart</li>
                    <li>Fix &ldquo;image referenced before assignment&rdquo; error</li>
                    <li>Fix calculation of remaining grape percentage when first grape has blank percentage</li>
                </ul></li>
                <li>Dependency changes: <ul className="bullets">
                    <li>Rely more on conda to be more platform agnostic and improve install and update times.</li>
                    <li>Add <abbr title="Node Package Manager">NPM</abbr> OS-level dependency</li>
                    <li>Add WebPack dependency</li>
                    <li>Upgraded Materialize CSS to 1.0.0</li>
                </ul></li>
            </ul>

            <h5>3.0.6</h5>
            <ul className="bullets">
                <li>
                    Fix handling of <abbr title="Portable Network Graphics">PNG</abbr>
                    images that don&rsquo;t have <abbr title="Exchangeable Image File ">EXIF</abbr> data
                </li>
                <li>Upgrade Django version</li>
            </ul>

            <h5>3.0.5</h5>
            <ul className="bullets">
                <li>Fix bug where uploaded JPG files would be improperly rotated.<ul className="bullets">
                    <li>Retroactive fix to come later</li>
                </ul></li>
                <li>
                    Fix bug where adding a wine made by an existing producer but from a
                    new viticultural area would cause a database error
                </li>
            </ul>

            <h5>3.0.4</h5>
            <ul className="bullets">
                <li>Fix bug where search results would sometimes contain duplicates</li>
                <li>Fix pytest warnings</li>
                <li>Improve formatting consistency</li>
                <li>Improve inventory table spacing</li>
                <li>Update dependencies</li>
            </ul>

            <h5>3.0.3</h5>
            <ul className="bullets">
                <li>Fix incorrect parsing of arguments in <code>scripts/run.sh</code></li>
            </ul>

            <h5>3.0.2</h5>
            <ul className="bullets">
                <li>Hide Purchases by Year Chart if there&rsquo;s fewer than two years of data</li>
                <li>Add additional default values for dashboards</li>
            </ul>

            <h5>3.0.1</h5>
            <ul className="bullets">
                <li>Fix bug in shell script with finding Python environment when it is already activated</li>
                <li>Fix bug with missing default values for dashboard graphs</li>
            </ul>

            <h5>3.0.0</h5>
            <ul className="bullets">
                <li>New Dashboards:<ul className="bullets">
                    <li>Top Grape Varieties</li>
                    <li>Top Viticultural Areas</li>
                    <li>Recent Purchases Graph</li>
                    <li>Yearly Purchases Graph</li>
                </ul></li>
                <li>Calculate remaining grape percentage when adding a wine&rsquo;s grape composition</li>
                <li>Improve <abbr title="Command Line Interface">CLI</abbr> by adding optional arguments and better portability</li>
                <li><abbr title="Object-Relational Mapping">ORM</abbr></li>
                <li>Reduce number of colors in color palette</li>
                <li>Stop testing using production database</li>
                <li>Add <code>django-js-error-hook</code> for client-side JavaScript error logging</li>
                <li>Extensive internal refactoring of database and data model names (not backwards compatible)</li>
                <li>Convert basic <abbr title="Structured Query Language">SQL</abbr> queries to Django&rsquo;s</li>
                <li>Add code linting.</li>
                <li>Bug fixes:<ul className="bullets">
                    <li>Link top regions dashboard to the region profiles</li>
                    <li>Fix bugs associated with having no or few wines stored in vinoteca<ul className="bullets">
                        <li>Fix bug where new databases contained no colors</li>
                    </ul></li>
                    <li>Fix bug where rating slider didn&rsquo;t work when editing a wine</li>
                    <li>Fix bug where rating for new wine wasn&rsquo;t stored</li>
                    <li>Fix memo/why naming inconsistency</li>
                    <li>Fix float formatting in &ldquo;Top Purchase Types&rdquo; dashboard</li>
                    <li>Fix incorrect disabled wine composition pie chart</li>
                    <li>Remove silent errors</li>
                </ul></li>
            </ul>

            <h5>2.2.0</h5>
            <ul className="bullets">
                <li>Add grape composition charts</li>
                <li>Add dashboard charts</li>
                <li>Add missing characters with caron (ˇ) to special characters buttons list</li>
                <li>Improve error messages and error handling in scripts</li>
                <li>Bug fixes:<ul className="bullets">
                    <li>Fix &ldquo;Add to Inventory&rdquo; button bug</li>
                    <li>Partially fix Bordeaux viticultural area duplication problem</li>
                    <li>Fix bug where there was no option to add to inventory for a new purchase of an existing wine</li>
                    <li>Fix bug where &ldquo;None&rdquo; would sometimes appear in wine names</li>
                    <li>Fix bug with viticultural area duplication and removed existing duplicates</li>
                    <li>Fix bug with viticultural areas with no valid region</li>
                    <li>Fix bug where negative wine prices were possible</li>
                    <li>Fix bug where impossible to edit or add purchases to a wine with no previous purchases</li>
                </ul></li>
            </ul>

            <h5>2.1.1</h5>
            <ul className="bullets">
                <li>Fixed bug with &ldquo;None&rdquo; in producer profile wine table</li>
                <li>Fixed missing imports</li>
            </ul>

            <h5>2.1.0</h5>
            <ul className="bullets">
                <li>Fix image rotation bug</li>
                <li>Fix bug where there was no option to edit wines that had no purchases</li>
                <li>Finish deprecating Additional; remaining information has been moved to description</li>
                <li>Add a Wine Type Profile</li>
                <li>Remove a duplicate Viticultural Area</li>
                <li>Migrate to Typescript</li>
            </ul>

            <h5>2.0.2</h5>
            <ul className="bullets">
                <li>Stop Chrome autocomplete from competing with site autocomplete for forms</li>
                <li>Update &ldquo;New/Previously Purchased&rdquo; search</li>
                <li>Add link to Help page in footer</li>
                <li>Increase use of horizontal space</li>
                <li>Fix bug where lack of rating in New Wine form caused error</li>
                <li>Fix typo where wine color was still referred to as &ldquo;Type&rdquo;</li>
            </ul>

            <h5>2.0.1</h5>
            <ul className="bullets">
                <li>Fix editing of wine&rsquo;s additional field, but removed ability to add it after it is gone</li>
                <li>Remove deprecated JavaScript syntax</li>
            </ul>

            <h5>2.0.0</h5>
            <ul className="bullets">
                <li>Add name column to wines for further differentiation</li>
                <li>Add buttons for inserting special characters on relevant pages</li>
                <li>Fix issue where editing a wine&rsquo;s viticultural area failed</li>
                <li>Fix bug where wine images wouldn&rsquo;t display</li>
                <li>Fix bug with wines/producers without a region</li>
                <li>Formatting and appearance changes:<ul className="bullets">
                    <li>Add year to purchase date in inventory table</li>
                    <li>Fix where inventory minus button would never appear in wine profiles</li>
                    <li>Fix bug where edit producer cancel button didn&rsquo;t work</li>
                    <li>Fix reset button color in wines table</li>
                    <li>Fix recent purchases dashboard float formatting</li>
                    <li>Standardize dashboard naming</li>
                    <li>Reduce spacing in inventory and country profile tables</li></ul></li>
                <li>Database now managed by Django for easier future schema changes</li>
                <li>Add Changelog link</li>
            </ul>

            <h5>1.3.0</h5>
            <ul className="bullets">
                <li>vinoteca now remembers previous filters in the wine table</li>
                <li>Fix bug preventing adding grape composition data to extant wines</li>
                <li>Fix bug where viticultural area in wine profiles always appeared as first viticultural area created for a producer&rsquo;s region</li>
                <li>Fix bug where the store was not displayed in recent purchases in wine profiles</li>
            </ul>

            <h5>1.2.2</h5>
            <p>Further reduce whitespace in wine table and increase default number of display wines.</p>

            <h5>1.2.1</h5>
            <ul className="bullets">
                <li>Change adding vinoteca alias to option in update script</li>
                <li>Fix bug where update.sh wouldn&rsquo;t pull changes from GitHub</li>
            </ul>

            <h5>1.2.0</h5>
            <ul className="bullets">
                <li>Reformat wine profile pages<ul className="bullets">
                    <li>Add wine memo option</li>
                    <li>Retitle &ldquo;Purchases&rdquo; to &ldquo;Purchases&rdquo;</li>
                    <li>Add vintage of most recent purchase</li>
                </ul></li>
                <li>Reformat wine table <ul className="bullets">
                    <li>Add inventory, vintage and viticultural area columns</li>
                    <li>Remove notes column</li>
                    <li>Reduce line spacing</li>
                </ul></li>
                <li>Fix editing of grape composition for already existing wines</li>
                <li>Fix bug where there was no way to access editing a producer</li>
                <li>Recolor many links</li>
                <li>Update schema file</li>
                <li>Date format standardization</li>
            </ul>

            <h5>1.1.0</h5>
            <ul className="bullets">
                <li>Add ability to delete wines and purchases</li>
                <li>Add ability to edit producers</li>
                <li>Default vintage year is now two years before the current year</li>
                <li>Add tests for image upload, and purchase and wine editing</li>
                <li>Order purchases by reverse chronological order</li>
                <li>Improve <abbr title="Command Line Interface">CLI</abbr></li>
                <li>Fix bug where adding non-vintage wines would cause an exception</li>
                <li>Fix bug where grapes with no composition percentage would cause an exception</li>
                <li>Remove Django debug toolbar dependency</li>
            </ul>

            <h5>1.0.2</h5>
            <ul className="bullets">
                <li>Update dependencies</li>
            </ul>

            <h5>1.0.1</h5>
            <ul className="bullets">
                <li>Replace notes with grape composition in wines table</li>
                <li>Scripts now stop if any step fails</li>
                <li>Add more testing</li>
            </ul>

            <h5>1.0.0</h5>
            <p>
                Several major additions and changes were made to the point where it felt usable enough to be the initial
                full version.
            </p>
            <ul className="bullets">
                <li>Add Viticultural Area field</li>
                <li>Add Grape composition table field (many-to-many relationship)</li>
                <li>Inventory<ul className="bullets">
                    <li>Add the inventory field to each wine</li>
                    <li>Add view where the wine inventory can be viewed and easily edited</li>
                </ul></li>
                <li>Country profile improvements<ul className="bullets">
                    <li>Add flags to profile</li>
                    <li>Add viticultural areas table</li>
                </ul></li>
                <li>
                    Improve sorting and filtering with JQuery tablesorter plug-in, removing the need for separate
                    sorting and filtering views
                </li>
                <li>Add vector flags for <abbr title="United States">U.S.</abbr> states</li>
                <li>Add the ability to upload images for each wine</li>
                <li>Wine Color renamed to Type and Wine Type renamed to Name</li>
                <li>
                    Deprecate Additional, as its purpose was no longer needed with dedicated fields for grape
                    composition and viticultural area
                </li>
                <li>Store address field was removed as it was found to be unneeded</li>
                <li>Improve test coverage</li>
                <li>Add migrate line to the update script</li>
            </ul>

            <h5>0.3.0</h5>
            <ul className="bullets">
                <li>Add country/region profile</li>
                <li>Add wine producer profile</li>
                <li>Fix issue with automatic browser opening on Windows</li>
                <li>Upgrade to Django 2.0</li>
            </ul>

            <h5>0.2.1</h5>
            <p>Minor improvements to the scripts including automatically opening the browser when running <code>run.sh</code></p>

            <h5>0.2.0</h5>
            <ul className="bullets">
                <li>Fix unit conversions</li>
                <li>Standardize button colors</li>
                <li>Update About page</li>
                <li>Add logo to navbar</li>
                <li>Better table highlighting</li>
            </ul>
        </div>
    );
}
