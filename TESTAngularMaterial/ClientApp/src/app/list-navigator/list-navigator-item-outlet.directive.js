"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNavigatorItemOutlet = void 0;
var core_1 = require("@angular/core");
var list_navigator_component_1 = require("./list-navigator.component");
var ListNavigatorItemOutlet = /** @class */ (function () {
    function ListNavigatorItemOutlet(_viewContainer) {
        this._viewContainer = _viewContainer;
    }
    ListNavigatorItemOutlet.prototype.ngOnChanges = function (changes) {
        //this._viewContainer.createEmbeddedView(changes['template'].currentValue, changes['context'].currentValue);
        var _this = this;
        var _a = list_navigator_component_1.analyzeChanges(changes, 'template', function () { return _this.template; }), tmpl = _a[1];
        var _b = list_navigator_component_1.analyzeChanges(changes, 'context', function () { return _this.context; }), ctx = _b[1];
        if (tmpl && ctx) {
            this._viewContainer.createEmbeddedView(tmpl, ctx);
        }
    };
    __decorate([
        core_1.Input()
    ], ListNavigatorItemOutlet.prototype, "template", void 0);
    __decorate([
        core_1.Input()
    ], ListNavigatorItemOutlet.prototype, "context", void 0);
    ListNavigatorItemOutlet = __decorate([
        core_1.Directive({
            selector: "list-navigator-item-outlet"
        })
    ], ListNavigatorItemOutlet);
    return ListNavigatorItemOutlet;
}());
exports.ListNavigatorItemOutlet = ListNavigatorItemOutlet;
//# sourceMappingURL=list-navigator-item-outlet.directive.js.map