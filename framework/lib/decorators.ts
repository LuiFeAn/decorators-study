import { controllerContainer } from "./controller-container";
export interface CommonRequests {
  get(): void;
}

export type ControllerInstaceOfType = new () => CommonRequests;

function IsController<T extends ControllerInstaceOfType>(path: string) {
  return function (target: T) {
    const instaceOfController = new target();
    controllerContainer.push(path, instaceOfController);
  };
}

export { IsController };
