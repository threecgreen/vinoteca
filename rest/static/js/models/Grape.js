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
import { WineGrape } from "./WineGrape";
var Grape = /** @class */ (function (_super) {
    __extends(Grape, _super);
    function Grape(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        $.getJSON("/rest/grape/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
        Grape.instances[id] = _this;
        return _this;
    }
    Grape.getById = function (id) {
        return Grape.instances[id];
    };
    Grape.prototype.getRelatedObjects = function () {
        return WineGrape.getByGrapeId(this.id);
    };
    return Grape;
}(GraphModel));
export { Grape };
//# sourceMappingURL=Grape.js.map