import InputHandler from "../handler/InputHandler.js";
import DayOffWorker from "../models/DayOffWorker.js";
import Month from "../models/Month.js";
import WeekDayWorker from "../models/WeekDayWorker.js";
import WorkAssignMent from "../models/WorkAssignment.js";
import InputParser from "../parser/InputParser.js";
import InputValidator from "../validators/InputValidator.js";
import MonthValidator from "../validators/MonthValidator.js";
import StartDayValidator from "../validators/StartDayValidator.js";
import WorkersValidator from "../validators/WorkersValidator.js";

class AssignController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async assign() {
    const [month, startDay] = await this.#getMonthInfo();
    const [weekDayWorkers, dayOffWorkers] = await this.#getWorkers();

    const monthInfo = new Month(month, startDay);
    const weekDayWorker = new WeekDayWorker(weekDayWorkers);
    const dayOffWorker = new DayOffWorker(dayOffWorkers);

    const assignedWorkers = WorkAssignMent.from(monthInfo, weekDayWorker, dayOffWorker);
    this.#outputView.printEmergencySchedule(month, startDay, assignedWorkers.getAssignedInfo());
  }

  async #getMonthInfo() {
    const [month, startDay] = await InputHandler.repeatUntilValidInput(
      () => this.#processMonthInfo(),
      this.#outputView
    );

    return [month, startDay];
  }

  async #processMonthInfo() {
    const monthInfo = await this.#inputView.readMonthInfo();
    const [month, startDay] = InputParser.parseInput(monthInfo);
    MonthValidator.validate(month);
    StartDayValidator.validate(startDay);

    return [month, startDay];
  }

  async #getWorkers() {
    const [weekDayWorker, dayOffWorker] = await InputHandler.repeatUntilValidInput(
      () => this.#processWorkers(),
      this.#outputView
    );

    return [weekDayWorker, dayOffWorker];
  }

  async #processWorkers() {
    const weekDayWorker = await this.#inputView.readWeekDayWorker();
    const weekDayWorkerArr = InputParser.parseInput(weekDayWorker);
    WorkersValidator.validate(weekDayWorkerArr);

    const dayOffWorker = await this.#inputView.readDayOffWorker();
    const dayOffWorkerArr = InputParser.parseInput(dayOffWorker);
    WorkersValidator.validate(dayOffWorkerArr);

    InputValidator.checkTotalWorkers(weekDayWorkerArr, dayOffWorkerArr);
    return [weekDayWorkerArr, dayOffWorkerArr];
  }
}

export default AssignController;
