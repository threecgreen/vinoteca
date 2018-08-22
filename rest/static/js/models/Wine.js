/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
import { Color } from "./Color";
import { Producer } from "./Producer";
import { VitiArea } from "./VitiArea";
import { WineType } from "./WineType";
var Wine = /** @class */ (function () {
    function Wine(id, name, producer, wineType, color, vitiArea) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        // Always fetch wine_type since it is part of the full name (name + type)
        this.wineType = new WineType(wineType);
        this.color = color;
        this.vitiArea = vitiArea;
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
}());
export { Wine };
//# sourceMappingURL=Wine.js.map