import React from "react";

interface IProps {
    id: number;
}

export const WineImg: React.FC<IProps> = ({id}) => {
    return (
        <div className="card" id="wine-image">
            <div className="card-image">
                <img src={ `/media/${ id }/image` }
                    alt="Wine image"
                    className="responsive-img"
                />
            </div>
        </div>
    );
}
WineImg.displayName = "WineImg";
