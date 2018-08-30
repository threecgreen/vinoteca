/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GraphModel } from "./GraphModel";
var WineGrape = /** @class */ (function (_super) {
    __extends(WineGrape, _super);
    // Since this class represents an edge rather than a node, all data should have
    // already been retrieved
    function WineGrape(id, grape, wine, percent) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.grape = grape;
        _this.wine = wine;
        _this.percent = percent;
        WineGrape.instances[id] = _this;
        return _this;
    }
    WineGrape.getById = function (id) {
        return WineGrape.instances[id];
        // TODO: hit database
    };
    WineGrape.getByGrapeId = function (grapeId) {
        return null;
    };
    WineGrape.prototype.getRelatedObjects = function () {
        // TODO: add wine back in
        return [this.grape];
    };
    return WineGrape;
}(GraphModel));
export { WineGrape };
//# sourceMappingURL=WineGrape.js.map