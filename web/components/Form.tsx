import React from "react";
import { gridClasses, IGridProps, joinClasses } from "./Grid";
import { IChildrenProp } from "./IProps";

interface IProps extends IChildrenProp, IGridProps {
    onSubmit: () => void;
    classes?: string[];
}

export const Form: React.FC<IProps> = ({classes, children, onSubmit, ...gridProps}) => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };
    return (
        <form className={ joinClasses(gridClasses(gridProps), classes) }
            autoComplete="off"
            onSubmit={ onSubmitHandler }
        >
            { children }
        </form>
    );
};
Form.displayName = "Form";
