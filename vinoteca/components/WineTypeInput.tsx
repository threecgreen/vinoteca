import React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IWineTypeInputProps extends IOnChange {
    value: string;
}

interface IWineTypeInputState {
    // Helpful for debugging to include in state
    autocompleteOptions: IDict<string>;
}

export class WineTypeInput extends React.Component<IWineTypeInputProps, IWineTypeInputState> {
    private logger: Logger;

    constructor(props: IWineTypeInputProps) {
        super(props);
        this.setState({autocompleteOptions: {}});
        this.logger = new Logger(this.constructor.name);
    }

    public onComponentMount() {
        get("/rest/wine-types/all/")
            .then((wineTypes: IDict<string>) => {
                staticAutocomplete(nameToId("Wine Type"), wineTypes, this.props.onChange);
            })
            .catch((e) => this.logger.logError("Failed to get wine type autocomplete options."));
    }

    public render() {
        return (
            <StatelessTextInput name="Wine Type"
                value={ this.props.value }
                className="autocomplete"
                s={ 8 } l={ 4 }
                onChange={ this.props.onChange }
            />
        );
    }
}
