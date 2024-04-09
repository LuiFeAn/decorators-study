export interface IUser {
  username: string;
  age: number;
}

export class User {
  constructor(private props: IUser) {}

  get username() {
    return this.props.username;
  }

  get age() {
    return this.props.age;
  }
}
