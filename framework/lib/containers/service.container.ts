import { CommonRequests } from "../decorators/controller.decorator";
import { AbstractContainer } from "./abstract.container";

export class ServiceContainer implements AbstractContainer {
  private services: Map<string, CommonRequests> = new Map();

  push(path: string, controller: CommonRequests) {
    this.services.set(path, controller);
  }

  iterate(cb: (value: CommonRequests, key: string) => void) {
    this.services.forEach(cb);
  }

  one(path: string) {
    return this.services.get(path);
  }
}

//singleton
export const serviceContainer = new ServiceContainer();
