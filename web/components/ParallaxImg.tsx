import * as React from "react";
import { Parallax } from "materialize-css";

export const ParallaxImg: React.FC<{src: string, alt: string}> = ({src: imgSource, alt}) => {
    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        const instance = new Parallax(ref.current);
    }, [ref]);

    return (
        <div className="parallax-container">
            <div className="parallax" ref={ ref }>
                <img src={ imgSource } alt={ alt } />
            </div>
        </div>
    )
}
