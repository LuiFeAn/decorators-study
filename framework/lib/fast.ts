import express from "express";
import { Express } from "express";
import { ControllerContainer } from "./controller-container";

interface IFastConstructorOptions {
  controllerContainer: ControllerContainer;
}

export class Fast {
  engine: Express;

  constructor(private options: IFastConstructorOptions) {
    this.engine = express();
    this.requestHandler();
  }

  startServerOn(port: number, action?: () => void) {
    this.engine.listen(port, action);
  }

  requestHandler() {
    const { instances, paths } = this.options.controllerContainer.all;
    instances.forEach((instance) => {
      const { get } = instance;
      const get_ = get.name as "get";
      paths.forEach((path) => {
        this.engine[get_](path, (req, res) => {
          const re_ = get();
          res.json(re_);
        });
      });
    });
  }
}
