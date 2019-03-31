import React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IRegionInputProps extends IOnChange {
    enabled: boolean;
    value: string;
}

interface IRegionInputState {
    // Helpful for debugging to include in state
    autocompleteOptions: IDict<string>;
}

export class RegionInput extends React.Component<IRegionInputProps, IRegionInputState> {
    private logger: Logger;

    constructor(props: IRegionInputProps) {
        super(props);
        this.logger = new Logger(this.constructor.name);
    }

    public onComponentDidMount() {
        get("/rest/regions/all/")
            .then((producers: IDict<string>) => {
                staticAutocomplete(nameToId("Region"), producers, this.props.onChange);
            })
            .catch((e) => this.logger.logError(`Failed to get producer autocomplete options. ${e}`));
    }

    public render() {
        return (
            <StatelessTextInput name="Region"
                value={ this.props.value }
                className="autocomplete"
                s={ 6 } l={ 3 }
                onChange={ this.props.onChange }
                enabled={ this.props.enabled }
            />
        );
    }
}

