import { Component, OnInit } from '@angular/core';
import {Expense} from "../../../models/expense";
import {ExpenseService} from "../../../services/expense.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  //Create a new instance of the Expense Class;
  // this object will be passed to the service method saveExpense


  expense: Expense = new Expense();

  constructor(private _expenseService: ExpenseService,
              private _router:Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const isIdPresent = this._activatedRoute.snapshot.paramMap.get('id')
    if (isIdPresent){
      // @ts-ignore
      const id = +this._activatedRoute.snapshot.paramMap.get('id');
      this._expenseService.getExpense(id).subscribe(
        data => this.expense = data
      )
    }

  }

  saveExpense(){
    this._expenseService.saveExpense(this.expense).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl('/expenses');
      }
    )
  }

  // getExpense(){
  //   this._expenseService.getExpense(this.expense).subscribe(
  //     data => this.expense = data
  //   )
  // }


  // This method saves the expense to the database
  // saveExpense(){
  //   this._expenseService.saveExpense(this.expense).subscribe(
  //     // After subscribing to saveExpense function in expenseService,
  //     // you redirect user
  //
  //     data => {
  //       console.log("response", data);
  //
  //       // Navigate to expenses page, route is injected above
  //       this._router.navigateByUrl("/expenses");
  //     }
  //   )
  // }

}
