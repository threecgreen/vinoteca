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
var Region = /** @class */ (function (_super) {
    __extends(Region, _super);
    function Region(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        $.getJSON("/rest/region/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
            _this.isUS = responseJSON["is_us"];
        });
        return _this;
    }
    return Region;
}(GraphModel));
export { Region };
//# sourceMappingURL=Region.js.map