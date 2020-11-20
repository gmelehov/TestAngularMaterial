"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BPMenuComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var BPMenuComponent = /** @class */ (function () {
    function BPMenuComponent() {
        this.items = [];
        this.content = function (_a) {
            var $implicit = _a.$implicit;
            return String($implicit);
        };
        this.emptyContent = 'Nothing is found';
        this.itemClicked = new core_1.EventEmitter();
        this.activeItem = null;
        globalThis.BPM = this;
    }
    BPMenuComponent.prototype.isActive = function (item) {
        return item === this.activeItem;
    };
    BPMenuComponent.prototype.getContext = function ($implicit) {
        return {
            $implicit: $implicit,
            active: this.isActive($implicit),
        };
    };
    BPMenuComponent.prototype.onMouseEnter = function (item) {
        this.activeItem = item;
        console.dir(item);
    };
    BPMenuComponent.prototype.onMouseLeave = function () {
        this.activeItem = null;
    };
    __decorate([
        core_1.Input()
    ], BPMenuComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input()
    ], BPMenuComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input()
    ], BPMenuComponent.prototype, "emptyContent", void 0);
    __decorate([
        core_1.Output()
    ], BPMenuComponent.prototype, "itemClicked", void 0);
    __decorate([
        core_1.HostListener('mouseleave')
    ], BPMenuComponent.prototype, "onMouseLeave", null);
    BPMenuComponent = __decorate([
        core_2.Component({
            selector: 'bp-menu',
            templateUrl: './bp-menu.template.html',
            styleUrls: ['./bp-menu.style.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], BPMenuComponent);
    return BPMenuComponent;
}());
exports.BPMenuComponent = BPMenuComponent;
//# sourceMappingURL=bp-menu.component.js.map