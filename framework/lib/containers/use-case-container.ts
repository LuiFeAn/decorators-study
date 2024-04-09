import { CommonRequests } from "../decorators/controller.decorator";
import { AbstractContainer } from "./abstract.container";

interface UseCaseConstructor<T> {
  execute: Promise<T> | undefined;
}

export type UseCaseType<T> = UseCaseConstructor<T>;

export type UseCaseTypeConstructor<T> = new () => UseCaseConstructor<T>;

export class UseCaseContainer<T> {
  private services: Map<string, UseCaseType<T>> = new Map();

  push(path: string, useCase: UseCaseType<T>) {
    this.services.set(path, useCase);
  }
}

//singleton
export const useCaseContainer = new UseCaseContainer();
