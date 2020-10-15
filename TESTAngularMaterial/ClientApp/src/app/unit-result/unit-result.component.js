"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitResultComponent = void 0;
var core_1 = require("@angular/core");
var unit_result_model_1 = require("../models/unit-result.model");
var UnitResultComponent = /** @class */ (function () {
    function UnitResultComponent() {
        this.value = new unit_result_model_1.UnitResultModel();
    }
    Object.defineProperty(UnitResultComponent.prototype, "unit", {
        get: function () {
            return this.value.unit;
        },
        set: function (val) {
            this.value.unit = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnitResultComponent.prototype, "decision", {
        get: function () {
            return this.value.decision;
        },
        set: function (val) {
            this.value.decision = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnitResultComponent.prototype, "comment", {
        get: function () {
            return this.value.comment;
        },
        set: function (val) {
            this.value.comment = val;
        },
        enumerable: false,
        configurable: true
    });
    UnitResultComponent.prototype.saveResult = function () {
        if (!!this.value) {
            this.value.markAsFinished();
        }
        ;
    };
    __decorate([
        core_1.Input()
    ], UnitResultComponent.prototype, "unit", null);
    __decorate([
        core_1.Input()
    ], UnitResultComponent.prototype, "decision", null);
    __decorate([
        core_1.Input()
    ], UnitResultComponent.prototype, "comment", null);
    UnitResultComponent = __decorate([
        core_1.Component({
            selector: 'unit-result',
            templateUrl: './unit-result.component.html',
            styleUrls: ['./unit-result.component.css']
        })
    ], UnitResultComponent);
    return UnitResultComponent;
}());
exports.UnitResultComponent = UnitResultComponent;
//# sourceMappingURL=unit-result.component.js.map