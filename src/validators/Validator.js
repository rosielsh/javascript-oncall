class Validator {
  static isNotNumber(value) {
    if (Array.isArray(value) || value === "" || value === null) {
      return true;
    }

    return Number.isNaN(Number(value));
  }

  static isInvalidNumber(value) {
    return !Number.isFinite(value);
  }
}

export default Validator;
