"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNavigatorComponent = exports.analyzeChanges = void 0;
var core_1 = require("@angular/core");
var list_navigator_item_context_1 = require("./list-navigator-item.context");
var list_navigator_item_directive_1 = require("./list-navigator-item.directive");
function analyzeChanges(changes, propname, defValue) {
    //const regExp = new RegExp("_this\.(.+?);");
    //const match: RegExpExecArray = regExp.exec(defValue.toString());
    //if (match.length < 2)
    //{
    //  throw new Error("Could not find property name");
    //}
    //const propertyName = match[1];
    var simpleChange = changes[propname];
    if (simpleChange != undefined) {
        return [true, (simpleChange.currentValue), simpleChange.isFirstChange() ? undefined : simpleChange.previousValue];
    }
    return [false, defValue(), defValue()];
}
exports.analyzeChanges = analyzeChanges;
var ListNavigatorComponent = /** @class */ (function () {
    function ListNavigatorComponent() {
        this._currentOffset = 0;
        this.itemsToDisplay = [];
        this.pageSize = 5;
        this.selectedItems = [];
        this.selectedItemsChange = new core_1.EventEmitter();
    }
    Object.defineProperty(ListNavigatorComponent.prototype, "prevEnabled", {
        get: function () {
            return this._currentOffset - this.pageSize >= 0;
        },
        enumerable: false,
        configurable: true
    });
    ListNavigatorComponent.prototype.ngAfterContentInit = function () {
        if (!this.templateOutlet) {
            console.error("'list-navigator' component has to contain 'list-navigator-item' template directive");
        }
        else if (!this.templateOutlet.templateRef) {
            console.error("Use '*' in front of 'list-navigator-item' or put 'list-navigator-item' as an attribute into <template> directive");
        }
        globalThis.LNAV = this;
    };
    ListNavigatorComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var _a = analyzeChanges(changes, 'dataSource', function () { return _this.dataSource; }), dsChanged = _a[0], dsValue = _a[1];
        var _b = analyzeChanges(changes, 'templateOutlet', function () { return _this.templateOutlet; }), tplChanged = _b[0], tplOutlet = _b[1];
        var _c = analyzeChanges(changes, 'selectedItems', function () { return _this.selectedItems; }), selectedItemsChanged = _c[0], selectedItems = _c[1];
        if (dsChanged || tplChanged) {
            this.itemsToDisplay = [];
            if (tplOutlet && tplOutlet.templateRef && dsValue) {
                this.onNext(0);
            }
        }
        if (selectedItemsChanged && this.itemsToDisplay && this.itemsToDisplay.length > 0) {
            this.itemsToDisplay.forEach(function (i) { i.selected = selectedItems.indexOf(i.$implicit) >= 0; });
        }
    };
    ListNavigatorComponent.prototype.onPrev = function () {
        this._currentOffset -= this.pageSize;
        this.itemsToDisplay = this.getItemContexts(this._currentOffset, this.pageSize);
        this.nextEnabled = true;
    };
    ListNavigatorComponent.prototype.onNext = function (forcedOffset) {
        var newOffset = (forcedOffset === null || forcedOffset === undefined)
            ? this._currentOffset + this.pageSize
            : forcedOffset;
        var next = this.getItemContexts(newOffset, this.pageSize + 1);
        this.nextEnabled = false;
        if (next && next.length > 0) {
            this.nextEnabled = next.length === this.pageSize + 1;
            this.itemsToDisplay = next.slice(0, this.pageSize);
            this._currentOffset = newOffset;
        }
    };
    ListNavigatorComponent.prototype.onSelectedChange = function (itemContext, cbValue) {
        if (cbValue) {
            if (this.selectedItems.indexOf(itemContext.$implicit) < 0) {
                this.selectedItems = Object.assign([], this.selectedItems);
                this.selectedItems.push(itemContext.$implicit);
                this.selectedItemsChange.next(this.selectedItems);
            }
        }
        else {
            var idx = this.selectedItems.indexOf(itemContext.$implicit);
            if (idx >= 0) {
                this.selectedItems = Object.assign([], this.selectedItems);
                this.selectedItems.splice(idx, 1);
                this.selectedItemsChange.next(this.selectedItems);
            }
        }
        itemContext.selected = cbValue;
    };
    ListNavigatorComponent.prototype.getItemContexts = function (offset, pageSize) {
        var _this = this;
        return this
            .dataSource(offset, pageSize)
            .map(function (i) { return new list_navigator_item_context_1.ListNavigatorItemContext(i, _this.selectedItems.indexOf(i) >= 0); });
    };
    __decorate([
        core_1.ContentChild(list_navigator_item_directive_1.ListNavigatorItem, { static: false })
    ], ListNavigatorComponent.prototype, "templateOutlet", void 0);
    __decorate([
        core_1.Input()
    ], ListNavigatorComponent.prototype, "dataSource", void 0);
    __decorate([
        core_1.Input()
    ], ListNavigatorComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input()
    ], ListNavigatorComponent.prototype, "selectedItems", void 0);
    __decorate([
        core_1.Output()
    ], ListNavigatorComponent.prototype, "selectedItemsChange", void 0);
    ListNavigatorComponent = __decorate([
        core_1.Component({
            selector: 'list-navigator',
            templateUrl: 'list-navigator.component.html',
            styleUrls: ['list-navigator.style.css']
        })
    ], ListNavigatorComponent);
    return ListNavigatorComponent;
}());
exports.ListNavigatorComponent = ListNavigatorComponent;
//# sourceMappingURL=list-navigator.component.js.map