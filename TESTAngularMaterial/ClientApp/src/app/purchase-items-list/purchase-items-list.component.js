"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseItemsListComponent = void 0;
var core_1 = require("@angular/core");
var purchase_item_input_component_1 = require("../purchase-item-input/purchase-item-input.component");
var PurchaseItemsListComponent = /** @class */ (function () {
    function PurchaseItemsListComponent() {
        this.items = [];
        this.itemAddedEvent = new core_1.EventEmitter();
        this.initItems();
        globalThis.PLIST = this;
    }
    PurchaseItemsListComponent.prototype.onItemAdded = function (value) {
        this.itemAddedEvent.emit(value);
    };
    PurchaseItemsListComponent.prototype.initItems = function () {
        var _this = this;
        if (this.getTotalItems() === 0) {
            var item = new purchase_item_input_component_1.PurchaseItem(0, '', 'RUR', 0, 20, '');
            this.items.push(item);
            setTimeout(function () {
                _this.onItemAdded(_this.items);
            }, 0);
        }
    };
    PurchaseItemsListComponent.prototype.addItem = function (newItemIndex) {
        var _this = this;
        var count = this.getTotalItems();
        setTimeout(function () {
            var item = new purchase_item_input_component_1.PurchaseItem(count, '', 'RUR', 0, 20, '');
            _this.items.push(item);
            _this.recalculateIndices();
            _this.onItemAdded(_this.items);
        }, 0);
    };
    PurchaseItemsListComponent.prototype.removeItem = function (index) {
        var _this = this;
        var count = this.getTotalItems();
        if (count > 1) {
            this.items.splice(index, 1);
            setTimeout(function () {
                _this.recalculateIndices();
                _this.onItemAdded(_this.items);
            }, 0);
        }
    };
    PurchaseItemsListComponent.prototype.updateItem = function (item) {
        var _this = this;
        var index = item.index;
        var found = this.getItemByIndex(index);
        if (!!found) {
            found.name = item.name;
            found.cost = item.cost;
            found.currency = item.currency;
            found.vatRate = item.vatRate;
            found.budgetItem = item.budgetItem;
            setTimeout(function () {
                _this.onItemAdded(_this.items);
            }, 0);
        }
    };
    PurchaseItemsListComponent.prototype.recalculateIndices = function () {
        this.items.forEach(function (it, ind) { return it.index = ind; });
    };
    PurchaseItemsListComponent.prototype.getTotalItems = function () {
        return this.items.length;
    };
    PurchaseItemsListComponent.prototype.getItemByIndex = function (index) {
        return this.items.find(function (f) { return f.index === index; });
    };
    __decorate([
        core_1.Output()
    ], PurchaseItemsListComponent.prototype, "itemAddedEvent", void 0);
    PurchaseItemsListComponent = __decorate([
        core_1.Component({
            selector: 'purchase-items-list',
            templateUrl: './purchase-items-list.component.html',
            styleUrls: ['./purchase-items-list.component.css']
        })
    ], PurchaseItemsListComponent);
    return PurchaseItemsListComponent;
}());
exports.PurchaseItemsListComponent = PurchaseItemsListComponent;
//# sourceMappingURL=purchase-items-list.component.js.map