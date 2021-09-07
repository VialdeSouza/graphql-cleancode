import { adaptResolver } from './adapters/adapter-resolver';
import { AddResidentModel } from './protocols/models/resident-models';
import { AddResidentController } from './controllers/add-resident-controller';
import ResidentRepository from './repository/resident-repository';
import { EditResidentController } from './controllers/edit-resident-controller';
import { QueryResidentController } from './controllers/query-resident-controller';


const addResidentController = new AddResidentController(new ResidentRepository())
const editResidentController = new EditResidentController(new ResidentRepository())
const queryResidentController = new QueryResidentController(new ResidentRepository())


export const resolvers = {               
  Query: {
    queryByID: async (_, id: String) =>  adaptResolver(queryResidentController, id)
  },     
  Mutation: {
    createResident: async (_, values: AddResidentModel ) => adaptResolver(addResidentController, values),
    updateResident: async (_, values: AddResidentModel ) => adaptResolver(editResidentController, values),
  },
};
