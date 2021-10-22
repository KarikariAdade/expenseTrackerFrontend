import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../models/expense";
import {map} from "rxjs/operators"
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {

  // create the base url
  private getUrl: string = 'http://localhost:8090/api/v1/expenses';

  appendUrl(url:string){
    return this.getUrl+url;
  }

  constructor(private _HttpClient: HttpClient, private router: Router) { }

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


  getExpense(id: number | null): Observable<Expense>{
    return this._HttpClient.get<Expense>(this.appendUrl('/${id}')).pipe(
      map(response => response)
    )
  }

  deleteExpense(id: number): Observable<any>{
    return this._HttpClient.delete(this.appendUrl('/delete/'+id), {responseType: 'text'})

  }

}
