import * as _ from "lodash";
import * as React from "react";
import Logger from "../lib/Logger";
import { IRESTObject } from "../lib/rest";
import { GrapesList } from "./GrapesList";
import { Preloader } from "./Preloader";

export class GrapeItem {
    constructor(public id: number, public name: string, public isEditable = false) {
    }
}

const initialState = { grapes: [] as GrapeItem[] };
type State = Readonly<typeof initialState>;

export class GrapesApp extends React.Component {
    public readonly state: State = initialState;
    private logger: Logger = new Logger("GrapesApp");
    private readonly grapesUrl = "/rest/grapes";

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    public render() {
        if (this.state) {
            return <GrapesList grapes={this.state.grapes}
                               handleEdit={this.handleEdit.bind(this)}
                               handleSave={this.handleSave.bind(this)}
                               onChange={this.onChange.bind(this)} />;
        } else {
            return <Preloader/>;
        }
    }

    public componentDidMount() {
        fetch(this.grapesUrl)
            .then((resp) => {
                return resp.json();
            })
            .then((restGrapes: IRESTObject[]) => {
                const grapes: GrapeItem[] = restGrapes.map(
                    (g) => new GrapeItem(g.id, g.name),
                );
                this.setState({ grapes });
            });
    }

    public onChange(id: number, name: string) {
        const [ changed, grapes ] = _.partition(this.state.grapes, (g) => g.id === id);
        changed[0].name = name;
        this.setState({
            grapes: changed.concat(grapes),
        });
    }

    /**
     * Updates state to reflect that a grape is editable.
     *
     * @param id of the grape whose 'edit' button was clicked
     */
    public handleEdit(id: number) {
        const [ edited, grapes ] = _.partition(this.state.grapes, (g) => g.id === id);
        edited[0].isEditable = true;
        this.setState({
            grapes: edited.concat(grapes),
        });
    }

    public handleSave(id: number) {
        const [ saved, grapes ] = _.partition(this.state.grapes, (g) => g.id === id);
        saved[0].isEditable = false;
        console.log(JSON.stringify(saved[0]));
        fetch(this.grapesUrl, {
            body: JSON.stringify({id: saved[0].id, name: saved[0].name}),
            method: "PUT",
        }).catch((e) => {
            this.logger.logError(`Failed to save grape change for grape with id ${id}`
                                 + ` and error message ${e.message}`);
        });
        this.setState({grapes: saved.concat(grapes)});
    }
}
