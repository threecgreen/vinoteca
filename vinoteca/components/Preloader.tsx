import * as React from "react";

export const Preloader: React.FC = (_props) => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    );
}
Preloader.displayName = "Preloader";
