import { RegisterUserUseCase } from "../../application/use_cases/user/register-user-use-case";
import { IsController } from "../../lib/decorators/controller.decorator";
@IsController("/")
class HellWorldController {
  async get() {
    return "Hello Word";
  }
  delete(): any {}
  patch(): any {}
  post(): any {}
}

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
