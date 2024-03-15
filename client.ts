import { Server } from "./server";

export class Client {
  constructor(private readonly server: Server) {}

  sendRequest() {
    this.server.get({
      name: 2000,
      age: "Luis Fernando",
      gender: "",
    });
  }
}
