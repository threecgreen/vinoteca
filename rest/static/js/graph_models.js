/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
var Color = /** @class */ (function () {
    function Color(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/color/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return Color;
}());
export { Color };
var Region = /** @class */ (function () {
    function Region(id, name, is_us) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/region/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
            _this.is_us = responseJSON["is_us"];
        });
    }
    return Region;
}());
export { Region };
var Grape = /** @class */ (function () {
    function Grape(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/grape/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return Grape;
}());
export { Grape };
var Producer = /** @class */ (function () {
    function Producer(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/producer/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
            _this.region = responseJSON["name"];
        });
    }
    return Producer;
}());
export { Producer };
var VitiArea = /** @class */ (function () {
    function VitiArea(id) {
        this.id = id;
    }
    return VitiArea;
}());
export { VitiArea };
var WineGrape = /** @class */ (function () {
    // Since this class represents an edge rather than a node, all data should have
    // already been retrieved
    function WineGrape(id, grape, wine, percent) {
        this.id = id;
        this.grape = grape;
        this.wine = wine;
        this.percent = percent;
    }
    return WineGrape;
}());
export { WineGrape };
var WineType = /** @class */ (function () {
    function WineType(id) {
        var _this = this;
        this.id = id;
        $.getJSON("/rest/wine-type/", { "id": id }, function (responseJSON) {
            _this.name = responseJSON["name"];
        });
    }
    return WineType;
}());
export { WineType };
var Wine = /** @class */ (function () {
    function Wine(id, name, producer, wine_type, color, viti_area) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        // Always fetch wine_type since it is part of the full name (name + type)
        this.wine_type = new WineType(wine_type);
        this.color = color;
        this.viti_area = viti_area;
    }
    Wine.prototype.full_name = function () {
        return this.name ? this.name + " " + this.wine_type.name : this.wine_type.name;
    };
    Wine.prototype.fetch_producer = function () {
        if (!typeof (this.producer, Producer)) {
            this.producer = new Producer(this.producer);
        }
    };
    return Wine;
}());
export { Wine };
//# sourceMappingURL=graph_models.js.map