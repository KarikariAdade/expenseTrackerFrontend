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
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import {RouterModule, Routes} from "@angular/router";

// Define route array

const routers: Routes = [
  {path: 'expenses', component: ListExpenseComponent},
  {path: 'expenses/add', component: AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent
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
