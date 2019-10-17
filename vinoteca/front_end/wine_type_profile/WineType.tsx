import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { IRestModel } from "../../lib/RestTypes";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { CancelOrConfirmBtns } from "../../components/Buttons";

interface IProps {
    isEditing: boolean;
    wineTypeText: string;
    wineType: IRestModel;
    onWineTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
    onTextInputFocus: () => void;
    onTextInputBlur: () => void;
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
                        <VitiAreaInput value={ this.props.wineTypeText }
                            onChange={ this.props.onWineTypeChange }
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

