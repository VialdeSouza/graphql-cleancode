import { Controller } from "../protocols/protocol-controller";

export const adaptControllerToResolver = async (
  controller: Controller,
  values: any
): Promise<any> => {
  const data = await controller.handle(values);
  return data;
};
