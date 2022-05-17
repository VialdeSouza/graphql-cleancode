import { Expense } from "@/protocols/models/expense-model";
import { QueryExpenseRepository } from "@/protocols/repository/expense-repository";

export default class ExpenseRepository implements QueryExpenseRepository {
  async queryByPeriod(
    idHouse: string,
    startAt: string,
    finishAt: string
  ): Promise<Expense[]> {
    return [
      {
        tag: "Serviço",
        value: 250.0,
        description: "Manutenção pia",
        date: new Date(),
        idHouse: idHouse,
        createAt: new Date(),
      },
      {
        tag: "Serviço",
        value: 350.0,
        description: "Internet",
        date: new Date(),
        idHouse: idHouse,
        createAt: new Date(),
      },
      {
        tag: "Moradia",
        value: 1750.0,
        description: "Aluguel",
        date: new Date(),
        idHouse: idHouse,
        createAt: new Date(),
      },
    ];
  }
}
