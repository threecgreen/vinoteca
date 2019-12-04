import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { Pagination } from "../../components/Pagination";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getWinesTable } from "../../lib/RestApi";
import { Wine } from "../../lib/RestTypes";
import { WinesTable } from "./WinesTable";
import { readCookie } from "../../lib/Cookies";

interface IState {
    wines: Wine[];
    // TODO: store these in cookie
    predicates: Map<keyof Wine, (v: any) => boolean>;
    hasLoaded: boolean;
    currentPage: number;
    winesPerPage: number;
}

export class WinesApp extends React.Component<{}, IState> {
    private readonly logger: Logger;
    private static cookieName: string = "WinesAppPredicates"

    constructor(props: {}) {
        super(props);
        this.state = {
            wines: [],
            predicates: this.deserializePredicates(readCookie(WinesApp.cookieName)) || new Map(),
            hasLoaded: false,
            currentPage: 1,
            winesPerPage: 50,
        };

        this.logger = new Logger(this.constructor.name);
    }

    private serializePredicates(): string {
        const predStrings = Array.from(this.state.predicates.entries()).map((k, predFun) => [k, predFun.toString()]);
        return JSON.stringify(predStrings);
    }

    private deserializePredicates(json: string): Map<keyof Wine, (v: any) => boolean> {
        const predicates = new Map();
        const arr: Array<[string, string]> = JSON.parse(json);
        arr.forEach((item) => {
            const [key, funStr] = item;
            predicates.set(key, eval(funStr))
        })
        return predicates;
    }

    public render() {
        if (!this.state.hasLoaded) {
            return <Preloader />;
        }
        let wines = undefined;
        if (this.state.wines.length === 0) {
            wines = (
                <h6 className="bold center-align">
                    Your inventory is current empty.
                </h6>
            );
        } else {
            wines = (
                <React.Fragment>
                    <h3 className="page-title">Wines</h3>
                    <WinesTable onFilterChange={ (c, pred) => this.onFilterChange(c, pred) }
                        onEmptyFilter={ (c) => this.onEmptyFilter(c) }
                        { ...this.state }
                    />
                    <Pagination currentPage={ this.state.currentPage }
                        pageCount={ Math.max(1,
                            Math.ceil(this.state.wines.length / this.state.winesPerPage )) }
                        onClick={ this.onPageClick.bind(this) }
                    />
                </React.Fragment>
            );
        }
        // TODO: reset filters button
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

    private onFilterChange(columnName: keyof Wine, pred: (val: any) => boolean) {
        this.setState((prevState) => {
            prevState.predicates.set(columnName, pred);
            return {
                predicates: prevState.predicates,
            };
        }, this.serializePredicates);
    }

    private onEmptyFilter(columnName: keyof Wine) {
        this.setState((prevState) => {
            prevState.predicates.delete(columnName);
            return {
                predicates: prevState.predicates,
            }
        }, this.serializePredicates)
    }

    private onResetFilters(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            predicates: new Map(),
        });
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
