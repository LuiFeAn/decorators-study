import { PseudoClassValidatorErrors } from "./pseudo-class-validator";

export const pseudoClassValidatorErrors = new PseudoClassValidatorErrors();

function IsNotEmpty() {
  return function (target: Object, propretyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (val: string) {
      if (!val) {
        pseudoClassValidatorErrors.add({
          error: "Campo obrigatório",
          field: propretyKey,
        });
      }
    };
    Object.defineProperty(target, propretyKey, {
      get: getter,
      set: setter,
    });
  };
}

function IsString() {
  return function (target: Object, propretyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (val: string) {
      if (typeof val !== "string") {
        pseudoClassValidatorErrors.add({
          error: "Há de ser uma string",
          field: propretyKey,
        });
      }
    };
    Object.defineProperty(target, propretyKey, {
      get: getter,
      set: setter,
    });
  };
}

function IsNumber() {
  return function (target: Object, propretyKey: string) {
    let value: number;
    const getter = function () {
      return value;
    };
    const setter = function (val: string) {
      if (typeof val !== "number") {
        pseudoClassValidatorErrors.add({
          error: "Há de ser um número",
          field: propretyKey,
        });
      }
    };
    Object.defineProperty(target, propretyKey, {
      get: getter,
      set: setter,
    });
  };
}

export { IsNotEmpty, IsNumber, IsString };
