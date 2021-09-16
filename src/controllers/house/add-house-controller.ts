import { Controller } from "../../protocols/protocol-controller";
import { AddHouseRepository } from "@/protocols/repository/house-repository";

export class AddHouseController implements Controller  {
    private readonly addHouseRepository: AddHouseRepository

    constructor(addHouseRepository: AddHouseRepository) {
        this.addHouseRepository = addHouseRepository
    }
    async handle(nickname: string) {
        //gerar key
        const keyAccess = 'HMK090'
        const response = await  this.addHouseRepository.create({nickname, keyAccess})
        return  response
    }
}