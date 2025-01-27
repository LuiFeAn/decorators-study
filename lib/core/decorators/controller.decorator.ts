import { controllerContainer } from "../containers/controller.container";

export interface CommonRequests {
  list?(slug?: string): any;
  detail?(slug?: string): any;
  create?(): any;
  delete?(slug?: string): any;
  partialUpdate?(slug?: string): any;
}

type RequireAtLeastOneMethod<T,Keys extends keyof T = keyof T> = Keys extends keyof T
  ? Required<Pick<T, Keys>> & Partial<Omit<T, Keys>>
  : never;

export type AtLeastOneCommonRequest = RequireAtLeastOneMethod<CommonRequests>;

export type ControllerInstaceOfType = new (...args: any[]) => AtLeastOneCommonRequest;

function IsController<T extends ControllerInstaceOfType>(path: string) {
  return function (target: T) {
    const instaceOfController = new target();
    controllerContainer.push(path, instaceOfController);
  };
}

export { IsController };
