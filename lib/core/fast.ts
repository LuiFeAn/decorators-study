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
      const { list: get, create: post, partialUpdate: patch } = instance;
      const methods = [get, patch, post];
      methods.forEach((method) => {
        if (method) {
          const methodLiterals = {
            list: "get",
            detail: "get",
            create: "post",
            partialUpdate: "patch",
          };
          const name =
            methodLiterals[method?.name as keyof typeof methodLiterals];

          this.engine[name as RequestMethodsTypes](path, async (req, res) => {
            const cb_ = await method();
            if (cb_) {
              res.json(cb_);
            }
          });
        }
      });
    });
  }
}
