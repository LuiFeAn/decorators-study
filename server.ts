import { IsString, IsNumber } from "./pseudo-class-validator";

class ObtainUserDto {
  @IsString()
  public name: string;
  @IsNumber()
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Server {
  get(queryParams: any) {
    const { name, age } = queryParams;
    new ObtainUserDto(name, age);
  }
}
