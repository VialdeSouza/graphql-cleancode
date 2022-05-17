import { QueryAllResidentsRepository } from "../../protocols/repository/resident-repository";
import { Controller } from "../../protocols/protocol-controller";
import { SumExpenseController } from "../expense/sum-expense-controller";
import { Budget } from "@/protocols/models/budget-model";
import { ResidentQuote } from "@/protocols/models/resident-models";

export class QueryAllResidentsController implements Controller {
  private readonly queryAllResidentsRepository: QueryAllResidentsRepository;
  private readonly sumExpenseController: SumExpenseController;

  constructor(queryAllResidentsRepository: QueryAllResidentsRepository, sumExpenseController: SumExpenseController) {
    this.queryAllResidentsRepository = queryAllResidentsRepository;
    this.sumExpenseController = sumExpenseController;
  }
  async handle(budget: Budget): Promise<ResidentQuote[]> {
    const response = await this.queryAllResidentsRepository.list(budget.idHouse);
    const totalExpense = await this.sumExpenseController.handle(budget);
    const totalIncome = response.reduce((cc, resident) => cc+resident.income, 0)
    const percentage = totalExpense.value/totalIncome;
    const data: ResidentQuote[] = response.map((res) => ({ ...res, incomePercentage: res.income/totalIncome, budgetValue: percentage*res.income,  }));
    return data;
  }
}
