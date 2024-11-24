import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class MonthValidator {
  static validate(month) {
    this.#validateType(month);
    this.#validateRange(month);
  }

  static #validateType(month) {
    if (Validator.isNotNumber(month)) {
      generateError("월은 숫자로 입력가능합니다.");
    }
  }

  static #validateRange(month) {
    if (month < 1 || month > 12) {
      generateError("월은 1~12 사이의 숫자로 입력가능합니다.");
    }
  }
}

export default MonthValidator;
