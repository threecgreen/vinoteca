import React from "react";

interface IProps {
    path: string;
    id: string;
    /** Auto-incremented number to refresh after update */
    imageCounter: number;
    rotation?: number;
}

interface ISize {
    width: number;
    height: number;
}

export const WineImg: React.FC<IProps> = ({path, id, imageCounter, ...props}) => {
    const rotation = props.rotation ?? 0;
    const src = `https://vinoteca.s3.us-east-2.amazonaws.com/wine_images/${path}?i=${imageCounter}`;
    const frameRef = React.useRef<HTMLDivElement>(null);
    const imgRef = React.useRef<HTMLImageElement>(null);
    const [imgSize, setImgSize] = React.useState<ISize | null>(null);
    const [frameBounds, setFrameBounds] = React.useState<ISize | null>(null);

    const measure = React.useCallback(() => {
        if (imgRef.current) {
            setImgSize({width: imgRef.current.offsetWidth, height: imgRef.current.offsetHeight});
        }
        if (frameRef.current) {
            const maxHeight = parseFloat(getComputedStyle(frameRef.current).maxHeight);
            setFrameBounds({
                width: frameRef.current.clientWidth,
                height: isNaN(maxHeight) ? Infinity : maxHeight,
            });
        }
    }, []);
    React.useEffect(() => {
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [measure]);

    // A quarter turn swaps the image's width and height, so shrink it to fit the frame's
    // bounds and give the frame the rotated height.
    const isQuarterTurn = Math.abs(rotation) % 180 === 90;
    const scale = isQuarterTurn && imgSize && frameBounds
        ? Math.min(1, frameBounds.width / imgSize.height, frameBounds.height / imgSize.width)
        : 1;
    const frameStyle: React.CSSProperties = isQuarterTurn && imgSize
        ? {height: imgSize.width * scale}
        : {};

    return (
        <div className="card center" id={ `${id}` }>
            <div ref={ frameRef }
                className="card-image flex items-center justify-center"
                style={ frameStyle }
            >
                <img ref={ imgRef }
                    src={ src }
                    alt="Wine image"
                    className="max-w-full h-auto"
                    onLoad={ measure }
                    style={ {transform: `rotate(${rotation}deg) scale(${scale})`} }
                />
            </div>
        </div>
    );
};
WineImg.displayName = "WineImg";
