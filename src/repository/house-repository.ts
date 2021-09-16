import { AddHouseModel, HouseModel } from "@/protocols/models/house-models";
import { AddHouseRepository, QueryHouseRepository } from "@/protocols/repository/house-repository";


export default class HouseRepository
  implements
    AddHouseRepository, QueryHouseRepository
{
  create(house: AddHouseModel): Promise<HouseModel>{
    return new Promise(resolve => resolve({...house, id: 'any_id' }))
  }

  queryByKey(keyAccess: string): Promise<HouseModel>{
    return new Promise(resolve => resolve({keyAccess, nickname: 'Casa 09', id: 'any_id' }))
  }


}
