import { Controller } from "../protocols/protocol-controller";

export const adaptResolver = async (controller: Controller, values: any): Promise<any> => {
    const data = await controller.handle(values)
    return data
}