/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var WineGrape = /** @class */ (function () {
    // Since this class represents an edge rather than a node, all data should have
    // already been retrieved
    function WineGrape(id, grape, wine, percent) {
        this.id = id;
        this.grape = grape;
        this.wine = wine;
        this.percent = percent;
    }
    return WineGrape;
}());
export { WineGrape };
//# sourceMappingURL=WineGrape.js.map