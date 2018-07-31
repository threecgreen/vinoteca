var Color = /** @class */ (function () {
    function Color(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/graph/rest/color/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return Color;
}());
var Region = /** @class */ (function () {
    function Region(id, name, is_us) {
        var _this = this;
        this.id = id;
        $.getJSON("/graph/rest/region/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
            _this.is_us = responseJSON["is_us"];
        });
    }
    return Region;
}());
var Grape = /** @class */ (function () {
    function Grape(id, name) {
    }
    return Grape;
}());
var Producer = /** @class */ (function () {
    function Producer(id, name, region) {
    }
    return Producer;
}());
var VitiArea = /** @class */ (function () {
    function VitiArea(id, name) {
    }
    return VitiArea;
}());
var WineGrape = /** @class */ (function () {
    function WineGrape(id, wine, grape) {
    }
    return WineGrape;
}());
var WineType = /** @class */ (function () {
    function WineType(id, name) {
    }
    return WineType;
}());
var Wine = /** @class */ (function () {
    function Wine(id, name, producer, wine_type, color, viti_area) {
    }
    return Wine;
}());
//# sourceMappingURL=graph_models.js.map