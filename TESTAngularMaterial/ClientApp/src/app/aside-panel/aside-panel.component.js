"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsidePanelComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var AsidePanelComponent = /** @class */ (function () {
    function AsidePanelComponent() {
        this.isOpen = true;
        this.isLeft = false;
        /** Название Material-иконки для переключателя в закрытом состоянии */
        this.toggleIconName = 'chevron_right';
    }
    AsidePanelComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AsidePanelComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
        this.isLeft = !this.isLeft;
    };
    AsidePanelComponent.prototype.close = function () {
        this.isOpen = false;
        this.isLeft = false;
    };
    Object.defineProperty(AsidePanelComponent.prototype, "wrapperOpenedClass", {
        get: function () {
            return "wrapper opened";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AsidePanelComponent.prototype, "wrapperClosedClass", {
        get: function () {
            return "wrapper closed";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AsidePanelComponent.prototype, "wrapperClass", {
        get: function () {
            return this.isOpen ? this.wrapperOpenedClass : this.wrapperClosedClass;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], AsidePanelComponent.prototype, "toggleIconName", void 0);
    AsidePanelComponent = __decorate([
        core_1.Component({
            selector: 'aside-panel',
            templateUrl: 'aside-panel.component.html',
            styleUrls: ['aside-panel.component.css'],
            animations: [
                animations_1.trigger('openClose', [
                    animations_1.state('open', animations_1.style({ maxWidth: '500px', visibility: 'visible' })),
                    animations_1.state('closed', animations_1.style({ width: '0px', visibility: 'collapse' })),
                    animations_1.transition('open => closed', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                    animations_1.transition('closed => open', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                ]),
                animations_1.trigger('leftRight', [
                    animations_1.state('left', animations_1.style({ transform: 'rotate(180deg)' })),
                    animations_1.state('right', animations_1.style({ transform: 'rotate(0)' })),
                    animations_1.transition('left => right', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                    animations_1.transition('right => left', [animations_1.animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
                ]),
            ]
        })
    ], AsidePanelComponent);
    return AsidePanelComponent;
}());
exports.AsidePanelComponent = AsidePanelComponent;
//# sourceMappingURL=aside-panel.component.js.map