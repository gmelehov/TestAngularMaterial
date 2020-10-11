"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CfoModel = exports.PurchaseRequest = exports.PurchaseRequestComponent = void 0;
var core_1 = require("@angular/core");
var author_info_component_1 = require("../author-info/author-info.component");
var budget_period_selector_component_1 = require("../budget-period-selector/budget-period-selector.component");
var PurchaseRequestComponent = /** @class */ (function () {
    function PurchaseRequestComponent() {
        this.cfoList = [
            new CfoModel('cfo1', 'ЦФО №1'),
            new CfoModel('cfo2', 'ЦФО №2'),
            new CfoModel('cfo3', 'ЦФО №3'),
            new CfoModel('cfo4', 'ЦФО №4'),
            new CfoModel('cfo5', 'ЦФО №5'),
        ];
        this.companiesList = [
            'Европлан',
            'Европлан Сервис',
            'Автолизинг'
        ];
        var now = new Date(Date.now());
        var acfo = new CfoModel('cfo2', 'ЦФО №2');
        var tcfo = new CfoModel('cfo2', 'ЦФО №2');
        var ainfo = new author_info_component_1.AuthorInfo('gnm2', 'Мелехов Григорий Николаевич', 'gnm2@msc', 'Департамент Информационных технологий', acfo);
        this.value = new PurchaseRequest(now, ainfo, tcfo, 'Европлан', new budget_period_selector_component_1.BudgetPeriod());
        globalThis.PREQ = this;
    }
    Object.defineProperty(PurchaseRequestComponent.prototype, "createdAt", {
        get: function () {
            return this.value.createdAt;
        },
        set: function (val) {
            this.value.createdAt = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "authorLogin", {
        get: function () {
            return this.value.authorInfo.login;
        },
        set: function (val) {
            this.value.authorInfo.login = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "authorAccId", {
        get: function () {
            return this.value.authorInfo.accountId;
        },
        set: function (val) {
            this.value.authorInfo.accountId = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "authorName", {
        get: function () {
            return this.value.authorInfo.name;
        },
        set: function (val) {
            this.value.authorInfo.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "authorUnit", {
        get: function () {
            return this.value.authorInfo.unitName;
        },
        set: function (val) {
            this.value.authorInfo.unitName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "authorCfoGuid", {
        get: function () {
            return this.value.authorInfo.cfo.guid;
        },
        set: function (val) {
            this.value.authorInfo.cfo.guid = val;
            if (!!this.getCfoModelByGuid(val)) {
                this.value.authorInfo.cfo.name = this.getCfoModelByGuid(val).name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "targetCfoGuid", {
        get: function () {
            return this.value.targetCfo.guid;
        },
        set: function (val) {
            this.value.targetCfo.guid = val;
            if (!!this.getCfoModelByGuid(val)) {
                this.value.targetCfo.name = this.getCfoModelByGuid(val).name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "budgetPeriodMonth", {
        get: function () {
            return this.value.budgetPeriod.month;
        },
        set: function (val) {
            this.value.budgetPeriod.month = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "budgetPeriodYear", {
        get: function () {
            return this.value.budgetPeriod.year;
        },
        set: function (val) {
            this.value.budgetPeriod.year = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "company", {
        get: function () {
            return this.value.company;
        },
        set: function (val) {
            this.value.company = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "itemsList", {
        get: function () {
            return this.value.itemsList;
        },
        set: function (val) {
            this.value.itemsList = val;
        },
        enumerable: false,
        configurable: true
    });
    PurchaseRequestComponent.prototype.getCfoModelByGuid = function (guid) {
        var found = this.cfoList.find(function (f) { return f.guid === guid; });
        return found;
    };
    Object.defineProperty(PurchaseRequestComponent.prototype, "totalItems", {
        get: function () {
            return this.itemsList.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PurchaseRequestComponent.prototype, "totalItemsCost", {
        get: function () {
            return this.itemsList.map(function (m) { return m.cost; }).reduce(function (sum, curr) { return sum + curr; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    PurchaseRequestComponent.prototype.receiveBudgetMonth = function (value) {
        this.budgetPeriodMonth = value;
    };
    PurchaseRequestComponent.prototype.receiveBudgetYear = function (value) {
        this.budgetPeriodYear = value;
    };
    PurchaseRequestComponent.prototype.receivePurchaseItems = function (value) {
        this.itemsList = Array.from(value);
    };
    PurchaseRequestComponent.prototype.sendInfoToConsole = function () {
        console.dir(this);
    };
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "createdAt", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "authorLogin", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "authorAccId", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "authorName", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "authorUnit", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "authorCfoGuid", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "targetCfoGuid", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "budgetPeriodMonth", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "budgetPeriodYear", null);
    __decorate([
        core_1.Input()
    ], PurchaseRequestComponent.prototype, "company", null);
    PurchaseRequestComponent = __decorate([
        core_1.Component({
            selector: 'purchase-request',
            templateUrl: './purchase-request.component.html',
            styleUrls: ['./purchase-request.component.css']
        })
    ], PurchaseRequestComponent);
    return PurchaseRequestComponent;
}());
exports.PurchaseRequestComponent = PurchaseRequestComponent;
var PurchaseRequest = /** @class */ (function () {
    function PurchaseRequest(createdAt, authorInfo, targetCfo, company, budgetPeriod, itemsList) {
        if (itemsList === void 0) { itemsList = new Array(); }
        this.createdAt = createdAt;
        this.authorInfo = authorInfo;
        this.targetCfo = targetCfo;
        this.company = company;
        this.budgetPeriod = budgetPeriod;
        this.itemsList = itemsList;
    }
    return PurchaseRequest;
}());
exports.PurchaseRequest = PurchaseRequest;
var CfoModel = /** @class */ (function () {
    function CfoModel(guid, name) {
        this.guid = guid;
        this.name = name;
    }
    return CfoModel;
}());
exports.CfoModel = CfoModel;
//# sourceMappingURL=purchase-request.component.js.map