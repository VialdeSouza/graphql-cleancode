export interface AddExpense {
    tag: string
    value: number
    description: string
    date: string 
    idHouse: string
}

export interface Expense {
    idExpense: string,
    tag: string
    value: number
    description: string
    date: string 
    idHouse: string
    createAt: Date
}

export interface TotalExpense {
    value: number
    idHouse: string
}