/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/sigmajs/index.d.ts" />
import { Wine } from "./models/Wine.js";
var GraphContainer = /** @class */ (function () {
    function GraphContainer(wineId) {
        console.log("hello");
        this.container = new sigma("graph-container");
        var wine = new Wine(wineId);
        this.addNode(wine);
    }
    GraphContainer.prototype.addNode = function (graphModel) {
        this.container.graph.addNode({
            id: graphModel.fullId(),
            label: graphModel.label(),
        });
        this.refresh();
    };
    GraphContainer.prototype.addEdge = function (src, dest) {
        this.container.graph.addEdge({
            id: src.fullId() + "-" + dest.fullId(),
            source: src.fullId(),
            target: dest.fullId(),
        });
        this.refresh();
    };
    GraphContainer.prototype.addRelatedModels = function (root, related) {
        for (var _i = 0, related_1 = related; _i < related_1.length; _i++) {
            var model = related_1[_i];
            this.addNode(model);
            this.addEdge(root, model);
        }
    };
    GraphContainer.prototype.refresh = function () {
        this.container.refresh();
    };
    return GraphContainer;
}());
export { GraphContainer };
//# sourceMappingURL=GraphContainer.js.map