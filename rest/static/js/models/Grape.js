/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var Grape = /** @class */ (function () {
    function Grape(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/grape/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return Grape;
}());
export { Grape };
//# sourceMappingURL=Grape.js.map