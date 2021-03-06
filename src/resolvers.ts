import { adaptResolver } from './adapters/adapter-resolver';
import { AddResidentModel } from './protocols/models/resident-models';
import { AddResidentController } from './controllers/resident/add-resident-controller';
import ResidentRepository from './repository/resident-repository';
import { EditResidentController } from './controllers/resident/edit-resident-controller';
import { QueryResidentController } from './controllers/resident/query-resident-controller';
import { AddHouseController } from './controllers/house/add-house-controller';
import HouseRepository from './repository/house-repository';
import { QueryHouseController } from './controllers/house/query-house-controller';
import { QueryAllResidentsController } from './controllers/resident/query-all-resident-controller';
import { SumExpenseController } from './controllers/expense/sum-expense-controller';
import ExpenseRepository from './repository/expense-repository';
import { AddExpenseController } from './controllers/expense/add-expense-controller';
import { AddExpense } from './protocols/models/expense-model';
import { AdaptDateValidator } from './adapters/adapter-date-validator';



const addResidentController = new AddResidentController(new ResidentRepository())
const editResidentController = new EditResidentController(new ResidentRepository())
const queryResidentController = new QueryResidentController(new ResidentRepository())

const addHouseController = new AddHouseController(new HouseRepository())
const queryHouseController = new QueryHouseController(new HouseRepository())
const sumExpenseController = new SumExpenseController(new ExpenseRepository())
const listResidentsByIdHouse = new QueryAllResidentsController(new ResidentRepository(), sumExpenseController)
const addExpenseController = new AddExpenseController(new ExpenseRepository(), new AdaptDateValidator())


export const resolvers = {               
  Query: {
    queryByID: async (_, id: String) =>  adaptResolver(queryResidentController, id),
    queryHouseByKey: async(_, {keyAccess}) => adaptResolver(queryHouseController, keyAccess ),
    listResidentByIdHouse: async(_, {idHouse}) => adaptResolver(listResidentsByIdHouse, idHouse)
  },     
  Mutation: {
    createResident: async (_, values: AddResidentModel ) => adaptResolver(addResidentController, values),
    updateResident: async (_, values: AddResidentModel ) => adaptResolver(editResidentController, values),
    createHouse: async(_, {nickname}) => adaptResolver(addHouseController, nickname),
    createExpense:async(_, values: AddExpense )  => adaptResolver(addExpenseController, values)
  },


};
