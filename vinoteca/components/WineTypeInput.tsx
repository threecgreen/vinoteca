import * as React from "react";
import { get } from "../lib/ApiHelper";
import Logger from "../lib/Logger";
import { IDict, nameToId } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { IOnChange } from "./IProps";
import { StatelessTextInput } from "./StatelessTextInput";

interface IWineTypeInputProps extends IOnChange {
    value: string;
    onSpecialCharClick: (c: string, position: number) => void;
}

interface IWineTypeInputState {
    autocompleteOptions: IDict<string>;
}

export class WineTypeInput extends React.Component<IWineTypeInputProps, IWineTypeInputState> {
    private logger: Logger;

    constructor(props: IWineTypeInputProps) {
        super(props);
        this.state = {autocompleteOptions: {}};
        this.logger = new Logger(this.constructor.name);
    }

    public async componentDidMount() {
        try {
            const wineTypes: IDict<string> = await get("/rest/wine-types/all/");
            staticAutocomplete(nameToId("Wine Type"), wineTypes, this.props.onChange);
        } catch (e) {
            this.logger.logError(`Failed to get wine type autocomplete options. ${e}`);
        }
    }

    public render() {
        return (
            <StatelessTextInput name="Wine Type"
                className="autocomplete"
                s={ 8 } l={ 4 }
                { ...this.props }
            />
        );
    }
}
