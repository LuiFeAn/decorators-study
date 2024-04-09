import { RegisterUserUseCase } from "../../application/use_cases/user/register-user-use-case";
import { IsController } from "../../lib/decorators/controller.decorator";

@IsController("/")
class HellWorldController {
  constructor(private readonly createUserUseCase: RegisterUserUseCase) {}
  async get() {
    const sla = await this.createUserUseCase.execute();
    return sla;
  }
  delete(): any {}
  patch(): any {}
  post(): any {}
}
