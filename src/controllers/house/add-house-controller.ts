import { Controller } from "../../protocols/protocol-controller";
import { AddHouseRepository } from "@/protocols/repository/house-repository";
import { generateKeyAccess } from "../../utils/generate-key-access";

export class AddHouseController implements Controller {
  private readonly addHouseRepository: AddHouseRepository;

  constructor(addHouseRepository: AddHouseRepository) {
    this.addHouseRepository = addHouseRepository;
  }
  async handle(nickname: string) {
    const keyAccess = generateKeyAccess();

    if (nickname === "" || nickname === null || nickname === undefined) {
      throw new Error("Nickname não pode ser uma string vazia");
    }

    const response = await this.addHouseRepository.create({
      nickname,
      keyAccess,
    });
    return response;
  }
}
