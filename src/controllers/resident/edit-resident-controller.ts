import {  ResidentModel } from "../../protocols/models/resident-models";
import { EditResidentRepository } from "../../protocols/repository/resident-repository";
import { Controller } from "../../protocols/protocol-controller";

export class EditResidentController implements Controller  {
    private readonly editResidentRepository: EditResidentRepository

    constructor(residentRepository: EditResidentRepository) {
        this.editResidentRepository = residentRepository
    }
    async handle(resident: ResidentModel) {
        //Validação do Email
      const response = await this.editResidentRepository.change(resident)
        return  response
    }
}