interface IPseudoClassValidatorErrorOptions {
  error: string;
  field: string;
}

export class PseudoClassValidatorErrors {
  private errors: IPseudoClassValidatorErrorOptions[] = [];

  add(error: IPseudoClassValidatorErrorOptions) {
    this.errors.push(error);
  }

  get errors_() {
    return this.errors;
  }
}
