import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../models/expense";
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {

  // create the base url
  private getUrl: string = 'http://localhost:8090/api/v1/expenses';

  appendUrl(url:string){
    return this.getUrl+url;
  }

  constructor(private _HttpClient: HttpClient) { }

  // Create expense observable
  // The observable kinda get the data, you then subscribe to the observable to get the needed api data

  // Withing this observable, we inject Expense as an Array
  getExpenses(): Observable<Expense[]> {
    return this._HttpClient.get<Expense[]>(this.getUrl).pipe(
      // Map should be imported
      map(response => response)
    )
  }

  // We save expense in this function
  saveExpense(expense: Expense): Observable<Expense> {
    return this._HttpClient.post<Expense>(this.appendUrl('/post'), expense);
  }

  getExpense(id: number): Observable<Expense>{
    return this._HttpClient.get<Expense>(this.appendUrl('/get/${id}')).pipe(
      map(response => response)
    )
  }
}
