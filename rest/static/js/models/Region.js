/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var Region = /** @class */ (function () {
    function Region(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/region/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
            _this.isUS = responseJSON["is_us"];
        });
    }
    return Region;
}());
export { Region };
//# sourceMappingURL=Region.js.map