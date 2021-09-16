import { adaptResolver } from './adapters/adapter-resolver';
import { AddResidentModel } from './protocols/models/resident-models';
import { AddResidentController } from './controllers/add-resident-controller';
import ResidentRepository from './repository/resident-repository';
import { EditResidentController } from './controllers/edit-resident-controller';
import { QueryResidentController } from './controllers/query-resident-controller';
import { AddHouseController } from './controllers/house/add-house-controller';
import HouseRepository from './repository/house-repository';
import { QueryHouseController } from './controllers/house/query-house-controller';



const addResidentController = new AddResidentController(new ResidentRepository())
const editResidentController = new EditResidentController(new ResidentRepository())
const queryResidentController = new QueryResidentController(new ResidentRepository())

const addHouseController = new AddHouseController(new HouseRepository())
const queryHouseController = new QueryHouseController(new HouseRepository())


export const resolvers = {               
  Query: {
    queryByID: async (_, id: String) =>  adaptResolver(queryResidentController, id),
    queryHouseByKey: async(_, {keyAccess}) => adaptResolver(queryHouseController, keyAccess )
  },     
  Mutation: {
    createResident: async (_, values: AddResidentModel ) => adaptResolver(addResidentController, values),
    updateResident: async (_, values: AddResidentModel ) => adaptResolver(editResidentController, values),
    createHouse: async(_, {nickname}) => adaptResolver(addHouseController, nickname)
  },


};
