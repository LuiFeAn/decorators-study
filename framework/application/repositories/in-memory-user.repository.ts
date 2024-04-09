import { IUser } from "../../domain/entities/user";

export class InMemoryUserRepository {
  private readonly users: IUser[] = [];

  create(user: IUser) {
    this.users.push(user);
  }
}
