class WorkAssignMent {
  #assignedWorkers;

  constructor(assignedWorkers) {
    this.#assignedWorkers = assignedWorkers;
  }

  // 근무자 배정 로직 구현
  static from(month, weekDayWorker, dayOffWorker) {
    const assigned = []; // [평일이고 휴일인지 여부, 담당자]
    const totalDay = month.getDayOfMonth(); // 현재 달의 전체 일수

    Array.from({ length: totalDay }, (_, idx) => idx + 1).forEach((currentDay) => {
      const currentType = month.getDayType(currentDay);

      if (currentType === "W") {
        const currentWorker = weekDayWorker.getCurrentWorker();

        if (this.#isContinuous(currentWorker, assigned)) {
          if (weekDayWorker.isExistPrevChangedOrder()) {
            const prev = weekDayWorker.getPreviousChangedOrder();
            assigned.push([currentType, prev]);

            weekDayWorker.pushChangedOrder(currentWorker);
            weekDayWorker.possibleWorker();
            return;
          }

          weekDayWorker.possibleWorker();
          const next = weekDayWorker.getCurrentWorker();
          assigned.push([currentType, next]);
          weekDayWorker.pushChangedOrder(currentWorker);
          weekDayWorker.possibleWorker();
          return;
        }

        if (weekDayWorker.isExistPrevChangedOrder()) {
          const prev = weekDayWorker.getPreviousChangedOrder();
          assigned.push([currentType, prev]);
          return;
        }

        assigned.push([currentType, currentWorker]);
        weekDayWorker.possibleWorker();

        return;
      }
      // 공휴일 이라면
      const currentWorker = dayOffWorker.getCurrentWorker();

      if (this.#isContinuous(currentWorker, assigned)) {
        if (dayOffWorker.isExistPrevChangedOrder()) {
          const prev = dayOffWorker.getPreviousChangedOrder();
          assigned.push([currentType, prev]);
          dayOffWorker.pushChangedOrder(currentWorker);
          dayOffWorker.possibleWorker();
          return;
        }

        dayOffWorker.possibleWorker();
        const next = dayOffWorker.getCurrentWorker();
        assigned.push([currentType, next]);
        dayOffWorker.pushChangedOrder(currentWorker);
        dayOffWorker.possibleWorker();
      }

      if (dayOffWorker.isExistPrevChangedOrder()) {
        const prev = dayOffWorker.getPreviousChangedOrder();
        assigned.push([currentType, prev]);
        return;
      }

      assigned.push([currentType, currentWorker]);
      dayOffWorker.possibleWorker();
    });

    return new WorkAssignMent(assigned);
  }

  getAssignedInfo() {
    return this.#assignedWorkers;
  }

  static #isContinuous(currentWorker, assigned) {
    return assigned.length > 0 && assigned.at(-1)[1] === currentWorker;
  }
}

export default WorkAssignMent;
