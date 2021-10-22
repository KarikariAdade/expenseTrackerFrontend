import { Component, OnInit } from '@angular/core';
import {ExpenseService} from "../../../services/expense.service";
import {Expense} from "../../../models/expense";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  // Create an empty array to hold the list of expenses

  expenses: Expense[] = [];

  // Inject Expense service
  constructor(private _expenseService: ExpenseService, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the expenses observable created in services.
    // With this, the expense service is injected as a constructor

    this._expenseService.getExpenses().subscribe(

      // Assign response to the expense array variable
      data => this.expenses = data
    )
  }


  deleteExpense(id: number) {
    this._expenseService.deleteExpense(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.ngOnInit();
      }
    )
  }


}
