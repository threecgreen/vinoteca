import React from "react";

interface IProps {
    path: string;
    rotation?: number
}

export const WineImg: React.FC<IProps> = ({path, ...props}) => {
    const rotation = props.rotation ?? 0;
    return (
        <div className="card" id="wine-image">
            <div className="card-image">
                <img src={ `https://vinoteca.s3.us-east-2.amazonaws.com/wine_images/${path}` }
                    alt="Wine image"
                    className="responsive-img"
                    style={ {transform: `rotate(${rotation}deg)`} }
                />
            </div>
        </div>
    );
};
WineImg.displayName = "WineImg";
