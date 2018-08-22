/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var Color = /** @class */ (function () {
    function Color(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/color/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return Color;
}());
export { Color };
//# sourceMappingURL=Color.js.map