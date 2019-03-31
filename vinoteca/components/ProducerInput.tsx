import React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IProductInputProps extends IOnChange {
    value: string;
}

interface IProductInputState {
    // Helpful for debugging to include in state
    autocompleteOptions: IDict<string>;
}

export class ProducerInput extends React.Component<IProductInputProps, IProductInputState> {
    private logger: Logger;

    constructor(props: IProductInputProps) {
        super(props);
        this.logger = new Logger(this.constructor.name);
    }

    public onComponentDidMount() {
        get("/rest/producers/all/")
            .then((producers: IDict<string>) => {
                staticAutocomplete(nameToId("Producer"), producers, this.props.onChange);
            })
            .catch((e) => this.logger.logError("Failed to get producer autocomplete options."));
    }

    public render() {
        return (
            <StatelessTextInput name="Producer"
                value={ this.props.value }
                className="autocomplete"
                s={ 6 } l={ 3 }
                onChange={ this.props.onChange }
            />
        );
    }
}
