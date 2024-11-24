import MonthValidator from "../validators/MonthValidator.js";
import StartDayValidator from "../validators/StartDayValidator.js";

class Month {
  #month;
  #startDay;
  #dayType; // 1: 평일, 0: 휴일

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
    this.#setDateType(this.#startDay);
  }

  #setDateType(startDay) {
    switch (startDay) {
      case "월": {
        this.#dayType = [1, 1, 1, 1, 1, 0, 0];
        break;
      }
      case "화": {
        this.#dayType = [1, 1, 1, 1, 0, 0, 1];
        break;
      }
      case "수": {
        this.#dayType = [1, 1, 1, 0, 0, 1, 1];
        break;
      }
      case "목": {
        this.#dayType = [1, 1, 0, 0, 1, 1, 1];
        break;
      }
      case "금": {
        this.#dayType = [1, 0, 0, 1, 1, 1, 1];
        break;
      }
      case "토": {
        this.#dayType = [0, 0, 1, 1, 1, 1, 1];
        break;
      }
      case "일": {
        this.#dayType = [0, 1, 1, 1, 1, 1, 0];
        break;
      }
    }
  }

  getDayOfMonth() {
    return Month.DAY_OF_MONTH[this.#month];
  }

  // 평일 근무자가 나가야하는지 휴일 근무자가 나가야 하는지 알 수 있음
  getDayType(day) {
    const currentType = this.#dayType[(day - 1) % 7];
    if (Month.PUPLIC_HOLIDAYS[this.#month] && Month.PUPLIC_HOLIDAYS[this.#month].includes(day)) {
      return "WH";
    }

    if (currentType === 0) {
      return "H";
    }

    return "W";
  }
}

export default Month;
