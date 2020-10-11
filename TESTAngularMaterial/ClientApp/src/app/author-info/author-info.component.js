"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorInfo = exports.AuthorInfoComponent = void 0;
var core_1 = require("@angular/core");
var AuthorInfoComponent = /** @class */ (function () {
    function AuthorInfoComponent() {
    }
    __decorate([
        core_1.Input()
    ], AuthorInfoComponent.prototype, "login", void 0);
    __decorate([
        core_1.Input()
    ], AuthorInfoComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AuthorInfoComponent.prototype, "accountId", void 0);
    __decorate([
        core_1.Input()
    ], AuthorInfoComponent.prototype, "unitName", void 0);
    __decorate([
        core_1.Input()
    ], AuthorInfoComponent.prototype, "cfoName", void 0);
    AuthorInfoComponent = __decorate([
        core_1.Component({
            selector: 'author-info',
            templateUrl: './author-info.component.html',
            styleUrls: ['./author-info.component.css']
        })
    ], AuthorInfoComponent);
    return AuthorInfoComponent;
}());
exports.AuthorInfoComponent = AuthorInfoComponent;
var AuthorInfo = /** @class */ (function () {
    function AuthorInfo(login, name, accountId, unitName, cfo) {
        this.login = login;
        this.name = name;
        this.accountId = accountId;
        this.unitName = unitName;
        this.cfo = cfo;
    }
    return AuthorInfo;
}());
exports.AuthorInfo = AuthorInfo;
//# sourceMappingURL=author-info.component.js.map