import { Component, OnInit } from '@angular/core';
import {Expense} from "../../models/expense";
import {ExpenseService} from "../../services/expense.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  //Create a new instance of the Expense Class;
  // this object will be passed to the service method saveExpense


  expense: Expense = new Expense();

  constructor(private _expenseService: ExpenseService, private _router:Router) { }

  ngOnInit(): void {
  }

  saveExpense(){
    this._expenseService.saveExpense(this.expense).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl('/expenses');
      }
    )
  }


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
