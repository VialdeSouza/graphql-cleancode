import { AddResidentModel, ResidentModel } from "../models/resident-models";

export interface AddResidentRepository {
    create(resident: AddResidentModel): Promise<ResidentModel>
}

export interface EditResidentRepository {
    change(resident: ResidentModel): Promise<ResidentModel>
}

export interface QueryByIDResidentRepository {
    queryById(id: String): Promise<ResidentModel>
}

export interface QueryAllResidentsRepository {
    list(idHouse: String): Promise<ResidentModel[]>
}

