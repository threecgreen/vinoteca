import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { Pagination } from "../../components/Pagination";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getWinesTable } from "../../lib/RestApi";
import { Wine } from "../../lib/RestTypes";
import { WinesTable } from "./WinesTable";
import { createCookie, deleteCookie, readCookie } from "../../lib/Cookies";
import FilterExpr from "../../lib/FilterExpr";
import { Btn } from "../../components/Buttons";

interface IState {
    wines: Wine[];
    predicates: Map<keyof Wine, FilterExpr>;
    filterTexts: Map<keyof Wine, string>;
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

    private deserializeFilters(json: string): Map<keyof Wine, string> {
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

    private parseAllFilters(filterTexts: Map<keyof Wine, string>): Map<keyof Wine, FilterExpr> {
        const predicates = new Map<keyof Wine, FilterExpr>()
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
                        onClick={ (_) => { location.href = "/wines/new/"; } }
                    >
                    </Btn>
                </>
            );
        } else {
            wines = (
                <>
                    <h3 className="page-title">Wines</h3>
                    <Btn classes={ ["yellow-bg"] }
                        onClick={ (e) => this.onResetFilters(e) }
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
            const wines = await getWinesTable();
            this.setState({
                wines: wines.map((w) => new Wine(w)),
                hasLoaded: true
            });
        } catch (err) {
            this.logger.logError(err);
        }
    }

    private get filteredWines() {
        // Reduce predicates
        const combinedPred = [...this.state.predicates.entries()]
            .reduceRight((prevVal, [column, filterExpr]) => {
                return (wine: Wine) => prevVal(wine) && filterExpr.call(wine[column]!);
            }, (_: Wine) => true);
        return this.state.wines.filter(combinedPred);
    }


    private onFilterChange(columnName: keyof Wine, text: string) {
        this.setState((prevState) => {
            prevState.predicates.set(columnName, FilterExpr.parse(text));
            prevState.filterTexts.set(columnName, text);
            return {
                predicates: prevState.predicates,
                filterTexts: prevState.filterTexts,
            };
        }, this.serializeFilters);
    }

    private onResetFilters(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            predicates: new Map(),
            filterTexts: new Map(),
        }, this.serializeFilters);
    }

    private onPageClick(e: React.MouseEvent, pageNumber: number) {
        if (pageNumber === this.state.currentPage) {
            e.preventDefault();
            return;
        }
        this.setState({
            currentPage: pageNumber,
        });
    }
}
