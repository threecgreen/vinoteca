import React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IVitiAreaInputProps extends IOnChange {
    value: string;
}

interface IVitiAreaInputState {
    // Helpful for debugging to include in state
    autocompleteOptions: IDict<string>;
}

export class VitiAreaInput extends React.Component<IVitiAreaInputProps, IVitiAreaInputState> {
    private logger: Logger;

    constructor(props: IVitiAreaInputProps) {
        super(props);
        this.logger = new Logger(this.constructor.name);
    }

    public onComponentDidMount() {
        get("/rest/viti-areas/all/")
            .then((producers: IDict<string>) => {
                staticAutocomplete(nameToId("VitiArea"), producers, this.props.onChange);
            })
            .catch((e) => this.logger.logError(`Failed to get producer autocomplete options. ${e}`));
    }

    public render() {
        return (
            <StatelessTextInput name="VitiArea"
                value={ this.props.value }
                className="autocomplete"
                s={ 6 } l={ 3 }
                onChange={ this.props.onChange }
            />
        );
    }
}