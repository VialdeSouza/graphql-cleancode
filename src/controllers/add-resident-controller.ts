import { AddResidentModel } from "../protocols/models/resident-models";
import { AddResidentRepository } from "../protocols/repository/resident-repository";
import { Controller } from "../protocols/protocol-controller";

export class AddResidentController implements Controller  {
    private readonly addResidentRepository: AddResidentRepository

    constructor(addResidentRepository: AddResidentRepository) {
        this.addResidentRepository = addResidentRepository
    }
    async handle(resident: AddResidentModel) {
        //Validação do Email
        const response = await  this.addResidentRepository.create(resident)
        return  response
    }
}