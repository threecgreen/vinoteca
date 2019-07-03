import * as React from "react";
import { Preloader } from "../../components/Preloader";
import { SpecialChars } from "../../components/SpecialChars";
import { get, put } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { IGrape } from "../../lib/RestTypes";
import { any } from "../../lib/utils";
import { GrapesList } from "./GrapesList";
import { Col, Row } from "../../components/Grid";

export class GrapeItem {
    constructor(public id: number, public name: string, public wines?: number,
            public isEditable = false) {
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
        if (!this.state) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <Row>
                    <Col s={ 12 }>
                        <h3 className="page-title">Grapes</h3>
                        <div>
                            <GrapesList grapes={this.state.grapes}
                                handleEdit={this.handleEdit.bind(this)}
                                handleSave={this.handleSave.bind(this)}
                                onChange={this.onChange.bind(this)}
                            />
                            <SpecialChars onClick={this.handleSpecialChar.bind(this)}
                                display={this.hasEditableGrapes}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    public componentDidMount() {
        get(this.getGrapesUrl())
            .then((restGrapes: IGrape[]) => {
                const grapes: GrapeItem[] = restGrapes.map(
                    (g) => new GrapeItem(g.id, g.name, g.wines),
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
                    put(this.getGrapesUrl(id), {id, name: g.name})
                        .catch((e) => {
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
                        ? new GrapeItem(g.id, g.name + char, g.wines, g.isEditable)
                        : g;
                }),
            }));
        }
    }

    private get hasEditableGrapes(): boolean {
        return any(this.state.grapes, (g: GrapeItem) => g.isEditable);
    }

    private getGrapesUrl(id?: number): string {
        return id ? `/rest/grapes/${id}/` : `/rest/grapes/`;
    }
}
