import { IsController } from "../../../lib/core/decorators/controller.decorator";
@IsController("/")
class HellWorldController {
  async list() {
    return "Hello Word";
  }
}
