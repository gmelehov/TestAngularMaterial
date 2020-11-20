"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatExpanderComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var MatExpanderComponent = /** @class */ (function () {
    function MatExpanderComponent() {
        this.isOpen = false;
        this.isUp = false;
        /** Название Material-иконки для переключателя в закрытом состоянии */
        this.toggleIconName = 'arrow_drop_down';
        /** Elevation карточки в открытом состоянии */
        this.zOpened = 4;
        /** Elevation карточки в закрытом состоянии */
        this.zClosed = 0;
        this.fullHeight = 'auto';
        globalThis.MEXP = this;
    }
    MatExpanderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.addEventListener("click", function (ev) {
            ev.stopPropagation();
            if (!ev.target.closest('section.overlay-wrapper') && ev.target.closest('div.wrapper') != _this.header.nativeElement) {
                _this.close();
            }
        });
    };
    MatExpanderComponent.prototype.toggle = function () {
        var _this = this;
        this.isOpen = !this.isOpen;
        this.isUp = !this.isUp;
        setTimeout(function () { return _this.computeHeight(); });
    };
    MatExpanderComponent.prototype.close = function () {
        var _this = this;
        this.isOpen = false;
        this.isUp = false;
        setTimeout(function () { return _this.computeHeight(); });
    };
    Object.defineProperty(MatExpanderComponent.prototype, "cardOpenedClass", {
        /** CSS-класс для открытого состояния карточки */
        get: function () {
            return "mat-elevation-z" + this.zOpened + " item-card";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatExpanderComponent.prototype, "cardClosedClass", {
        /** CSS-класс для закрытого состояния карточки */
        get: function () {
            return "mat-elevation-z" + this.zClosed + " item-card";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatExpanderComponent.prototype, "cardClass", {
        /** CSS-класс для карточки */
        get: function () {
            return this.isOpen ? this.cardOpenedClass : this.cardClosedClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatExpanderComponent.prototype, "triggerWidth", {
        get: function () {
            return this.isOpen ? this.header.nativeElement.offsetWidth + "px" : 'auto';
            //return !!this.header ? `${this.header.nativeElement.offsetWidth}px` : 'inherit';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatExpanderComponent.prototype, "overlayHeight", {
        get: function () {
            return !!this.section && !!this.header ? this.isOpen ? this.section.nativeElement.offsetHeight + this.header.nativeElement.offsetHeight + "px" : 'auto' : 'auto';
        },
        enumerable: false,
        configurable: true
    });
    MatExpanderComponent.prototype.computeHeight = function () {
        this.fullHeight = !!this.section && !!this.header ? this.isOpen ? this.section.nativeElement.offsetHeight + this.header.nativeElement.offsetHeight + "px" : 'auto' : 'auto';
    };
    MatExpanderComponent.prototype.noAction = function () {
    };
    __decorate([
        core_1.ViewChild("hdr", { static: false })
    ], MatExpanderComponent.prototype, "header", void 0);
    __decorate([
        core_1.ViewChild("overlay", { static: false })
    ], MatExpanderComponent.prototype, "section", void 0);
    __decorate([
        core_1.ViewChild("matcard", { static: false })
    ], MatExpanderComponent.prototype, "card", void 0);
    __decorate([
        core_1.ViewChild("tmpl", { static: false })
    ], MatExpanderComponent.prototype, "tmpl", void 0);
    __decorate([
        core_1.Input()
    ], MatExpanderComponent.prototype, "toggleIconName", void 0);
    __decorate([
        core_1.Input()
    ], MatExpanderComponent.prototype, "zOpened", void 0);
    __decorate([
        core_1.Input()
    ], MatExpanderComponent.prototype, "zClosed", void 0);
    MatExpanderComponent = __decorate([
        core_1.Component({
            selector: 'mat-expander',
            templateUrl: 'mat-expander.component.html',
            styleUrls: ['mat-expander.component.css'],
            animations: [
                animations_1.trigger('openClose', [
                    animations_1.state('open', animations_1.style({ maxHeight: '500px' })),
                    animations_1.state('closed', animations_1.style({ height: 'auto' })),
                    animations_1.transition('open <=> closed', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                ]),
                animations_1.trigger('upDown', [
                    animations_1.state('up', animations_1.style({ transform: 'rotate(180deg)' })),
                    animations_1.state('down', animations_1.style({ transform: 'rotate(0)' })),
                    animations_1.transition('up <=> down', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                ]),
            ]
        })
    ], MatExpanderComponent);
    return MatExpanderComponent;
}());
exports.MatExpanderComponent = MatExpanderComponent;
//# sourceMappingURL=mat-expander.component.js.map