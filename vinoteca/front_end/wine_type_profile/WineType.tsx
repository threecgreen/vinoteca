import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { IRestModel } from "../../lib/RestTypes";
import { WineTypeInput } from "../../components/WineTypeInput";

interface IProps {
    isEditing: boolean;
    wineTypeText: string;
    wineType: IRestModel;
    onWineTypeChange: (val: string) => void;
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
}

export class WineType extends React.Component<IProps> {
    constructor(props: IProps) {
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
                    <span className="bold">{ this.props.wineType.name }</span>
                </h3>
            </Col>
        );
    }

    private renderEdit(): JSX.Element {
        return (
            <React.Fragment>
                <Col s={ 10 }>
                    <h3 className="bold">Edit Wine Type</h3>
                    <form autoComplete="off">
                        <WineTypeInput value={ this.props.wineTypeText }
                            onChange={ this.props.onWineTypeChange }
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

