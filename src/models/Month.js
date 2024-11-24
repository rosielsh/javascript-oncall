import MonthValidator from "../validators/MonthValidator";

class Month {
  #month;
  #startDay;

  constructor(month, startDay) {
    MonthValidator.validate(month);
    this.#month = month;
    this.#startDay = startDay;
  }
}

export default Month;
