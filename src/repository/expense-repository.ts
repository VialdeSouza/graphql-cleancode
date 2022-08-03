import { AddExpense, Expense } from "@/protocols/models/expense-model";
import {
  AddExpenseRepository,
  QueryExpenseRepository,
} from "@/protocols/repository/expense-repository";

export default class ExpenseRepository
  implements QueryExpenseRepository, AddExpenseRepository
{
  async queryByPeriod(
    idHouse: string,
    startAt: string,
    finishAt: string
  ): Promise<Expense[]> {
    console.log(startAt, finishAt)
    return [
      {
        idExpense: "any id",
        tag: "Serviço",
        value: 250.0,
        description: "Manutenção pia",
        date: `${new Date()}`,
        idHouse: idHouse,
        createAt: new Date(),
      },
      {
        idExpense: "any id",
        tag: "Serviço",
        value: 350.0,
        description: "Internet",
        date: `${new Date()}`,
        idHouse: idHouse,
        createAt: new Date(),
      },
      {
        idExpense: "any id",
        tag: "Moradia",
        value: 1750.0,
        description: "Aluguel",
        date: `${new Date()}`,
        idHouse: idHouse,
        createAt: new Date(),
      },
    ];
  }
  
  async create(expense: AddExpense): Promise<Expense> {
    return {
      idExpense: "any id",
      createAt: new Date(),
      ...expense,
    };
  }
}
