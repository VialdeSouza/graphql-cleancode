import { AddResidentModel, ResidentModel } from "@/protocols/models/resident-models";
import { AddResidentRepository, EditResidentRepository } from "@/protocols/repository/resident-repository";

export default class ResidentRepository implements AddResidentRepository, EditResidentRepository {
    async create(resident: AddResidentModel): Promise<ResidentModel>{
            return new Promise( resolve => resolve({id: 'any id', ...resident}))
    }

    async change(resident: ResidentModel): Promise<ResidentModel>{
        return new Promise( resolve => resolve({id: 'any id', ...resident, name: 'novo nome'}))
}
} 