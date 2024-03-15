import { IsString, IsNumber, IsNotEmpty } from "./pseudo-class-validator";

class ObtainUserDto {
  @IsString()
  public name: string;
  @IsNumber()
  public age: number;
  @IsNotEmpty()
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

export class Server {
  get(queryParams: any) {
    const { name, age, gender } = queryParams;
    new ObtainUserDto(name, age, gender);
  }
}
