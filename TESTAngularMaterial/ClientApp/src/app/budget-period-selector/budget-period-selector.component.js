"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetPeriod = exports.BudgetPeriodSelectorComponent = void 0;
var core_1 = require("@angular/core");
var form_field_1 = require("@angular/material/form-field");
var rxjs_1 = require("rxjs");
var BudgetPeriodSelectorComponent = /** @class */ (function () {
    function BudgetPeriodSelectorComponent() {
        this.stateChanges = new rxjs_1.Subject();
        this.ngControl = null;
        this.shouldLabelFloat = true;
        this.id = "budget-period-selector-" + BudgetPeriodSelectorComponent_1.nextId++;
        this.describedBy = '';
        this.controlType = 'budget-period-selector';
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.monthChangedEvent = new core_1.EventEmitter();
        this.yearChangedEvent = new core_1.EventEmitter();
        this.monthsList = [
            { value: 1, name: 'январь' },
            { value: 2, name: 'февраль' },
            { value: 3, name: 'март' },
            { value: 4, name: 'апрель' },
            { value: 5, name: 'май' },
            { value: 6, name: 'июнь' },
            { value: 7, name: 'июль' },
            { value: 8, name: 'август' },
            { value: 9, name: 'сентябрь' },
            { value: 10, name: 'октябрь' },
            { value: 11, name: 'ноябрь' },
            { value: 12, name: 'декабрь' },
        ];
        this.yearsList = [2020, 2021, 2022, 2023];
        this.value = new BudgetPeriod();
    }
    BudgetPeriodSelectorComponent_1 = BudgetPeriodSelectorComponent;
    BudgetPeriodSelectorComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    BudgetPeriodSelectorComponent.prototype.onContainerClick = function (event) {
    };
    Object.defineProperty(BudgetPeriodSelectorComponent.prototype, "month", {
        get: function () {
            return this.value.month;
        },
        set: function (val) {
            this.value.month = val;
            this.stateChanges.next();
            this.onMonthChanged(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetPeriodSelectorComponent.prototype, "year", {
        get: function () {
            return this.value.year;
        },
        set: function (val) {
            this.value.year = val;
            this.stateChanges.next();
            this.onYearChanged(val);
        },
        enumerable: false,
        configurable: true
    });
    BudgetPeriodSelectorComponent.prototype.getCurrentMonth = function () {
        var today = new Date(Date.now());
        var monthNum = today.getMonth() + 1;
        return this.monthsList.find(function (f) { return f.value === monthNum; });
    };
    BudgetPeriodSelectorComponent.prototype.getCurrentYear = function () {
        var today = new Date(Date.now());
        return today.getFullYear();
    };
    BudgetPeriodSelectorComponent.prototype.onMonthChanged = function (value) {
        this.monthChangedEvent.emit(value);
    };
    BudgetPeriodSelectorComponent.prototype.onYearChanged = function (value) {
        this.yearChangedEvent.emit(value);
    };
    var BudgetPeriodSelectorComponent_1;
    BudgetPeriodSelectorComponent.nextId = 0;
    __decorate([
        core_1.Input()
    ], BudgetPeriodSelectorComponent.prototype, "month", null);
    __decorate([
        core_1.Input()
    ], BudgetPeriodSelectorComponent.prototype, "year", null);
    __decorate([
        core_1.Output()
    ], BudgetPeriodSelectorComponent.prototype, "monthChangedEvent", void 0);
    __decorate([
        core_1.Output()
    ], BudgetPeriodSelectorComponent.prototype, "yearChangedEvent", void 0);
    BudgetPeriodSelectorComponent = BudgetPeriodSelectorComponent_1 = __decorate([
        core_1.Component({
            selector: 'budget-period-selector',
            templateUrl: './budget-period-selector.component.html',
            styleUrls: ['./budget-period-selector.component.css'],
            providers: [{ provide: form_field_1.MatFormFieldControl, useExisting: BudgetPeriodSelectorComponent_1 }]
        })
    ], BudgetPeriodSelectorComponent);
    return BudgetPeriodSelectorComponent;
}());
exports.BudgetPeriodSelectorComponent = BudgetPeriodSelectorComponent;
var BudgetPeriod = /** @class */ (function () {
    function BudgetPeriod(month, year) {
        this.month = month;
        this.year = year;
        this.monthsList = [
            { value: 1, name: 'январь' },
            { value: 2, name: 'февраль' },
            { value: 3, name: 'март' },
            { value: 4, name: 'апрель' },
            { value: 5, name: 'май' },
            { value: 6, name: 'июнь' },
            { value: 7, name: 'июль' },
            { value: 8, name: 'август' },
            { value: 9, name: 'сентябрь' },
            { value: 10, name: 'октябрь' },
            { value: 11, name: 'ноябрь' },
            { value: 12, name: 'декабрь' },
        ];
        this.month = month || this.getCurrentMonth().value;
        this.year = year || this.getCurrentYear();
    }
    BudgetPeriod.prototype.getCurrentMonth = function () {
        var today = new Date(Date.now());
        var monthNum = today.getMonth() + 1;
        return this.monthsList.find(function (f) { return f.value === monthNum; });
    };
    BudgetPeriod.prototype.getCurrentYear = function () {
        var today = new Date(Date.now());
        return today.getFullYear();
    };
    return BudgetPeriod;
}());
exports.BudgetPeriod = BudgetPeriod;
//# sourceMappingURL=budget-period-selector.component.js.map