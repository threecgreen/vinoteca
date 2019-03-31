import React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId, areEqual } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";
import { getRegions } from "../lib/RestApi";

interface IRegionInputProps extends IOnChange {
    enabled: boolean;
    value: string;
    productFilter?: string;
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
        this.state = {autocompleteOptions: {}};
    }

    public onComponentDidMount() {
        this.getDefaultAutocompleteOptions();
    }

    public componentDidUpdate(prevProps: IRegionInputProps, prevState: IRegionInputState) {
        if (!areEqual(prevState.autocompleteOptions, this.state.autocompleteOptions)) {
            staticAutocomplete(nameToId("Region"), this.state.autocompleteOptions,
                               this.props.onChange);
        }
        if (prevProps.productFilter !== this.props.productFilter) {
            if (this.props.productFilter === "" || this.props.productFilter === undefined) {
                this.getDefaultAutocompleteOptions();
            } else {
                getRegions(undefined, this.props.productFilter)
                    .then((regions) => {
                        if (regions.length === 1) {
                            // TODO: disable self
                            this.props.onChange(regions[0].name);
                        }
                    })
            }
        }
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

    private getDefaultAutocompleteOptions() {
        get("/rest/regions/all/")
            .then((regions: IDict<string>) => {
                this.setState({
                    autocompleteOptions: regions,
                });
            })
            .catch((e) => this.logger.logError(`Failed to get producer autocomplete options. ${e}`));
    }
}

