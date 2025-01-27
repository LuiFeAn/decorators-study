import { IsController } from "../../../lib/core/decorators/controller.decorator";
@IsController("/")
class HellWorldController {
  async get() {
    return "Hello Word";
  }
  delete(): any {}
  patch(): any {}
  post(): any {}
}
