import React from "react";

interface IProps {
    path: string;
}

export const WineImg: React.FC<IProps> = ({path}) => {
    return (
        <div className="card" id="wine-image">
            <div className="card-image">
                <img src={ `https://vinoteca.s3.us-east-2.amazonaws.com/${path}` }
                    alt="Wine image"
                    className="responsive-img"
                />
            </div>
        </div>
    );
}
WineImg.displayName = "WineImg";
