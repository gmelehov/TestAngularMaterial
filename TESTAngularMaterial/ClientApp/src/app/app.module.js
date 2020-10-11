"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var animations_1 = require("@angular/platform-browser/animations");
var budget_period_selector_component_1 = require("./budget-period-selector/budget-period-selector.component");
var purchase_item_input_component_1 = require("./purchase-item-input/purchase-item-input.component");
var purchase_items_list_component_1 = require("./purchase-items-list/purchase-items-list.component");
var purchase_request_component_1 = require("./purchase-request/purchase-request.component");
var author_info_component_1 = require("./author-info/author-info.component");
var card_1 = require("@angular/material/card");
var divider_1 = require("@angular/material/divider");
var expansion_1 = require("@angular/material/expansion");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var tabs_1 = require("@angular/material/tabs");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var table_1 = require("@angular/material/table");
var list_1 = require("@angular/material/list");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                counter_component_1.CounterComponent,
                fetch_data_component_1.FetchDataComponent,
                budget_period_selector_component_1.BudgetPeriodSelectorComponent,
                purchase_item_input_component_1.PurchaseItemInputComponent,
                purchase_items_list_component_1.PurchaseItemsListComponent,
                purchase_request_component_1.PurchaseRequestComponent,
                author_info_component_1.AuthorInfoComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'counter', component: counter_component_1.CounterComponent },
                    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
                ]),
                animations_1.BrowserAnimationsModule,
                card_1.MatCardModule,
                divider_1.MatDividerModule,
                expansion_1.MatExpansionModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                tabs_1.MatTabsModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                table_1.MatTableModule,
                list_1.MatListModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map