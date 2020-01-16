import * as React from "react";
import { Col } from "./Grid";
import { CheckboxInput } from "./CheckboxInput";

interface IProps {
    initialState?: IState;
}

interface IState {
    isChecked: boolean;
    rating?: number;
}

export class RatingInput extends React.Component<{}, IState> {
    constructor(props: IProps) {
        super(props);
        if (props.initialState) {
            this.state = {...props.initialState};
        } else {
            this.state = {
                isChecked: false,
            };
        }
    }

    public render() {
        return (
            <Col s={ 4 } l={ 2 } classes={ ["range-field" ] }>
                <CheckboxInput name="has-rating"
                    text="Rating"
                    isChecked={ this.state.isChecked }
                    onClick={ (s) => this.onClick(s) }
                />
                <label htmlFor="rating" />
                <p className="range-field" id="rating-slider">
                    <input type="range" id="rating" name="rating"
                        min={ 0 } max={ 10 } step={ 1 }
                        value={ this.state.rating }
                        disabled={ !this.state.isChecked }
                        onChange={ (e) => this.onChange(e.target.value) }
                    />
                </p>
            </Col>
        );
    }

    private onClick(checked: boolean) {
        this.setState({isChecked: checked});
    }

    private onChange(val: string) {
        const int = parseInt(val, 10);
        this.setState({rating: int})
    }
}
