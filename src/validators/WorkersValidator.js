import { generateError } from "../utils/generateError.js";

class WorkersValidator {
  static validate(workers) {
    this.#validateDuplicate(workers);
  }

  static #validateDuplicate(workers) {
    if (new Set(workers).size !== workers.length) {
      generateError("중복된 근무자를 입력할 수 없습니다.");
    }
  }
}

export default WorkersValidator;
