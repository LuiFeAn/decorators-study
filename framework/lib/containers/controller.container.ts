import { CommonRequests } from "../decorators/controller.decorator";

export class ControllerContainer {
  private controllers: Map<string, CommonRequests> = new Map();

  push(path: string, controller: CommonRequests) {
    this.controllers.set(path, controller);
  }

  iterate(cb: (value: CommonRequests, key: string) => void) {
    return this.controllers.forEach(cb);
  }

  one(path: string) {
    return this.controllers.get(path);
  }
}

//singleton
export const controllerContainer = new ControllerContainer();
