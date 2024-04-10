import { CommonRequests } from "../decorators/controller.decorator";
import { AbstractContainer } from "./abstract.container";

interface UseCaseConstructor {
  execute(...args: any[]): Promise<any> | undefined;
}

export type UseCaseType = UseCaseConstructor;

export type UseCaseTypeConstructor = new () => UseCaseConstructor;

export class UseCaseContainer {
  private services: Map<string, UseCaseType> = new Map();

  push(key: string, useCase: UseCaseType) {
    this.services.set(key, useCase);
  }

  all() {
    return this.services.values();
  }

  get(key: string) {
    return this.services.get(key);
  }
}

//singleton
export const useCaseContainer = new UseCaseContainer();
