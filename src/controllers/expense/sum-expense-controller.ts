import { TotalExpense } from "@/protocols/models/expense-model";
import { Budget } from "@/protocols/models/budget-model";
import { QueryExpenseRepository } from "@/protocols/repository/expense-repository";
import { Controller } from "../../protocols/protocol-controller";


export class sumExpenseController implements Controller {
  private readonly queryExpenseRepository: QueryExpenseRepository;

  constructor(queryExpenseRepository: QueryExpenseRepository) {
    this.queryExpenseRepository = queryExpenseRepository;
  }
  async handle(budget: Budget): Promise<TotalExpense> {
    const range = {startAt: budget.currentDate, finishAt:  '30/05/2022' }
    const expenses = await this.queryExpenseRepository.queryByPeriod(budget.idHouse, range.startAt, range.finishAt)
    const totalExpense = expenses.reduce((acc, expense) => acc + expense.value, 0)
    return {
      idHouse: budget.idHouse,
      value: totalExpense,
    };
  }
}
