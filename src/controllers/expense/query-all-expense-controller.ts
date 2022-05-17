import { Budget } from "@/protocols/models/budget-model";
import { Expense } from "@/protocols/models/expense-model";
import { Controller } from "@/protocols/protocol-controller";
import { QueryAllExpenseRepository } from "@/protocols/repository/expense-repository";


export class QueryAllExpenseController implements Controller {
  readonly queryAllExpenseRepository: QueryAllExpenseRepository;
  constructor(queryAllExpenseRepository: QueryAllExpenseRepository) {
    this.queryAllExpenseRepository = queryAllExpenseRepository;
  }
  async handle(budget: Budget): Promise<Expense[]> {
      const expenses = await this.queryAllExpenseRepository.list(budget.idHouse, budget.currentDate, budget.currentDate);
      return expenses;
  }
}
