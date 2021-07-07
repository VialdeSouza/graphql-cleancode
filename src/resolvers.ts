import { adaptResolver } from './adapters/adapter-resolver';
import { AddResidentModel } from './protocols/models/resident-models';
import { AddResidentController } from './controllers/add-resident-controller';
import ResidentRepository from './repository/resident-repository';
export const resolvers = {                   
  Mutation: {
    createResident: async (_, values: AddResidentModel ) => adaptResolver(new AddResidentController(values, new ResidentRepository())),
  },
};
