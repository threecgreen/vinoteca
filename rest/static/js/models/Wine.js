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
import { Color } from "./Color";
import { Producer } from "./Producer";
import { VitiArea } from "./VitiArea";
import { WineType } from "./WineType";
var Wine = /** @class */ (function (_super) {
    __extends(Wine, _super);
    function Wine(id, name, producer, wineType, color, vitiArea) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.producer = producer;
        // Always fetch wine_type since it is part of the full name (name + type)
        _this.wineType = new WineType(wineType);
        _this.color = color;
        _this.vitiArea = vitiArea;
        return _this;
    }
    Wine.prototype.fullName = function () {
        return this.name ? this.name + " " + this.wineType.name : this.wineType.name;
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