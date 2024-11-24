import MonthValidator from "../validators/MonthValidator.js";
import StartDayValidator from "../validators/StartDayValidator.js";

class Month {
  #month;
  #startDay;

  constructor(month, startDay) {
    MonthValidator.validate(month);
    StartDayValidator.validate(startDay);
    this.#month = month;
    this.#startDay = startDay;
  }
}

export default Month;
