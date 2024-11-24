import WorkersValidator from "../validators/WorkersValidator.js";

class WeekDayWorker {
  #workers;
  #processPointer; // 현재까지 근무한 사람을 파악하기 위한 포인터
  #previousChangedOrders; // 순서를 바꾼 사람을 저장하는 스택

  constructor(workers) {
    WorkersValidator.validate(workers);
    this.#workers = workers;
    this.#processPointer = 0;
    this.#previousChangedOrders = [];
  }

  getCurrentWorker() {
    return this.#workers[this.#processPointer];
  }

  possibleWorker() {
    this.#processPointer++;

    if (this.#processPointer === this.#workers.length) {
      this.#processPointer = 0;
    }
  }

  isExistPrevChangedOrder() {
    return this.#previousChangedOrders.length > 0;
  }

  getPreviousChangedOrder() {
    return this.#previousChangedOrders.pop();
  }

  pushChangedOrder(worker) {
    this.#previousChangedOrders.push(worker);
  }
}

export default WeekDayWorker;
