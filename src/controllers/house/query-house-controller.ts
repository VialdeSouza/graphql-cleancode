import { Controller } from "../../protocols/protocol-controller";
import { QueryHouseRepository } from "@/protocols/repository/house-repository";

export class QueryHouseController implements Controller  {
    private readonly queryHouseRepository: QueryHouseRepository

    constructor(queryHouseRepository: QueryHouseRepository) {
        this.queryHouseRepository = queryHouseRepository
    }
    async handle(keyAccess: string) {
        const response = await  this.queryHouseRepository.queryByKey(keyAccess)
        return  response
    }
}