import React from "react";
import { FloatingBtn } from "./Buttons";
import { IChildrenProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";

export const FixedActionList: React.FC<IChildrenProp> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="fixed-action-btn horizontal relative">
            <FloatingBtn
                classes={["btn-large", "red-bg"]}
                onClick={() => setIsOpen(!isOpen)}
            >
                <MaterialIcon iconName="menu" />
            </FloatingBtn>
            <ul
                className={`absolute right-14 top-0 flex flex-row-reverse gap-2 transition-all duration-200 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                {React.Children.map(props.children, (child) => (
                    <li>{child}</li>
                ))}
            </ul>
        </div>
    );
};
FixedActionList.displayName = "FixedActionList";
