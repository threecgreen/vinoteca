import * as React from "react";

interface IProps {
    id: number;
}

export const WineImg: React.FC<IProps> = ({id}) => {
    return (
        <div className="card" id="wine-image">
            <div className="card-image">
                <img src={ `/media/${ id }.png` }
                    alt="Wine Image"
                    className="responsive-img"
                />
            </div>
        </div>
    );
}
WineImg.displayName = "WineImg";
