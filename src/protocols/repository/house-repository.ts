import { AddHouseModel, HouseModel } from "../models/house-models";


export interface AddHouseRepository {
    create(resident: AddHouseModel): Promise<HouseModel>
}



export interface QueryHouseRepository {
    queryByKey(keyAccess: String): Promise<HouseModel>
}
