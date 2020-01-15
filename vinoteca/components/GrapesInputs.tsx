import React from "react";
import { get } from "../lib/ApiHelper";
import { IGrape, IWineGrape } from "../lib/Rest";
import { toDict } from "../lib/RestApi";
import { IDict, maxBy, sumBy } from "../lib/utils";
import { FloatingBtn } from "./Buttons";
import { GrapeInput } from "./GrapeInput";
import { Col, InputField, Row } from "./Grid";
import { MaterialIcon } from "./MaterialIcon";

interface IProps {
    wineGrapes: IWineGrape[];
    updateWineGrapes: (wineGrapes: IWineGrape[]) => void;
    wineId?: number;
}

interface IState {
    completions: IDict<string | null>;
}

export class GrapesInputs extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            completions: {},
        };
    }

    public render() {
        return (
            <Row>
                <Col s={ 12 }>
                    <h6>Grape composition</h6>
                </Col> {
                    this.props.wineGrapes.map((wineGrape) => {
                        return (
                            <GrapeInput key={ wineGrape.id }
                                id={ wineGrape.id }
                                completions={ this.state.completions }
                                grape={ wineGrape.grape }
                                percent={ wineGrape.percent }
                                handleDelete={ this.handleDelete.bind(this) }
                                onChange={ this.onChange.bind(this) }
                            />
                        );
                    })
                }
                <InputField>
                    <FloatingBtn onClick={ (e) => this.handleAdd(e) }
                        classes={ ["green-bg"] }
                    >
                        <MaterialIcon iconName="add" />
                    </FloatingBtn>
                </InputField>
            </Row>
        );
    }

    public async componentDidMount() {
        const completions: IGrape[] = await get("/rest/grapes");
        this.setState({completions: toDict(completions)});
    }

    public handleAdd(e: React.MouseEvent) {
        e.preventDefault();
        this.props.updateWineGrapes(this.props.wineGrapes.concat(this.defaultWineGrape()));
    }

    public handleDelete(e: React.MouseEvent, id: number) {
        e.preventDefault();
        this.props.updateWineGrapes(this.props.wineGrapes.filter((wg) => wg.id !== id))
    }

    public onChange(id: number, name: string, percent: number | null) {
        this.props.updateWineGrapes(
            this.props.wineGrapes.map((wg) => (
                (wg.id === id)
                    ? {id, grape: name, percent, grapeId: wg.grapeId, wineId: wg.wineId}
                    : wg
        )));
    }

    private get maxId(): number {
        const max = maxBy(this.props.wineGrapes, (wg) => wg.id);
        return max ? max.id : 0;
    }

    /** Determine whether any grape has a percentage set. */
    private get hasGrapePct(): boolean {
        return this.props.wineGrapes.some((wg) => (
            wg.percent !== null && wg.grape
        ));
    }

    private get remainingGrapePct(): number {
        if (this.props.wineGrapes.length > 0) {
            const sum = sumBy(this.props.wineGrapes, (wg) => wg.percent || 0);
            // TODO: warning if greater than 100
            return sum < 100 ? 100 - sum : 0;
        }
        return 100;
    }

    private defaultWineGrape(): IWineGrape {
        return {
            id: this.maxId + 1,
            percent: this.hasGrapePct ? this.remainingGrapePct : null,
            grape: "",
            grapeId: 0,
            wineId: this.props.wineId || 0,
        };
    }
}
