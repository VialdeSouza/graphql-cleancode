import { AddExpense, Expense } from "../models/expense-model"
export interface AddExpenseRepository {
    create(expense: AddExpense): Promise<Expense>
}
export interface QueryExpenseRepository {
    queryByPeriod (idHouse: String, startAt: string, finishAt: string ): Promise<Expense[]>
}
export interface QueryAllExpenseRepository {
    list(idHouse: string, startAt: string, finishAt: string): Promise<Expense[]>
}