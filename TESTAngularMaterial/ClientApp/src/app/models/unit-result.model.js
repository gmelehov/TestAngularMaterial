"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitResultModel = void 0;
var UnitResultModel = /** @class */ (function () {
    function UnitResultModel() {
    }
    UnitResultModel.prototype.markAsFinished = function () {
        if (!this.finishedAt) {
            this.finishedAt = new Date(Date.now());
        }
    };
    UnitResultModel.prototype.hasData = function () {
        return !!this.unit && !!this.decision && this.decision !== 'None';
    };
    UnitResultModel.prototype.isFinished = function () {
        return !!this.hasData() && !!this.finishedAt;
    };
    return UnitResultModel;
}());
exports.UnitResultModel = UnitResultModel;
//# sourceMappingURL=unit-result.model.js.map