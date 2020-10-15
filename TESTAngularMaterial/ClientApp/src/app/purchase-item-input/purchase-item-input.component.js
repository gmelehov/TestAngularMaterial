"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseItem = exports.PurchaseItemInputComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var PurchaseItemInputComponent = /** @class */ (function () {
    function PurchaseItemInputComponent() {
        this.isOpen = false;
        this.isUp = false;
        this.stateChanges = new rxjs_1.Subject();
        /** Список валют */
        this.currenciesList = [
            'RUR',
            'USD',
            'EUR',
            'GBP'
        ];
        this.newItemEvent = new core_1.EventEmitter();
        this.removeItemEvent = new core_1.EventEmitter();
        this.dataChangedEvent = new core_1.EventEmitter();
        this.value = new PurchaseItem(0, '', 'RUR', 0, 20, '');
    }
    PurchaseItemInputComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
        this.isUp = !this.isUp;
    };
    Object.defineProperty(PurchaseItemInputComponent.prototype, "index", {
        /** Внутренний индекс элемента в списке */
        get: function () {
            return this.value.index;
        },
        set: function (_index) {
            this.value.index = _index;
            this.stateChanges.next();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseItemInputComponent.prototype, "name", {
        /** Наименование позиции */
        get: function () {
            return this.value.name;
        },
        set: function (_name) {
            this.value.name = _name;
            this.stateChanges.next();
            this.doDataChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseItemInputComponent.prototype, "currency", {
        /** Валюта */
        get: function () {
            return this.value.currency;
        },
        set: function (_currency) {
            this.value.currency = _currency;
            this.stateChanges.next();
            this.doDataChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseItemInputComponent.prototype, "cost", {
        /** Стоимость */
        get: function () {
            return this.value.cost;
        },
        set: function (_cost) {
            this.value.cost = _cost;
            this.stateChanges.next();
            this.doDataChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseItemInputComponent.prototype, "vatRate", {
        /** Ставка НДС */
        get: function () {
            return this.value.vatRate;
        },
        set: function (_vatRate) {
            this.value.vatRate = _vatRate;
            this.stateChanges.next();
            this.doDataChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseItemInputComponent.prototype, "budgetItem", {
        /** Статья бюджета */
        get: function () {
            return this.value.budgetItem;
        },
        set: function (_budgetItem) {
            this.value.budgetItem = _budgetItem;
            this.stateChanges.next();
            this.doDataChange();
        },
        enumerable: false,
        configurable: true
    });
    PurchaseItemInputComponent.prototype.addNewItem = function (value) {
        this.newItemEvent.emit(value);
    };
    PurchaseItemInputComponent.prototype.removeItem = function (value) {
        this.removeItemEvent.emit(value);
    };
    PurchaseItemInputComponent.prototype.doDataChange = function () {
        this.dataChangedEvent.emit(this.value);
    };
    __decorate([
        core_1.Input()
    ], PurchaseItemInputComponent.prototype, "index", null);
    __decorate([
        core_1.Input()
    ], PurchaseItemInputComponent.prototype, "name", null);
    __decorate([
        core_1.Input()
    ], PurchaseItemInputComponent.prototype, "currency", null);
    __decorate([
        core_1.Input()
    ], PurchaseItemInputComponent.prototype, "cost", null);
    __decorate([
        core_1.Input()
    ], PurchaseItemInputComponent.prototype, "vatRate", null);
    __decorate([
        core_1.Input()
    ], PurchaseItemInputComponent.prototype, "budgetItem", null);
    __decorate([
        core_1.Output()
    ], PurchaseItemInputComponent.prototype, "newItemEvent", void 0);
    __decorate([
        core_1.Output()
    ], PurchaseItemInputComponent.prototype, "removeItemEvent", void 0);
    __decorate([
        core_1.Output()
    ], PurchaseItemInputComponent.prototype, "dataChangedEvent", void 0);
    PurchaseItemInputComponent = __decorate([
        core_1.Component({
            selector: 'purchase-item-input',
            templateUrl: './purchase-item-input.component.html',
            styleUrls: ['./purchase-item-input.component.css'],
            animations: [
                animations_1.trigger('openClose', [
                    animations_1.state('open', animations_1.style({ height: '100%', visibility: 'visible', paddingTop: '32px' })),
                    animations_1.state('closed', animations_1.style({ height: '0', visibility: 'hidden', paddingTop: '0px' })),
                    animations_1.transition('open => closed', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                    animations_1.transition('closed => open', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                ]),
                animations_1.trigger('upDown', [
                    animations_1.state('up', animations_1.style({ transform: 'rotate(180deg)' })),
                    animations_1.state('down', animations_1.style({ transform: 'rotate(0)' })),
                    animations_1.transition('up => down', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                    animations_1.transition('down => up', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                ]),
            ]
        })
    ], PurchaseItemInputComponent);
    return PurchaseItemInputComponent;
}());
exports.PurchaseItemInputComponent = PurchaseItemInputComponent;
var PurchaseItem = /** @class */ (function () {
    function PurchaseItem(index, name, currency, cost, vatRate, budgetItem) {
        this.index = index;
        this.name = name;
        this.currency = currency;
        this.cost = cost;
        this.vatRate = vatRate;
        this.budgetItem = budgetItem;
    }
    return PurchaseItem;
}());
exports.PurchaseItem = PurchaseItem;
//# sourceMappingURL=purchase-item-input.component.js.map