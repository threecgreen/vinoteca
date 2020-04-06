import React from "react";
import { gridClasses, IGridProps, joinClasses } from "./Grid";
import { IChildrenProp } from "./IProps";

interface IProps extends IChildrenProp, IGridProps {
    classes?: string[];
}

export const Form: React.FC<IProps> = ({classes, children, ...gridProps}) => {
    return (
        <form className={ joinClasses(gridClasses(gridProps), classes) }
            autoComplete="off"
        >
            { children }
        </form>
    );
}
Form.displayName = "Form";
