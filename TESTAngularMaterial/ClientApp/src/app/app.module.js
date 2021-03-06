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
var stepper_1 = require("@angular/material/stepper");
var checkbox_1 = require("@angular/material/checkbox");
var business_process_component_1 = require("./business-process/business-process.component");
var unit_result_component_1 = require("./unit-result/unit-result.component");
var mat_expander_component_1 = require("./mat-expander/mat-expander.component");
var aside_panel_component_1 = require("./aside-panel/aside-panel.component");
var overlay_1 = require("@angular/cdk/overlay");
var bp_menu_module_1 = require("./bp-menu/bp-menu.module");
var list_navigator_module_1 = require("./list-navigator/list-navigator.module");
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
                author_info_component_1.AuthorInfoComponent,
                business_process_component_1.BusinessProcessComponent,
                unit_result_component_1.UnitResultComponent,
                mat_expander_component_1.MatExpanderComponent,
                aside_panel_component_1.AsidePanelComponent,
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
                list_1.MatListModule,
                stepper_1.MatStepperModule,
                checkbox_1.MatCheckboxModule,
                overlay_1.OverlayModule,
                bp_menu_module_1.BPMenuModule,
                list_navigator_module_1.ListNavigatorModule
            ],
            providers: [forms_1.FormBuilder],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map