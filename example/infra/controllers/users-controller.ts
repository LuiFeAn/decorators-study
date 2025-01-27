import { IsController } from "../../../lib/core/decorators/controller.decorator";
import { RegisterUserUseCase } from "../../application/use_cases/user/register-user-use-case";

@IsController("/users")
class UsersController {
  constructor(private readonly createUserUseCase: RegisterUserUseCase) {}
  async list() {
    return {
      name: "Luis Fernando",
      age: 23,
    };
  }
}
