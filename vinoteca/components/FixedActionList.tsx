import * as React from "react";
import { hFloatingActnBtn } from "../lib/widgets";
import { FloatingBtn } from "./Buttons";
import { IChildrenProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";

export const FixedActionList: React.FC<IChildrenProp> = (props) => {
    React.useEffect(hFloatingActnBtn, []);

    return (
            <div className="fixed-action-btn horizontal">
                <FloatingBtn classes={ ["btn-large", "red-bg"] }
                    onClick={ (_) => undefined }
                >
                    <MaterialIcon iconName="menu" />
                </FloatingBtn>
                <ul> { React.Children.map(props.children, (child) => {
                    return (
                        <li>{ child }</li>
                    );
                }) } </ul>
            </div>
    );
};
FixedActionList.displayName = "FixedActionList";
