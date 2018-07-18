/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/sigmajs/index.d.ts" />
/// <reference path="./graph_models.ts" />

import { Wine } from "./graph_models";

export function addWine(sigma: SigmaJs.Sigma, wine: Wine) {
    sigma.graph.addNode({
        id: `wine${wine.id}`,
        label: `${wine.name} ${wine.wine_type}`,
    });
}
