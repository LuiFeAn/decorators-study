interface IPseudoClassValidatorOptions {
  error: string;
  field: string;
}

export class PseudoClassValidator {
  private errors: IPseudoClassValidatorOptions[] = [];

  add(error: IPseudoClassValidatorOptions) {
    this.errors.push(error);
  }

  get errors_() {
    return this.errors;
  }
}
