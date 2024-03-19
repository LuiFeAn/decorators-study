import { CommonRequests } from "./decorators";

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

export const controllerContainer = new ControllerContainer();
