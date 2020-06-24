import React from "react";
import { IChildrenProp } from "./IProps";

interface IViewport {
    height: number;
    width: number;
}

const ViewportContext = React.createContext<IViewport>({
    height: window.innerHeight,
    width: window.innerWidth,
});
ViewportContext.displayName = "ViewportContext";

export const ViewportProvider: React.FC<IChildrenProp> = ({children}) => {
    const [viewport, setViewport] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    const handleResize = () => {
        setViewport({height: window.innerHeight, width: window.innerWidth});
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Remove event listener on tear down
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ViewportContext.Provider value={ viewport }>
            { children }
        </ViewportContext.Provider>
    );
};
ViewportProvider.displayName = "ViewportProvider";

export const useViewport = () => {
    const viewport = React.useContext(ViewportContext);
    if (viewport) {
        return viewport;
    }
    throw new Error("useViewport must be used within a ViewportProvider");
};
