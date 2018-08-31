/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/sigmajs/index.d.ts" />
/// <reference path="./models/Wine.ts" />
import { Wine } from "./models/Wine";
var WineGraph = /** @class */ (function () {
    function WineGraph(wineId) {
        this.container = new sigma("graph-container");
        this.rootWine = new Wine(wineId);
    }
    return WineGraph;
}());
export { WineGraph };
//# sourceMappingURL=graph.js.map