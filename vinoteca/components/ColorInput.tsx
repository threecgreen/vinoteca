import { FormSelect } from "materialize-css";
import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict } from "../lib/utils";
import { IOnChange } from "./IProps";
import { StatelessSelectInput } from "./StatelessSelectInput";

interface IColorInputProps extends IOnChange {
    selection: string;
    extraChoice?: string;
}

interface IColorInputState {
    selectionOptions: string[];
    selectRef: React.RefObject<HTMLSelectElement>;
}

export class ColorInput extends React.Component<IColorInputProps, IColorInputState> {
    private logger: Logger;

    constructor(props: IColorInputProps) {
        super(props);
        this.state = {
            selectRef: React.createRef(),
            selectionOptions: [],
        };
        this.logger = new Logger(this.constructor.name);
    }

    public componentDidMount() {
        get("/rest/colors/all/")
            .then((colors: IDict<string>) => {
                this.setState({
                    selectionOptions: this.concatIfNotNull(Object.keys(colors)),
                });
                const formSelect = new FormSelect(this.state.selectRef.current!);
            })
            .catch((e) => this.logger.logError(`Failed to get colors with error '${e}'`));
    }

    public render() {
        return (
            <StatelessSelectInput name="Color"
                s={ 4 } l={ 2 }
                selectRef={ this.state.selectRef }
                options={ this.state.selectionOptions }
                onChange={ (v) => this.onChange(v) }
                { ...this.props }
            />
        );
    }

    private onChange(val: string) {
        if (this.props.onChange) {
            this.props.onChange(val);
        }
    }

    private concatIfNotNull(options: string[]): string[] {
        if (this.props.extraChoice) {
            return [this.props.extraChoice].concat(options);
        }
        return options;
    }
}
