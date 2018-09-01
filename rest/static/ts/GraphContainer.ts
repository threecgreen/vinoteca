/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/sigmajs/index.d.ts" />

import { GraphModel } from "./models/GraphModel.js";
import { Wine } from "./models/Wine.js";

export class GraphContainer {
    private container: SigmaJs.Sigma;

    constructor(wineId: number) {
        console.log("hello");
        this.container = new sigma("graph-container");
        const wine = new Wine(wineId);
        this.addNode(wine);
    }

    public addNode(graphModel: GraphModel) {
        this.container.graph.addNode({
            id: graphModel.fullId(),
            label: graphModel.label(),
        });
        this.refresh();
    }

    public addEdge(src: GraphModel, dest: GraphModel) {
        this.container.graph.addEdge({
            id: `${src.fullId()}-${dest.fullId()}`,
            source: src.fullId(),
            target: dest.fullId(),
        });
        this.refresh();
    }

    public addRelatedModels(root: GraphModel, related: GraphModel[]) {
        for (const model of related) {
            this.addNode(model);
            this.addEdge(root, model);
        }
    }

    private refresh() {
        this.container.refresh();
    }
}
