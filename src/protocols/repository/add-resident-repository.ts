import { AddResidentModel, ResidentModel } from "../models/resident-models";

export interface AddResidentRepository {
    create(resident: AddResidentModel): Promise<ResidentModel>
}