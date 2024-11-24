import { generateError } from "../utils/generateError.js";

class InputValidator {
  static checkTotalWorkers(weekDay, dayOff) {
    const sortedWeekDay = [...weekDay];
    const sortedDayOff = [...dayOff];

    if (JSON.stringify(sortedWeekDay.sort()) !== JSON.stringify(sortedDayOff.sort())) {
      generateError("평일 근무자와 주말 근무자의 인원이 일치해야 합니다.");
    }

    if (weekDay.length !== dayOff.length) {
      generateError("근무자 수가 일치하지 않습니다.");
    }
  }
}

export default InputValidator;
