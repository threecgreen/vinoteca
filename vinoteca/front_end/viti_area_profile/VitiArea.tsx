import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { IVitiArea, ProfileStats } from "../../lib/RestTypes";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { CancelOrConfirmBtns } from "../../components/Buttons";

interface IProps {
    isEditing: boolean;
    vitiAreaText: string;
    vitiArea: IVitiArea;
    onVitiAreaChange: (val: string) => void;
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
    onTextInputFocus: () => void;
    onTextInputBlur: () => void;
}

// TODO: stats component?
interface IState {
    stats?: ProfileStats;
}

export class VitiArea extends React.Component<IProps, IState> {
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
                    <span className="bold">{ this.props.vitiArea.name }</span>
                </h3>
                {/* TODO: Stats here */}
            </Col>
        );
    }

    private renderEdit(): JSX.Element {
        return (
            <React.Fragment>
                <Col s={ 10 }>
                    <h3 className="bold">Edit Viticultural Area</h3>
                    <form autoComplete="off">
                        <VitiAreaInput value={ this.props.vitiAreaText }
                            onChange={ this.props.onVitiAreaChange }
                            onFocus={ this.props.onTextInputFocus }
                            onBlur={ this.props.onTextInputBlur }
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