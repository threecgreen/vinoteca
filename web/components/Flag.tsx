import React from "react";

interface IProps {
    region: string;
}

export const Flag: React.FC<IProps> = (props) => {
    return (
        <img src={ `/static/img/flags/${props.region}.svg` }
            alt={ `Flag of ${props.region}` }
            className="circle z-depth-2 img-responsive region-flag"
        />
    );
};
Flag.displayName = "Flag";
