import { IsController } from "../../lib/decorators/controller.decorator";

@IsController("/")
class HellWorldController {
  get() {
    return "Hello Words";
  }
  delete(): any {}
  patch(): any {}
  post(): any {}
}
