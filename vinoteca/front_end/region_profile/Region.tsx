import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { IRegion, ProfileStats } from "../../lib/RestTypes";
import { RegionInput } from "../../components/RegionInput";
import { Flag } from "../../components/Flag";
import { CancelOrConfirmBtns } from "../../components/Buttons";

interface IRegionProps {
    isEditing: boolean;
    regionText: string;
    region: IRegion;
    onRegionChange: (val: string) => void;
    onRegionSpecialCharClick: (c: string, position: number) => void;
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
}

// TODO: stats component?
interface IRegionState {
    stats?: ProfileStats;
}

export class Region extends React.Component<IRegionProps, IRegionState> {
    constructor(props: IRegionProps) {
        super(props);
        this.state = {
            stats: undefined,
        };
    }

    public render() {
        const content = this.props.isEditing ? this.renderEdit() : this.renderView();
        return (
            <Row>
                { content }
            </Row>
        );
    }

    private renderView(): JSX.Element {
        return (
            <Col s={ 12 }>
                <h3>
                    { /* TODO: fix alignment */ }
                    <Flag region={ this.props.region.name } />
                    <span className="bold">{ this.props.region.name }</span>
                </h3>
                {/* TODO: Stats here */}
            </Col>
        );
    }

    private renderEdit(): JSX.Element {
        return (
            <React.Fragment>
                <Col s={ 12 }>
                    <h3 className="bold">Edit Region</h3>
                    <form autoComplete="off">
                        <RegionInput value={ this.props.regionText }
                            onChange={ this.props.onRegionChange }
                            onSpecialCharClick={ this.props.onRegionSpecialCharClick }
                        />
                    </form>
                </Col>
                <CancelOrConfirmBtns
                    onConfirmClick={ this.props.onConfirmClick }
                    onCancelClick={ this.props.onCancelClick }
                />
            </React.Fragment>
        );
    }
}
