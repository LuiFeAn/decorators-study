import { controllerContainer } from "../containers/controller.container";

export interface CommonRequests {
  get(slug?: string): any;
  post(): any;
  delete(slug?: string): any;
  patch(slug?: string): any;
}

export type ControllerInstaceOfType = new (...args: any[]) => CommonRequests;

function IsController<T extends ControllerInstaceOfType>(path: string) {
  return function (target: T) {
    const instaceOfController = new target();
    controllerContainer.push(path, instaceOfController);
  };
}

export { IsController };
