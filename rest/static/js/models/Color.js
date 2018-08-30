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
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        $.getJSON("/rest/color/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
        Color.instances[id] = _this;
        return _this;
    }
    Color.getById = function (id) {
        return Color.instances[id];
    };
    Color.prototype.getRelatedObjects = function () {
        return null;
    };
    return Color;
}(GraphModel));
export { Color };
//# sourceMappingURL=Color.js.map