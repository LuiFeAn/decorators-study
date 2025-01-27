import { IsController } from "../../../lib/core/decorators/controller.decorator";
import { RegisterUserUseCase } from "../../application/use_cases/user/register-user-use-case";

@IsController("/users")
class UsersController {
  constructor(private readonly createUserUseCase: RegisterUserUseCase) {}
  async get() {
    return {
      name: "Luis Fernando",
      age: 23,
    };
  }
  delete(): any {}
  patch(id: string): any {}
  post(): any {}
}
