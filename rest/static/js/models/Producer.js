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
import { GraphModel } from "./GraphModel";
import { Region } from "./Region";
var Producer = /** @class */ (function (_super) {
    __extends(Producer, _super);
    function Producer(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        Producer.instances[id] = _this;
        return _this;
    }
    Producer.getById = function (id) {
        return Producer.instances[id];
    };
    Producer.prototype.getRelatedObjects = function () {
        this.fetchRegion();
        return Producer.assembleNonNulled([this.region]);
    };
    Producer.prototype.fetchRegion = function () {
        var _this = this;
        if (!(this.region instanceof Region)) {
            $.getJSON("/rest/producer/", { id: this.id }, function (responseJSON) {
                var producer = responseJSON.items[0];
                _this.name = producer["name"];
                _this.region = producer["region"];
            });
        }
    };
    return Producer;
}(GraphModel));
export { Producer };
//# sourceMappingURL=Producer.js.map