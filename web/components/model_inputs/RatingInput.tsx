import React from "react";
import { Col } from "../Grid";
import { CheckboxInput } from "../inputs/CheckboxInput";

interface IProps {
    isChecked: boolean;
    onIsCheckedChange: (isChecked: boolean) => void;
    rating: number;
    onRatingChange: (rating: number) => void;
}

export const RatingInput: React.FC<IProps> = ({
    isChecked, onIsCheckedChange, rating, onRatingChange,
}) => {
    return (
        <Col s={12} m={5} l={2} classes={["range-field"]}>
            <CheckboxInput
                name="has-rating"
                text="Rating"
                isChecked={isChecked}
                onClick={onIsCheckedChange}
            />
            <div className="mt-2">
                <input
                    type="range"
                    name="rating"
                    min={0}
                    max={10}
                    step={1}
                    value={rating}
                    disabled={!isChecked}
                    onChange={(e) => onRatingChange(parseInt(e.target.value, 10))}
                    className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-medium">{rating}</span>
                    <span>10</span>
                </div>
            </div>
        </Col>
    );
};
RatingInput.displayName = "RatingInput";
