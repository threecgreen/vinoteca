import React from "react";
import { FloatingBtn } from "./Buttons";
import { IChildrenProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";

export const FixedActionList: React.FC<IChildrenProp> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!isOpen) {
            return;
        }
        const onClick = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", onClick);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("click", onClick);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    return (
        <div className="fixed-action-btn" ref={ containerRef }>
            <FloatingBtn
                classes={["w-14", "h-14", "red-bg"]}
                onClick={() => setIsOpen(!isOpen)}
            >
                <MaterialIcon iconName="menu" />
            </FloatingBtn>
            <ul
                aria-hidden={!isOpen}
                className={`absolute right-16 inset-y-0 flex flex-row-reverse items-center
                    transition-all duration-200
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                {React.Children.map(props.children, (child) => (
                    <li>{child}</li>
                ))}
            </ul>
        </div>
    );
};
FixedActionList.displayName = "FixedActionList";
