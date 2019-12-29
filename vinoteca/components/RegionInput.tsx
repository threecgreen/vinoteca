import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId, areEqual } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";
import { getRegions, EmptyResultError, toDict } from "../lib/RestApi";
import { IRestModel } from "../lib/RestTypes";

interface IRegionInputProps extends IOnChange {
    value: string;
    producerFilter?: string;
    onSpecialCharClick: (c: string, position: number) => void;
}

interface IRegionInputState {
    autocompleteOptions: IDict<string | null>;
    enabled: boolean;
}

export class RegionInput extends React.Component<IRegionInputProps, IRegionInputState> {
    private logger: Logger;

    constructor(props: IRegionInputProps) {
        super(props);
        this.logger = new Logger(this.constructor.name);
        this.state = {
            autocompleteOptions: {},
            enabled: true,
        };
    }

    public componentDidMount() {
        this.getDefaultAutocompleteOptions();
    }

    public async componentDidUpdate(prevProps: IRegionInputProps, prevState: IRegionInputState) {
        if (!areEqual(prevState.autocompleteOptions, this.state.autocompleteOptions)) {
            staticAutocomplete(nameToId("Region"), this.state.autocompleteOptions,
                               this.props.onChange);
        }
        if (prevProps.producerFilter !== this.props.producerFilter) {
            if (this.props.producerFilter) {
                try {
                    const regions = await getRegions({producerName: this.props.producerFilter});
                    if (regions.length === 1) {
                        this.props.onChange(regions[0].name);
                        this.setState({ enabled: false });
                    } else if (!this.state.enabled) {
                        this.setState({ enabled: true });
                    }
                } catch (e) {
                    // Ignore empty result errors
                    if (!EmptyResultError.isInstance(e)) {
                        this.logger.logWarning(`Error fetching regions based on producer. ${e}`);
                        Promise.reject(e);
                    }
                }
            } else if (!this.state.enabled) {
                this.setState({ enabled: true });
            }
        }
    }

    public render() {
        return (
            <StatelessTextInput name="Region"
                className="autocomplete"
                s={ 6 } l={ 3 }
                enabled={ this.state.enabled }
                { ...this.props }
            />
        );
    }

    private async getDefaultAutocompleteOptions() {
        try {
            const regions: IRestModel[] = await get("/rest/regions");
            this.setState({autocompleteOptions: toDict(regions)});
        } catch {
            this.logger.logError("Failed to get producer autocomplete options");
        }
    }
}

