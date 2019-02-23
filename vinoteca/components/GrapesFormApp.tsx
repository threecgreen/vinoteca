import * as _ from "lodash";
import * as React from "react";
import { autocomplete } from "../lib/widgets";
import { Col } from "./Col";
import { FloatingBtn } from "./FloatingBtn";
import { GrapeInput } from "./GrapeInput";
import { InputField } from "./InputField";
import { MaterialIcon } from "./MaterialIcon";
import { Row } from "./Row";

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
                                    handleDelete={ this.handleDelete }
                                    onChange={ this.onChange } />);
            }) }
            <InputField>
                <FloatingBtn onClick={ () => this.handleAdd() }>
                    <MaterialIcon iconName="add" />
                </FloatingBtn>
            </InputField>
        </Row>;
    }

    public handleAdd() {
        this.setState({
            wineGrapes: this.state.wineGrapes.concat(this.defaultWineGrape()),
        });
    }

    public handleDelete(id: number) {
        this.setState((state) => ({
            wineGrapes: state.wineGrapes.filter((wg) => wg.id !== id),
        }));
    }

    public onChange(id: number, name: string, percent?: number) {
        this.setState((state) => ({
            wineGrapes: state.wineGrapes.map((wg) => {
                return (wg.id === id)
                    ? new WineGrape(id, name, percent)
                    : wg;
            }),
        }));
        // TODO: check regex
        autocomplete("grape", 5, 1, "id^=grape-[0-9+]");
    }

    private get maxId(): number {
        const max = _.maxBy(this.state.wineGrapes, (wg) => wg.id);
        return max ? max.id : 0;
    }

    private get remainingGrapePct(): number {
        // TODO: handle undefineds and case where blank percents
        const sum = _.sumBy(this.state.wineGrapes, (wg) => wg.percent || 0);
        // TODO: warning if greater than 100
        return sum < 100 ? 100 - sum : 0;
    }

    private defaultWineGrape(): WineGrape {
        return new WineGrape(this.maxId + 1, "", this.remainingGrapePct);
    }
}
