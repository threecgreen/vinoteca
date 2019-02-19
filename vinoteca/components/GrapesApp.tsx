import * as React from "react";
import { GrapesList } from "./GrapesList";
import { IGrapesListItemProps } from "./GrapesListItem";

const initialState = { grapes: [] as IGrapesListItemProps[] };
type State = Readonly<typeof initialState>;

export class GrapesApp extends React.Component {
    public readonly state: State = initialState;

    public render() {
        if (this.state) {
            return <GrapesList grapes={this.state.grapes} />;
        } else {
            return <span>Loading...</span>;
        }
    }

    public componentDidMount() {
        fetch("/rest/grapes/")
            .then((resp) => {
                return resp.json();
            })
            .then((grapes) => {
                this.setState({ grapes });
            });
    }
}
