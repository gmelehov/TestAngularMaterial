"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessProcessComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
/**
 * @title Stepper vertical
 */
var BusinessProcessComponent = /** @class */ (function () {
    function BusinessProcessComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    BusinessProcessComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', forms_1.Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', forms_1.Validators.required]
        });
    };
    BusinessProcessComponent = __decorate([
        core_1.Component({
            selector: 'business-process',
            templateUrl: 'business-process.component.html',
            styleUrls: ['business-process.component.css']
        })
    ], BusinessProcessComponent);
    return BusinessProcessComponent;
}());
exports.BusinessProcessComponent = BusinessProcessComponent;
//# sourceMappingURL=business-process.component.js.map