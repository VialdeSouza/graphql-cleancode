import { Controller } from "../protocols/protocol-controller";

export const adaptResolver = async (controller: Controller): Promise<any> => {
    const data = await controller.handle()
    return data
}