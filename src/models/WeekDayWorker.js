import WorkersValidator from "../validators/WorkersValidator";

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
}

export default WeekDayWorker;
