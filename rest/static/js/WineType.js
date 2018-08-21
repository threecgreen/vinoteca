/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var WineType = /** @class */ (function () {
    function WineType(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/wine-type/", "{id}", function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return WineType;
}());
export { WineType };
//# sourceMappingURL=WineType.js.map