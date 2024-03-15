interface IPseudoClassValidatorOptions {
  error: string;
  field: string;
}

class PseudoClassValidator {
  private errors: IPseudoClassValidatorOptions[] = [];

  add(error: IPseudoClassValidatorOptions) {
    this.errors.push(error);
  }

  get errors_() {
    return this.errors;
  }
}

const pseudoClassValidatorErrors = new PseudoClassValidator();

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

export { IsString, IsNumber, pseudoClassValidatorErrors };
