import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ExpenseService} from "../../../services/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Expense} from "../../../models/expense";

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  expense: Expense = new Expense();

  constructor(
    private expenseService:ExpenseService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // This checks if the route parameter is present
    // The has houses the parameter name

    // const isIdPresent = this._activatedRoute.snapshot.paramMap.has("id");
    //
    // if (isIdPresent){
    //
    //   const id = this._activatedRoute.snapshot.paramMap.get('id');
    //
    //   this.expenseService.getExpenseDetail(id).subscribe(
    //     data => this.expense = data
    //   )
    // }

  }

}
