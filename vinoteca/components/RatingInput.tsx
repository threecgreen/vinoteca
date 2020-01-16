import * as React from "react";
import { Col } from "./Grid";
import { CheckboxInput } from "./CheckboxInput";

interface IProps {
    isChecked: boolean;
    onIsCheckedChange: (isChecked: boolean) => void;
    rating: number;
    onRatingChange: (rating: number) => void;
}

export const RatingInput: React.FC<IProps> = ({isChecked, onIsCheckedChange, rating, onRatingChange})  => {
    return (
        <Col s={ 4 } l={ 2 } classes={ ["range-field" ] }>
            <CheckboxInput name="has-rating"
                text="Rating"
                isChecked={ isChecked }
                onClick={ onIsCheckedChange }
            />
            <label htmlFor="rating" />
            <p className="range-field" id="rating-slider">
                <input type="range" id="rating" name="rating"
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
