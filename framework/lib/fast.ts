import express from "express";
import { Express } from "express";
import { controllerContainer } from "./containers/controller.container";
import { CorsOptions } from "cors";
import corsMiddleware from "cors";

interface IFastConstructorOptions {
  cors: CorsOptions;
}

type RequestMethodsTypes = "get" | "post" | "put" | "patch" | "delete";

export class Fast {
  engine: Express;

  constructor(private options?: IFastConstructorOptions) {
    this.engine = express();
    this.requestHandler();
    if (options) {
      const { cors } = options;
      if (cors) {
        this.engine.use(corsMiddleware(cors));
      }
    }
  }

  startServerOn(port: number, action?: () => void) {
    this.engine.use((error: any, res, req) => {
      res.json(error.message);
    });
    this.engine.listen(port, action);
  }

  requestHandler() {
    controllerContainer.iterate((instance, path) => {
      const { get, post, patch } = instance;
      const methods = [get, patch, post];
      methods.forEach((method) => {
        const name = method.name as RequestMethodsTypes;
        this.engine[name](path, (req, res) => {
          const cb_ = method();
          if (cb_) {
            res.json(cb_);
          }
        });
      });
    });
  }
}
