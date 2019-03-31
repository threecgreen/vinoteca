import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IProducerInputProps extends IOnChange {
    value: string;
}

interface IProducerInputState {
    // Helpful for debugging to include in state
    autocompleteOptions: IDict<string>;
}

export class ProducerInput extends React.Component<IProducerInputProps, IProducerInputState> {
    private logger: Logger;

    constructor(props: IProducerInputProps) {
        super(props);
        this.logger = new Logger(this.constructor.name);
    }

    public componentDidMount() {
        get("/rest/producers/all/")
            .then((producers: IDict<string>) => {
                staticAutocomplete(nameToId("Producer"), producers, this.props.onChange);
            })
            .catch((e) => this.logger.logError(`Failed to get producer autocomplete options. ${e}`));
    }

    public render() {
        return (
            <StatelessTextInput name="Producer"
                className="autocomplete"
                s={ 6 } l={ 3 }
                { ...this.props }
            />
        );
    }
}
