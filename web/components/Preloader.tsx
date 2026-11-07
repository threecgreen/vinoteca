import React from "react";

const TRACK_CLASSES =
    "relative h-1 w-full overflow-hidden rounded-sm bg-wine-green-light/40 mt-2 mb-4";
const BAR_CLASSES = "absolute inset-y-0 w-1/3 rounded-sm bg-wine-green animate-indeterminate";

export const Preloader: React.FC = (_) => {
    return (
        <div
            role="progressbar"
            aria-label="Loading"
            className={ TRACK_CLASSES }
        >
            <div className={ BAR_CLASSES } />
        </div>
    );
};
Preloader.displayName = "Preloader";

export enum CircleSize {
    Tiny = "tiny",
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export enum SpinnerColor {
    WineRed = "wine-red",
    GoldenYellow = "golden-yellow",
    WineGreen = "wine-green",
}

const SPINNER_CLASSES =
    "inline-block animate-spin rounded-full border-[3px] border-solid border-t-transparent";

const SIZE_CLASSES: Record<CircleSize, string> = {
    [CircleSize.Tiny]: "w-6 h-6",
    [CircleSize.Small]: "w-9 h-9",
    [CircleSize.Medium]: "w-[50px] h-[50px]",
    [CircleSize.Large]: "w-16 h-16",
};

const COLOR_CLASSES: Record<SpinnerColor, string> = {
    [SpinnerColor.WineRed]: "border-wine-red",
    [SpinnerColor.GoldenYellow]: "border-golden-yellow",
    [SpinnerColor.WineGreen]: "border-wine-green",
};

interface ICircProps {
    color?: SpinnerColor;
    size?: CircleSize;
    className?: string;
}

export const PreloaderCirc: React.FC<ICircProps> = ({
    color = SpinnerColor.WineGreen,
    size = CircleSize.Medium,
    className,
}) => {
    return (
        <div
            role="status"
            aria-label="Loading"
            className={
                [SPINNER_CLASSES, SIZE_CLASSES[size], COLOR_CLASSES[color], className].join(" ")
            }
        />
    );
};
PreloaderCirc.displayName = "PreloaderCirc";
