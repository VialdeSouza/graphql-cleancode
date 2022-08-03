import { TotalExpense } from "@/protocols/models/expense-model";
import { Budget } from "@/protocols/models/budget-model";
import { QueryExpenseRepository } from "@/protocols/repository/expense-repository";
import { Controller } from "../../protocols/protocol-controller";
import { UtilsMoment } from "@/protocols/utils-moment";


export class SumExpenseController implements Controller {
  private readonly queryExpenseRepository: QueryExpenseRepository;
  private readonly utilsMoment: UtilsMoment;

  constructor(queryExpenseRepository: QueryExpenseRepository, utilsMoment: UtilsMoment) {
    this.queryExpenseRepository = queryExpenseRepository;
    this.utilsMoment = utilsMoment;
  }
  async handle(budget: Budget): Promise<TotalExpense> {
    const range = this.utilsMoment.getRangeMonth(budget.currentDate)
    const expenses = await this.queryExpenseRepository.queryByPeriod(budget.idHouse, range.startAt, range.finishAt)
    const totalExpense = expenses.reduce((acc, expense) => acc + expense.value, 0)
    return {
      idHouse: budget.idHouse,
      value: totalExpense,
    };
  }
}
