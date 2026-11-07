import React from "react";

const PARALLAX_PX = 100;

export const ParallaxImg: React.FC<{src: string, alt: string}> = ({src: imgSource, alt}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const imgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
            return;
        }
        let frame = 0;
        const update = () => {
            frame = 0;
            const container = containerRef.current;
            const img = imgRef.current;
            if (!container || !img) {
                return;
            }
            const rect = container.getBoundingClientRect();
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const clamped = Math.min(Math.max(progress, 0), 1);
            img.style.transform = `translate3d(0, ${(clamped - 0.5) * 2 * PARALLAX_PX}px, 0)`;
        };
        const schedule = () => {
            if (!frame) {
                frame = requestAnimationFrame(update);
            }
        };
        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
        };
    }, []);

    return (
        <div ref={ containerRef } className="relative w-full h-[500px] overflow-hidden">
            <img ref={ imgRef }
                src={ imgSource }
                alt={ alt }
                className="absolute left-0 w-full object-cover will-change-transform"
                style={ { top: -PARALLAX_PX, height: `calc(100% + ${2 * PARALLAX_PX}px)` } }
            />
        </div>
    );
};
ParallaxImg.displayName = "ParallaxImg";
