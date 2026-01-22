import React from "react";

export const ParallaxImg: React.FC<{src: string, alt: string}> = ({src: imgSource, alt}) => {
    return (
        <div
            className="relative w-full h-[500px] overflow-hidden bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${imgSource})` }}
            role="img"
            aria-label={alt}
        />
    );
};
ParallaxImg.displayName = "ParallaxImg";
