import { IsUseCase } from "../../../lib/decorators/use-case.decorator";

@IsUseCase()
export class RegisterUserUseCase {
  async execute() {
    return "1";
  }
}
