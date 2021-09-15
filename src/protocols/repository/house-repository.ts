import { AddHouseModel, HouseModel } from "../models/house-models";


export interface AddHouseRepository {
    create(resident: AddHouseModel): Promise<HouseModel>
}



export interface QueryByIDResidentRepository {
    queryById(keyAccess: String): Promise<HouseModel>
}
