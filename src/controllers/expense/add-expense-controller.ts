import { MonthValidator } from "@/protocols/date-validator";
import { AddExpense, Expense } from "@/protocols/models/expense-model";
import { Controller } from "@/protocols/protocol-controller";
import { AddExpenseRepository } from "@/protocols/repository/expense-repository";

export class AddExpenseController implements Controller {
  readonly addExpenseRepository: AddExpenseRepository;
  readonly monthValidator: MonthValidator;
  constructor(
    addExpenseRepository: AddExpenseRepository,
    monthValidator: MonthValidator
  ) {
    this.addExpenseRepository = addExpenseRepository;
    this.monthValidator = monthValidator;
  }
  async handle(expense: AddExpense): Promise<Expense> {
    const isCurrentMonth = this.monthValidator.isCurrentMonth(expense.date);
    if(!isCurrentMonth) throw new Error("Mês de pagamento é diferente do mês corrente");
    const newExpense = await this.addExpenseRepository.create(expense);
    return newExpense;
  }
}
