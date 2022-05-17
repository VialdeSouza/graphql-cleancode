import { QueryAllResidentsRepository } from "../../protocols/repository/resident-repository";
import { Controller } from "../../protocols/protocol-controller";

export class QueryAllResidentsController implements Controller {
  private readonly queryAllResidentsRepository: QueryAllResidentsRepository;

  constructor(queryAllResidentsRepository: QueryAllResidentsRepository) {
    this.queryAllResidentsRepository = queryAllResidentsRepository;
  }
  async handle(idHouse: String) {
    const response = await this.queryAllResidentsRepository.list(idHouse);

    console.log(response.map((res) => ({ ...res, budgetPercentage: 30 })));
    // Calcular porcentual de cada morador
    const data = response.map((res) => ({ ...res, budgetPercentage: 30 }));
    return data;
  }
}
