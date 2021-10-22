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

  // Create object for filters

  filters = {
    keyword: ''
  }

  // Inject Expense service
  constructor(private _expenseService: ExpenseService, private router: Router) { }

  ngOnInit(): void {
    this.listExpenses()
  }

  listExpenses(){
    // Subscribe to the expenses observable created in services.
    // With this, the expense service is injected as a constructor

    this._expenseService.getExpenses().subscribe(

      // Assign response to the expense array variable
      // data => this.expenses = data

      // This is later changed

      data => this.expenses = this.filterExpenses(data)
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

  // Trigger expense

  filterExpenses(expenses: Expense[]){

    // The filter method filters the expenses array
    return expenses.filter((e) => {
      return e.expense?.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }


}
