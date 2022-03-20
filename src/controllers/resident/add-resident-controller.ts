import { AddResidentModel } from "../../protocols/models/resident-models";
import { AddResidentRepository } from "../../protocols/repository/resident-repository";
import { Controller } from "../../protocols/protocol-controller";
import validator from "validator";

export class AddResidentController implements Controller  {
    private readonly addResidentRepository: AddResidentRepository

    constructor(addResidentRepository: AddResidentRepository) {
        this.addResidentRepository = addResidentRepository
    }
    async handle(resident: AddResidentModel) {
        const isEmail = validator.isEmail(resident.email);
        if(!isEmail) throw new Error('Email inválido');
        const response = await  this.addResidentRepository.create(resident)
        return  response
    }
}