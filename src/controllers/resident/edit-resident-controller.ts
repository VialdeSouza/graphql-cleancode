import {  ResidentModel } from "../../protocols/models/resident-models";
import { EditResidentRepository } from "../../protocols/repository/resident-repository";
import { Controller } from "../../protocols/protocol-controller";
import validator from "validator";
export class EditResidentController implements Controller  {
    private readonly editResidentRepository: EditResidentRepository

    constructor(residentRepository: EditResidentRepository) {
        this.editResidentRepository = residentRepository
    }
    async handle(resident: ResidentModel) {
        const isEmail = validator.isEmail(resident.email);
        if(!isEmail) throw new Error('Email inválido');
              const response = await this.editResidentRepository.change(resident)
        return  response
    }
}