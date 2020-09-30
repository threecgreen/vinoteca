import React from "react";

export const Preloader: React.FC = (_) => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    );
};
Preloader.displayName = "Preloader";

export enum CircleSize {
    Tiny = "tiny",
    Small = "small",
    Medium = "",
    Large = "big",
}

export enum SpinnerColor {
    WineRed = "spinner-wine-red",
    GoldenYellow = "spinner-golden-yellow",
    WineGreen = "",
}

interface ICircProps {
    color?: SpinnerColor;
    size?: CircleSize;
    className?: string;
}

export const PreloaderCirc: React.FC<ICircProps> = ({color, className, size}) => {
    color = color ?? SpinnerColor.WineGreen;
    size = size ?? CircleSize.Medium;
    return (
        <div className={ `preloader-wrapper active ${className ?? ""} ${size}` }>
            <div className={ `spinner-layer ${color}` }>
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};
PreloaderCirc.displayName = "PreloaderCirc";
