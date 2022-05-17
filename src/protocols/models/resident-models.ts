export interface AddResidentModel {
    name: string
    email: string
    isUser: boolean
    income: number
    idHouse: string
}



export interface ResidentModel {
    id: string
    name: string
    email: string
    isUser: boolean
    income: number
}

export interface ResidentQuote extends ResidentModel {
    incomePercentage: number
    budgetValue: number
}