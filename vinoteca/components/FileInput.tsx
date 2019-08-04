import * as React from "react";
import { nameToId } from "../lib/utils";
import { Col } from "./Grid";

interface IProps {
    name: string;
}

export class FileInput extends React.Component<IProps> {
    private fileInput: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedFile: undefined,
        }
        this.fileInput = React.createRef();
    }

    public render() {
        const id = nameToId(this.props.name);

        return (
            <React.Fragment>
                <div className="file-field input-field col s12 l6">
                    <div className="btn yellow darken-2">
                        <span>{ this.props.name }</span>
                        <input type="file"
                            name={ id }
                            id={ id }
                            ref={ this.fileInput }
                        />
                    </div>
                    <div className="file-path-wrapper">
                        <input type="text" className="file-path validate" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
