var GraphModel = /** @class */ (function () {
    function GraphModel() {
    }
    // @ts-ignore
    GraphModel.getById = function (id) {
        return null;
    };
    GraphModel.assembleNonNulled = function (models) {
        var nonNulledModels = [];
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var element = models_1[_i];
            if (element instanceof GraphModel) {
                nonNulledModels.push(element);
            }
        }
        return nonNulledModels;
    };
    GraphModel.prototype.label = function () {
        return this.name;
    };
    GraphModel.prototype.displayColor = function () {
        return "#555";
    };
    return GraphModel;
}());
export { GraphModel };
//# sourceMappingURL=GraphModel.js.map