import { adaptControllerToResolver } from "./adapters/adapter-controller-to-resolver";
import { AddResidentModel } from "./protocols/models/resident-models";
import { AddResidentController } from "./controllers/resident/add-resident-controller";
import ResidentRepository from "./repository/resident-repository";
import { EditResidentController } from "./controllers/resident/edit-resident-controller";
import { QueryResidentByIdController } from "./controllers/resident/query-id-resident-controller";
import { AddHouseController } from "./controllers/house/add-house-controller";
import HouseRepository from "./repository/house-repository";
import { QueryHouseController } from "./controllers/house/query-house-controller";
import { QueryAllResidentsController } from "./controllers/resident/query-all-resident-controller";
import { SumExpenseController } from "./controllers/expense/sum-expense-controller";
import ExpenseRepository from "./repository/expense-repository";
import { AddExpenseController } from "./controllers/expense/add-expense-controller";
import { AddExpense } from "./protocols/models/expense-model";
import { AdaptDateValidator } from "./adapters/adapter-date-validator";
import { AdaptUtilsMoment } from "./adapters/adapter-utils-moment";
import { Budget } from "./protocols/models/budget-model";

const addResidentController = new AddResidentController(
  new ResidentRepository()
);
const editResidentController = new EditResidentController(
  new ResidentRepository()
);
const queryResidentByIdController = new QueryResidentByIdController(
  new ResidentRepository()
);

const addHouseController = new AddHouseController(new HouseRepository());
const queryHouseController = new QueryHouseController(new HouseRepository());
const sumExpenseController = new SumExpenseController(
  new ExpenseRepository(),
  new AdaptUtilsMoment()
);
const listResidentsByIdHouse = new QueryAllResidentsController(
  new ResidentRepository(),
  sumExpenseController
);
const addExpenseController = new AddExpenseController(
  new ExpenseRepository(),
  new AdaptDateValidator()
);

export const resolvers = {
  Query: {
    queryResidentByID: async (_, id: String) =>
      adaptControllerToResolver(queryResidentByIdController, id),
    queryHouseByKey: async (_, { keyAccess }) =>
      adaptControllerToResolver(queryHouseController, keyAccess),
    listResidentByIdHouse: async (_, values: Budget) =>
      adaptControllerToResolver(listResidentsByIdHouse, values),
  },
  Mutation: {
    createResident: async (_, values: AddResidentModel) =>
      adaptControllerToResolver(addResidentController, values),
    updateResident: async (_, values: AddResidentModel) =>
      adaptControllerToResolver(editResidentController, values),
    createHouse: async (_, { nickname }) =>
      adaptControllerToResolver(addHouseController, nickname),
    createExpense: async (_, values: AddExpense) =>
      adaptControllerToResolver(addExpenseController, values),
  },
};
