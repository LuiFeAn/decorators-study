import { CommonRequests } from "../decorators/controller.decorator";

export abstract class AbstractContainer {
  abstract push(path: string, controller: CommonRequests): void;

  abstract iterate(cb: (value: CommonRequests, key: string) => void): void;

  abstract one(path: string): CommonRequests | undefined;
}
