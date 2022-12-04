import { QueryByIDResidentRepository } from "../../protocols/repository/resident-repository";
import { Controller } from "../../protocols/protocol-controller";

export class QueryResidentByIdController implements Controller {
  private readonly queryResidentRepository: QueryByIDResidentRepository;

  constructor(queryResidentRepository: QueryByIDResidentRepository) {
    this.queryResidentRepository = queryResidentRepository;
  }
  async handle(idResident: String) {
    const response = await this.queryResidentRepository.queryById(idResident);
    return response;
  }
}
