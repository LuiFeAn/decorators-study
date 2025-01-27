export interface IUser {
  username: string;
  age: number;
}

export class User {
  private _username: string;
  private _age: number;

  constructor({ username, age }: IUser) {
    this._username = username;
    this._age = age;
  }

  get username() {
    return this._username;
  }

  get age() {
    return this._age;
  }
}
