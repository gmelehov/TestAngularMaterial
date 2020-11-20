"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNavigatorModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var list_navigator_component_1 = require("./list-navigator.component");
var list_navigator_item_directive_1 = require("./list-navigator-item.directive");
var list_navigator_item_outlet_directive_1 = require("./list-navigator-item-outlet.directive");
var checkbox_1 = require("@angular/material/checkbox");
var list_1 = require("@angular/material/list");
var ListNavigatorModule = /** @class */ (function () {
    function ListNavigatorModule() {
    }
    ListNavigatorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, checkbox_1.MatCheckboxModule, list_1.MatListModule],
            declarations: [list_navigator_component_1.ListNavigatorComponent, list_navigator_item_directive_1.ListNavigatorItem, list_navigator_item_outlet_directive_1.ListNavigatorItemOutlet],
            exports: [list_navigator_component_1.ListNavigatorComponent, list_navigator_item_directive_1.ListNavigatorItem]
        })
    ], ListNavigatorModule);
    return ListNavigatorModule;
}());
exports.ListNavigatorModule = ListNavigatorModule;
//# sourceMappingURL=list-navigator.module.js.map