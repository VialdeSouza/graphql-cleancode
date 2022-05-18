import { AddExpense, Expense } from "@/protocols/models/expense-model";
import { Controller } from "@/protocols/protocol-controller";
import { AddExpenseRepository } from "@/protocols/repository/expense-repository";


export class AddExpenseController implements Controller {
    readonly addExpenseRepository: AddExpenseRepository;
    constructor(addExpenseRepository: AddExpenseRepository){
        this.addExpenseRepository = addExpenseRepository;

    }
    async handle(expense: AddExpense): Promise<Expense> {
        //VALIDAR SE DATA DA DESPESA É DO MES CORRENTE
        
        const newExpense = await this.addExpenseRepository.create(expense)
        return newExpense;
    }
}