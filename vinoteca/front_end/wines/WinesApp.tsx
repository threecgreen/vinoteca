import React from "react";
import { Btn } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { Pagination } from "../../components/Pagination";
import { Preloader } from "../../components/Preloader";
import { WinesTable } from "../../components/WinesTable";
import { createCookie, deleteCookie, readCookie } from "../../lib/Cookies";
import FilterExpr from "../../lib/FilterExpr";
import Logger from "../../lib/Logger";
import { IWine } from "../../lib/Rest";
import { getWines } from "../../lib/RestApi";
import { redirect } from "../../lib/utils";

interface IState {
    wines: IWine[];
    predicates: Map<keyof IWine, FilterExpr>;
    filterTexts: Map<keyof IWine, string>;
    hasLoaded: boolean;
    currentPage: number;
    winesPerPage: number;
}

export class WinesApp extends React.Component<{}, IState> {
    private readonly logger: Logger;
    private static cookieName: string = "WinesAppPredicates";

    public constructor(props: {}) {
        super(props);

        this.logger = new Logger(this.constructor.name);

        const filterTexts = this.deserializeFilters(readCookie(WinesApp.cookieName))
        this.state = {
            wines: [],
            filterTexts: filterTexts,
            predicates: this.parseAllFilters(filterTexts),
            hasLoaded: false,
            currentPage: 1,
            winesPerPage: 50,
        };
    }

    private serializeFilters() {
        if (this.state.filterTexts) {
            const predStrings = Array.from(this.state.filterTexts.entries());
            this.logger.logInfo(`Filter texts: '${predStrings}'`)
            const serializedPredicates = JSON.stringify(predStrings);
            this.logger.logDebug(`Updating cookie to '${serializedPredicates}'`);
            deleteCookie(WinesApp.cookieName);
            createCookie(WinesApp.cookieName, serializedPredicates, 90);
        } else {
            deleteCookie(WinesApp.cookieName);
        }
    }

    private deserializeFilters(json: string): Map<keyof IWine, string> {
        if (!json) {
            return new Map();
        }
        this.logger.logDebug(`Deserializing JSON: ${json}`);
        const predicates = new Map();
        try {
            const arr: Array<[string, string]> = JSON.parse(json);
            arr.forEach((item) => {
                const [key, text] = item;
                predicates.set(key, text);
            });
            return predicates;
        } catch (err) {
            deleteCookie(WinesApp.cookieName);
            this.logger.logWarning(`Failed reading filters cookie with error: ${err}`);
            return new Map();
        }
    }

    private parseAllFilters(filterTexts: Map<keyof IWine, string>): Map<keyof IWine, FilterExpr> {
        const predicates = new Map<keyof IWine, FilterExpr>()
        for (const entry of filterTexts.entries()) {
            predicates.set(entry[0], FilterExpr.parse(entry[1]));
        }
        return predicates;
    }

    public render() {
        if (!this.state.hasLoaded) {
            return <Preloader />;
        }
        let wines = undefined;
        if (this.state.wines.length === 0) {
            wines = (
                <>

                    <h6 className="bold center-align">
                        You haven&rsquo;t entered any wines yet.
                    </h6>
                    <Btn classes={ ["green-bg"] }
                        onClick={ () => redirect("/wines/new/") }
                    >
                        Add a new wine
                    </Btn>
                </>
            );
        } else {
            wines = (
                <>
                    <h3 className="page-title">Wines</h3>
                    <Btn classes={ ["yellow-bg"] }
                        onClick={ this.onResetFilters.bind(this) }
                    >
                        Reset Filters
                    </Btn>
                    <WinesTable onFilterChange={ (c, text) => this.onFilterChange(c, text) }
                        wines={ this.filteredWines }
                        filterTexts={ this.state.filterTexts }
                        currentPage={ this.state.currentPage }
                        winesPerPage={ this.state.winesPerPage }
                    />
                    <Pagination currentPage={ this.state.currentPage }
                        pageCount={ Math.max(1,
                            Math.ceil(this.filteredWines.length / this.state.winesPerPage )) }
                        onClick={ this.onPageClick.bind(this) }
                    />
                </>
            );
        }
        return (
            <div className="container">
                <Row>
                    <Col s={ 12 }>
                        { wines }
                    </Col>
                </Row>
            </div>
        );
    }

    public async componentDidMount() {
        try {
            const wines = await getWines({});
            this.setState({
                wines,
                hasLoaded: true
            });
        } catch {
            this.logger.logError("Failed to get wines");
        }
    }

    private get filteredWines() {
        // Reduce predicates
        const combinedPred = [...this.state.predicates.entries()]
            .reduceRight((prevVal, [column, filterExpr]) => {
                return (wine) => prevVal(wine) && filterExpr.call(wine[column]!);
            }, (_: IWine) => true);
        return this.state.wines.filter(combinedPred);
    }


    private onFilterChange(columnName: keyof IWine, text: string) {
        this.setState((prevState) => {
            prevState.predicates.set(columnName, FilterExpr.parse(text));
            prevState.filterTexts.set(columnName, text);
            return {
                predicates: prevState.predicates,
                filterTexts: prevState.filterTexts,
            };
        }, this.serializeFilters);
    }

    private onResetFilters() {
        this.setState({
            predicates: new Map(),
            filterTexts: new Map(),
        }, this.serializeFilters);
    }

    private onPageClick(pageNumber: number) {
        if (pageNumber === this.state.currentPage) {
            return;
        }
        this.setState({
            currentPage: pageNumber,
        });
    }
}
