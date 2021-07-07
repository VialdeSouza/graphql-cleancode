import { AddResidentModel, ResidentModel } from "@/protocols/models/resident-models";
import { AddResidentRepository } from "@/protocols/repository/add-resident-repository";

export default class ResidentRepository implements AddResidentRepository {
    async create(resident: AddResidentModel): Promise<ResidentModel>{
            return new Promise( resolve => resolve({id: 'any id', ...resident}))
    }
} 