import { CommonRequests } from "../decorators/controller.decorator";
import { AbstractContainer } from "./abstract.container";

export class ControllerContainer implements AbstractContainer {
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
