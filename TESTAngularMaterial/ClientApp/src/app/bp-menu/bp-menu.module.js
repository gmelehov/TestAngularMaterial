"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BPMenuModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ng_polymorpheus_1 = require("@tinkoff/ng-polymorpheus");
var bp_menu_component_1 = require("./bp-menu.component");
var BPMenuModule = /** @class */ (function () {
    function BPMenuModule() {
    }
    BPMenuModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng_polymorpheus_1.PolymorpheusModule],
            declarations: [bp_menu_component_1.BPMenuComponent],
            exports: [bp_menu_component_1.BPMenuComponent],
        })
    ], BPMenuModule);
    return BPMenuModule;
}());
exports.BPMenuModule = BPMenuModule;
//# sourceMappingURL=bp-menu.module.js.map