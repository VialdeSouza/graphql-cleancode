export interface AddExpense {
    tag: string
    value: number
    description: string
    date: Date 
    idHouse: string
}

export interface Expense {
    tag: string
    value: number
    description: string
    date: Date 
    idHouse: string
    createAt: Date
}

export interface TotalExpense {
    value: number
    idHouse: string
}