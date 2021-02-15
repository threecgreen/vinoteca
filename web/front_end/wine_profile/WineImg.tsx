import React from "react";

interface IProps {
    path: string;
    id: string;
    /** Auto-incremented number to refresh after update */
    imageCounter: number;
    rotation?: number;
}

export const WineImg: React.FC<IProps> = ({path, id, imageCounter, ...props}) => {
    const rotation = props.rotation ?? 0;
    const src = `https://vinoteca.s3.us-east-2.amazonaws.com/wine_images/${path}?i=${imageCounter}`;
    return (
        <div className="card center" id={ `${id}` }
            style={ {
                transform: `rotate(${rotation}deg)`,
            } }
        >
            <div className="card-image">
                <img src={ src }
                    alt="Wine image"
                    className="responsive-img"
                />
            </div>
        </div>
    );
};
WineImg.displayName = "WineImg";
