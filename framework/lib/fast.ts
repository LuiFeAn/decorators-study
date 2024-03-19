import express from "express";
import { Express } from "express";
import { controllerContainer } from "./containers/controller.container";

interface IFastConstructorOptions {}

export class Fast {
  engine: Express;

  constructor() {
    this.engine = express();
    this.requestHandler();
  }

  startServerOn(port: number, action?: () => void) {
    this.engine.listen(port, action);
  }

  requestHandler() {
    const { instances, paths } = controllerContainer.all;
    for (let i = 0; i < instances.length; i++) {
      const instance = instances[i];
      const path = paths[i];
      const { get, post, patch } = instance;
      const methods = [get, patch, post];
      methods.forEach((method) => {
        const name = method.name as "get" | "post" | "put" | "patch" | "delete";
        this.engine[name](path, (req, res) => {
          const cb_ = method();
          if (cb_) {
            res.json(cb_);
          }
        });
      });
    }
  }
}
