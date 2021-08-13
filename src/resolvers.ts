import { adaptResolver } from './adapters/adapter-resolver';
import { AddResidentModel } from './protocols/models/resident-models';
import { AddResidentController } from './controllers/add-resident-controller';
import ResidentRepository from './repository/resident-repository';
const addResidentController = new AddResidentController(new ResidentRepository())
export const resolvers = {                   
  Mutation: {
    createResident: async (_, values: AddResidentModel ) => adaptResolver(addResidentController, values),
  },
};
