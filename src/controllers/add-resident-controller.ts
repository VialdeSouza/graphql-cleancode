import { AddResidentModel } from "../protocols/models/resident-models";
import { AddResidentRepository } from "../protocols/repository/add-resident-repository";
import { Controller } from "../protocols/protocol-controller";

export class AddResidentController implements Controller  {
    private readonly resident: AddResidentModel
    private readonly addResidentRepository: AddResidentRepository

    constructor( resident: AddResidentModel, addResidentRepository: AddResidentRepository) {
        this.resident = resident
        this.addResidentRepository = addResidentRepository
    }
    async handle() {
      const response = await  this.addResidentRepository.create(this.resident)
        return  response
    }
}