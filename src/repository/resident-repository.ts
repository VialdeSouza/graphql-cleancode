import {
  AddResidentModel,
  ResidentModel,
} from "@/protocols/models/resident-models";
import {
  AddResidentRepository,
  EditResidentRepository,
  QueryByIDResidentRepository,
} from "@/protocols/repository/resident-repository";

export default class ResidentRepository
  implements
    AddResidentRepository,
    EditResidentRepository,
    QueryByIDResidentRepository
{
  async create(resident: AddResidentModel): Promise<ResidentModel> {
    return new Promise((resolve) => resolve({ id: "any id", ...resident }));
  }

  async change(resident: ResidentModel): Promise<ResidentModel> {
    return new Promise((resolve) =>
      resolve({ id: "any id", ...resident, name: "novo nome" })
    );
  }
  async queryById(idResident: string): Promise<ResidentModel> {
    return new Promise((resolve) =>
      resolve({
        id: "any",
        email: "anyemail@gmail.com",
        income: 6000.0,
        isUser: true,
        name: "Tamyres Vial de Souza",
      })
    );
  }
}
