import { Range } from "materialize-css";
import React from "react";
import { CheckboxInput } from "./CheckboxInput";
import { Col } from "./Grid";

interface IProps {
    isChecked: boolean;
    onIsCheckedChange: (isChecked: boolean) => void;
    rating: number;
    onRatingChange: (rating: number) => void;
}

export const RatingInput: React.FC<IProps> = ({isChecked, onIsCheckedChange, rating, onRatingChange})  => {
    const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        new Range(ref.current)
    }, [ref]);

    return (
        <Col s={ 4 } l={ 2 } classes={ ["range-field" ] }>
            <CheckboxInput name="has-rating"
                text="Rating"
                isChecked={ isChecked }
                onClick={ onIsCheckedChange }
            />
            <label htmlFor="rating" />
            <p className="range-field">
                <input type="range" name="rating"
                    ref={ ref }
                    min={ 0 } max={ 10 } step={ 1 }
                    value={ rating }
                    disabled={ !isChecked }
                    onChange={ (e) => onRatingChange(parseInt(e.target.value, 10)) }
                />
            </p>
        </Col>
    );
}
RatingInput.displayName = "RatingInput";
