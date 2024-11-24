import MonthValidator from "../validators/MonthValidator.js";
import StartDayValidator from "../validators/StartDayValidator.js";

class Month {
  #month;
  #startDay;

  static PUPLIC_HOLIDAYS = {
    1: [1],
    3: [1],
    5: [5],
    6: [6],
    8: [15],
    10: [3, 9],
    12: [25],
  };
  
  static DAY_OF_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  constructor(month, startDay) {
    MonthValidator.validate(month);
    StartDayValidator.validate(startDay);
    this.#month = month;
    this.#startDay = startDay;
  }

  // 평일인지 주말인지 알 수 있음
  getDayType(day) {}
}

export default Month;
