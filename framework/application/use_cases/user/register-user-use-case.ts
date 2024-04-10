import { IsUseCase } from "../../../lib/decorators/use-case.decorator";
import { User } from "../../../domain/entities/user";

interface IRegisterUserInputDto {
  name: string;
  age: number;
}
@IsUseCase()
export class RegisterUserUseCase {
  async execute({ name, age }: IRegisterUserInputDto) {
    const user = new User({
      username: name,
      age,
    });
    return user;
  }
}
