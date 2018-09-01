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
import { Color } from "./Color.js";
import { GraphModel } from "./GraphModel.js";
import { Producer } from "./Producer.js";
import { VitiArea } from "./VitiArea.js";
import { WineType } from "./WineType.js";
var Wine = /** @class */ (function (_super) {
    __extends(Wine, _super);
    function Wine(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        $.getJSON("/rest/wine/", { id: id }, function (responseJSON) {
            var wine = responseJSON[0];
            _this.name = wine["name"];
            _this.producer = wine["producer"];
            // Always fetch wine_type since it is part of the full name (name + type)
            _this.wineType = new WineType(wine["producer"]);
            _this.color = wine["color"];
            _this.vitiArea = wine["viti_area"];
        });
        return _this;
    }
    Wine.getById = function (id) {
        return Wine.instances[id];
    };
    Wine.prototype.label = function () {
        if (this.wineType === null) {
            setTimeout(this.label(), 500);
        }
        return this.name ? this.name + " " + this.wineType.name : this.wineType.name;
    };
    Wine.prototype.getRelatedObjects = function () {
        this.fetchProducer();
        this.fetchWineType();
        this.fetchColor();
        this.fetchVitiArea();
        // TODO: fetchWineGrapes
        return Wine.assembleNonNulled([this.producer, this.color, this.vitiArea,
            this.wineType]);
    };
    Wine.prototype.fullId = function () {
        return "w-" + this.id;
    };
    Wine.prototype.fetchProducer = function () {
        if (!(this.producer instanceof Producer)) {
            this.producer = new Producer(this.producer);
        }
    };
    Wine.prototype.fetchWineType = function () {
        if (!(this.wineType instanceof WineType)) {
            this.wineType = new WineType(this.wineType);
        }
    };
    Wine.prototype.fetchColor = function () {
        if (!(this.color instanceof Color)) {
            this.color = new Color(this.color);
        }
    };
    Wine.prototype.fetchVitiArea = function () {
        if (!(this.vitiArea instanceof VitiArea)) {
            this.vitiArea = new VitiArea(this.vitiArea);
        }
    };
    return Wine;
}(GraphModel));
export { Wine };
//# sourceMappingURL=Wine.js.map