import React from "react";

interface IProps {
    path: string;
    id: string;
    rotation?: number;
}

export const WineImg: React.FC<IProps> = ({path, id, ...props}) => {
    const rotation = props.rotation ?? 0;
    return (
        <div className="card center" id={ `${id}` }
            style={ {
                transform: `rotate(${rotation}deg)`,
                maxHeight: "25rem",
                maxWidth: "25rem"
            } }
        >
            <div className="card-image">
                <img src={ `https://vinoteca.s3.us-east-2.amazonaws.com/wine_images/${path}` }
                    alt="Wine image"
                    className="responsive-img"
                />
            </div>
        </div>
    );
};
WineImg.displayName = "WineImg";
