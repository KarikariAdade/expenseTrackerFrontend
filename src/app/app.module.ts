import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import http client module to help with http requests
import { HttpClientModule } from '@angular/common/http';

// Import form module

import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';
import { AddExpenseComponent } from './components/expenses/add-expense/add-expense.component';
import {RouterModule, Routes} from "@angular/router";
import { ViewExpenseComponent } from './components/expenses/view-expense/view-expense.component';
import { EditExpenseComponent } from './components/expenses/edit-expense/edit-expense.component';

// Define route array

const routers: Routes = [
  {path: 'expenses', component: ListExpenseComponent},
  {path: 'expenses/add', component: AddExpenseComponent},
  {path: 'expenses/detail/:id', component: ViewExpenseComponent}, // This is how we pass route parameter in angular
  {path: 'expenses/edit/:id', component: AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent,
    ViewExpenseComponent,
    EditExpenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // The imported http module should be showed here
    FormsModule, // Imported form module
    RouterModule.forRoot(routers), // This sets the routers
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
