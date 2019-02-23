import * as _ from "lodash";
import * as React from "react";
import { FloatingBtn } from "./FloatingBtn";
import { GrapeInput } from "./GrapeInput";
import { Col, Row } from "./Grid";
import { InputField } from "./InputField";
import { MaterialIcon } from "./MaterialIcon";

export class WineGrape {
    constructor(public id: number, public name: string, public percent?: number) {
    }
}

interface IGrapeFormAppState {
    wineGrapes: WineGrape[];
}

export class GrapeFormApp extends React.Component<{}, IGrapeFormAppState> {
    public readonly state: Readonly<IGrapeFormAppState> = { wineGrapes: [] };

    public render() {
        return <Row>
            <Col classes={ ["s12"] }>
                <h6>Grape composition</h6>
            </Col>
            { this.state.wineGrapes.map((wineGrape) => {
                return (<GrapeInput key={ wineGrape.id }
                                    id={ wineGrape.id }
                                    name={ wineGrape.name }
                                    percent={ wineGrape.percent }
                                    handleDelete={ this.handleDelete.bind(this) }
                                    onChange={ this.onChange.bind(this) } />);
            }) }
            <InputField>
                <FloatingBtn onClick={ (e) => this.handleAdd(e) }
                             classes={ ["green-bg"] }>
                    <MaterialIcon iconName="add" />
                </FloatingBtn>
            </InputField>
        </Row>;
    }

    public handleAdd(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            wineGrapes: this.state.wineGrapes.concat(this.defaultWineGrape()),
        });
    }

    public handleDelete(e: React.MouseEvent, id: number) {
        e.preventDefault();
        this.setState((state) => ({
            wineGrapes: state.wineGrapes.filter((wg) => wg.id !== id),
        }));
    }

    public onChange(id: number, name: string, percent?: string) {
        const pct = percent ? parseInt(percent || "", 10) : undefined;
        this.setState((state) => ({
            wineGrapes: state.wineGrapes.map((wg) => {
                return (wg.id === id)
                    ? new WineGrape(id, name, pct)
                    : wg;
            }),
        }));
    }

    private get maxId(): number {
        const max = _.maxBy(this.state.wineGrapes, (wg) => wg.id);
        return max ? max.id : 0;
    }

    /** Determine whether any grape has a percentage set. */
    private get hasGrapePct(): boolean {
        const len = this.state.wineGrapes.length;
        return len > 0 && this.state.wineGrapes[len - 1].percent !== undefined;
    }

    private get remainingGrapePct(): number {
        if (this.state.wineGrapes.length > 0) {
            const sum = _.sumBy(this.state.wineGrapes, (wg) => wg.percent || 0);
            // TODO: warning if greater than 100
            return sum < 100 ? 100 - sum : 0;
        }
        return 100;
    }

    private defaultWineGrape(): WineGrape {
        if (this.hasGrapePct) {
            return new WineGrape(this.maxId + 1, "", this.remainingGrapePct);
        }
        return new WineGrape(this.maxId + 1, "", undefined);
    }
}