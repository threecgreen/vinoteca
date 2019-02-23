import * as _ from "lodash";
import * as React from "react";
import { get, put } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IRESTObject } from "../lib/rest";
import { GrapesList } from "./GrapesList";
import { Preloader } from "./Preloader";
import { SpecialChars } from "./SpecialChars";

export class GrapeItem {
    constructor(public id: number, public name: string, public isEditable = false) {
    }
}

interface IGrapesAppState {
    grapes: GrapeItem[];
    // Keep track of id of last active grape name input for special characters
    lastActiveId?: number;
    logger: Logger;
}

export class GrapesApp extends React.Component<{}, IGrapesAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            grapes: [],
            lastActiveId: undefined,
            logger: new Logger(this.constructor.name),
        };
    }

    public render() {
        if (this.state) {
            return <div>
                <GrapesList grapes={this.state.grapes}
                            handleEdit={this.handleEdit.bind(this)}
                            handleSave={this.handleSave.bind(this)}
                            onChange={this.onChange.bind(this)} />
                <SpecialChars onClick={this.handleSpecialChar.bind(this)}
                              display={this.hasEditableGrapes} />
                <span className="clear" />
            </div>;
        } else {
            return <Preloader />;
        }
    }

    public componentDidMount() {
        get(this.getGrapesUrl())
            .then((restGrapes: IRESTObject[]) => {
                const grapes: GrapeItem[] = restGrapes.map(
                    (g) => new GrapeItem(g.id, g.name),
                );
                this.setState({ grapes });
            });
    }

    public onChange(id: number, name: string) {
        this.setState((state) => ({
            grapes: state.grapes.map((g) => {
                if (g.id === id) {
                    g.name = name;
                }
                return g;
            }),
        }));
    }

    /** Updates state to reflect that a grape is editable. */
    public handleEdit(e: React.MouseEvent, id: number) {
        e.preventDefault();
        let lastActiveId: number;
        this.setState((state) => ({
            grapes: state.grapes.map((g) => {
                if (g.id === id) {
                    g.isEditable = true;
                    lastActiveId = g.id;
                }
                return g;
            }),
            lastActiveId,
        }));
    }

    public handleSave(e: React.MouseEvent, id: number) {
        e.preventDefault();
        this.setState((state) => {
            let lastActiveId = state.lastActiveId;
            const grapes = state.grapes.map((g) => {
                if (g.id === id) {
                    g.isEditable = false;
                    lastActiveId = lastActiveId === id ? undefined : lastActiveId;
                    put(
                        this.getGrapesUrl(id),
                        {id, name: g.name},
                    ).catch((e) => {
                        state.logger.logError(
                            `Failed to save grape change for grape with id ${id}`
                            + ` and error message ${e.message}`,
                        );
                    });
                }
                return g;
            });
            return {
                grapes,
                lastActiveId,
            };
        });
    }

    public handleSpecialChar(e: React.MouseEvent, char: string) {
        e.preventDefault();
        if (this.state.lastActiveId) {
            this.setState((state) => ({
                grapes: state.grapes.map((g) => {
                    return g.id === state.lastActiveId
                        ? new GrapeItem(g.id, g.name + char, g.isEditable)
                        : g;
                }),
            }));
        }
    }

    private get hasEditableGrapes(): boolean {
        return _.some(this.state.grapes, (g: GrapeItem) => g.isEditable);
    }

    private getGrapesUrl(id?: number): string {
        return id ? `/rest/grapes/${id}/` : `/rest/grapes/`;
    }
}