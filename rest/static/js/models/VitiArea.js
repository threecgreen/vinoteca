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
import { GraphModel } from "./GraphModel.js";
var VitiArea = /** @class */ (function (_super) {
    __extends(VitiArea, _super);
    function VitiArea(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        VitiArea.instances[id] = _this;
        return _this;
    }
    VitiArea.getById = function (id) {
        return VitiArea.instances[id];
    };
    VitiArea.prototype.getRelatedObjects = function () {
        return null;
    };
    VitiArea.prototype.fullId = function () {
        return "va-" + this.id;
    };
    return VitiArea;
}(GraphModel));
export { VitiArea };
//# sourceMappingURL=VitiArea.js.map