import React from "react";

export const Preloader: React.FC<{}> = (_) => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    );
}
Preloader.displayName = "Preloader";

export const PreloaderCirc: React.FC<{className?: string}> = ({className}) => {
    return (
        <div className={ `preloader-wrapper active ${className ?? ''}` }>
            <div className="spinner-layer">
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
}
PreloaderCirc.displayName = "PreloaderCirc";
