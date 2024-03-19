import { CommonRequests } from "../decorators/controller.decorator";

export class ControllerContainer {
  private controllers: Map<string, CommonRequests> = new Map();

  push(path: string, controller: CommonRequests) {
    this.controllers.set(path, controller);
  }

  get all() {
    const instances = Array.from(this.controllers.values());
    const paths = Array.from(this.controllers.keys());
    return {
      paths,
      instances,
    };
  }

  one(path: string) {
    return this.controllers.get(path);
  }
}

//singleton
export const controllerContainer = new ControllerContainer();
