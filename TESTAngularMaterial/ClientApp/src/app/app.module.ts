import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BudgetPeriodSelectorComponent } from './budget-period-selector/budget-period-selector.component';
import { PurchaseItemInputComponent } from './purchase-item-input/purchase-item-input.component';
import { PurchaseItemsListComponent } from './purchase-items-list/purchase-items-list.component';
import { PurchaseRequestComponent } from './purchase-request/purchase-request.component';
import { AuthorInfoComponent } from './author-info/author-info.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { BusinessProcessComponent } from './business-process/business-process.component';
import { UnitResultComponent } from './unit-result/unit-result.component';
import { MatExpanderComponent } from './mat-expander/mat-expander.component';
import { AsidePanelComponent } from './aside-panel/aside-panel.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BPMenuModule } from './bp-menu/bp-menu.module';
import { ListNavigatorModule } from './list-navigator/list-navigator.module';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BudgetPeriodSelectorComponent,
    PurchaseItemInputComponent,
    PurchaseItemsListComponent,
    PurchaseRequestComponent,
    AuthorInfoComponent,
    BusinessProcessComponent,
    UnitResultComponent,
    MatExpanderComponent,
    AsidePanelComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule,
    OverlayModule,

    BPMenuModule,
    ListNavigatorModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
