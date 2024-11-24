import { generateError } from "../utils/generateError.js";

class StartDayValidator {
  static validate(startDay) {
    this.#validateType(startDay);
    this.#validatePossibleValue(startDay);
  }

  static #validateType(startDay) {
    if (typeof startDay !== "string") {
      generateError("시작하는 요일은 문자형태여야 합니다.");
    }
  }

  static #validatePossibleValue(startDay) {
    const possibleValue = ["월", "화", "수", "목", "금", "토", "일"];

    if (!possibleValue.includes(startDay)) {
      generateError("시작하는 요일은 월~일사이의 문자여야 합니다.");
    }
  }
}

export default StartDayValidator;
