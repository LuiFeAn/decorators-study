import { Client } from "./client";
import { Server } from "./server";
import { pseudoClassValidatorErrors } from "./pseudo-class-validator";

const api = new Server();

const client = new Client(api);

client.sendRequest();

console.log(pseudoClassValidatorErrors.errors_);
