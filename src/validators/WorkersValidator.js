import { generateError } from "../utils/generateError.js";

class WorkersValidator {
  static validate(workers) {
    this.#validateCount(workers);
    this.#validateDuplicate(workers);
    this.#validateType(workers);
    this.#validateLength(workers);
  }

  static #validateDuplicate(workers) {
    if (new Set(workers).size !== workers.length) {
      generateError("중복된 근무자를 입력할 수 없습니다.");
    }
  }

  static #validateType(workers) {
    if (!workers.every((name) => typeof name === "string")) {
      generateError("모든 근무자의 이름은 문자로 입력해야 합니다.");
    }
  }

  static #validateLength(workers) {
    if (workers.some((name) => name.length < 1 || name.length > 5)) {
      generateError("모든 근무자의 이름은 1자 ~ 5자 이내로 입력가능합니다.");
    }
  }

  static #validateCount(workers) {
    if (workers.length < 5 || workers.length > 35) {
      generateError("근무자는 최소 5명 ~ 최대 35명 가능합니다.");
    }
  }
}

export default WorkersValidator;
