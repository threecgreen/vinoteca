import * as React from "react";
import { hFloatingActnBtn } from "../lib/widgets";
import { FloatingBtn } from "./Buttons";
import { IChildrenProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";

export class FixedActionList extends React.Component<IChildrenProp> {
    public render()  {
        return (
            <div className="fixed-action-btn horizontal">
                <FloatingBtn classes={ ["btn-large", "red-bg"] }
                    onClick={ (_) => undefined }
                >
                    <MaterialIcon iconName="menu" />
                </FloatingBtn>
                <ul>
                    { this.props.children }
                </ul>
            </div>
        );
    }

    public componentDidMount() {
        hFloatingActnBtn();
    }
}
