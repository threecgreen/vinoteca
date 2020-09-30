import { FloatingActionButton } from "materialize-css";
import React from "react";
import { FloatingBtn } from "./Buttons";
import { IChildrenProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";

export const FixedActionList: React.FC<IChildrenProp> = (props) => {
    const divRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        new FloatingActionButton(divRef.current, {direction: "left"});
    }, [divRef]);

    return (
            <div className="fixed-action-btn horizontal"
                ref={ divRef }
            >
                <FloatingBtn classes={ ["btn-large", "red-bg"] }
                    onClick={ () => null }
                >
                    <MaterialIcon iconName="menu" />
                </FloatingBtn>
                <ul> { React.Children.map(props.children, (child) => (
                    <li>{ child }</li>
                )) } </ul>
            </div>
    );
};
FixedActionList.displayName = "FixedActionList";
