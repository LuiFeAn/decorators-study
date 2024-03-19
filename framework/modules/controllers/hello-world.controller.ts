import { IsController } from "../../lib/decorators/controller.decorator";
import { CommonRequests } from "../../lib/decorators/controller.decorator";

@IsController("/")
class HellWorldController implements CommonRequests {
  get() {
    return {
      name: "Luis Fernando",
      age: 23,
    };
  }
  delete(): any {}
  patch(): any {}
  post(): any {}
}
