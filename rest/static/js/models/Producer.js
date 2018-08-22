/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
var Producer = /** @class */ (function () {
    function Producer(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/producer/", { id: id }, function (responseJSON) {
            _this.name = responseJSON["name"];
            _this.region = responseJSON["region"];
        });
    }
    return Producer;
}());
export { Producer };
//# sourceMappingURL=Producer.js.map