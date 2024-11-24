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
      // currentDay : 현재 날짜
      // currentType : 현재 날짜가 평일인지 공휴일인지 W or H or WH(평일인데 공휴일)
      const currentType = month.getDayType(currentDay);

      // 평일 이라면
      if (currentType === "W") {
        const currentWorker = weekDayWorker.getCurrentWorker();

        if (assigned.length > 0 && assigned.at(-1)[1] === currentWorker) {
          if (weekDayWorker.isExistPrevChangedOrder()) {
            const prev = weekDayWorker.getPreviousChangedOrder();
            assigned.push([currentType, prev]);
          } else {
            weekDayWorker.possibleWorker();
            const next = weekDayWorker.getCurrentWorker();
            assigned.push([currentType, next]);
          }

          weekDayWorker.pushChangedOrder(currentWorker);
          weekDayWorker.possibleWorker();
          return;
        }

        if (weekDayWorker.isExistPrevChangedOrder()) {
          const prev = weekDayWorker.getPreviousChangedOrder();
          assigned.push([currentType, prev]);
        } else {
          assigned.push([currentType, currentWorker]);
          weekDayWorker.possibleWorker();
        }
      }
      // 공휴일 이라면
      else {
        const currentWorker = dayOffWorker.getCurrentWorker();

        if (assigned.length > 0 && assigned.at(-1)[1] === currentWorker) {
          if (dayOffWorker.isExistPrevChangedOrder()) {
            const prev = dayOffWorker.getPreviousChangedOrder();
            assigned.push([currentType, prev]);
          } else {
            dayOffWorker.possibleWorker();
            const next = dayOffWorker.getCurrentWorker();
            assigned.push([currentType, next]);
          }

          dayOffWorker.pushChangedOrder(currentWorker);
          dayOffWorker.possibleWorker();

          return;
        }

        if (dayOffWorker.isExistPrevChangedOrder()) {
          const prev = dayOffWorker.getPreviousChangedOrder();
          assigned.push([currentType, prev]);
        } else {
          assigned.push([currentType, currentWorker]);
          dayOffWorker.possibleWorker();
        }
      }
    });

    return new WorkAssignMent(assigned);
  }

  getAssignedInfo() {
    return this.#assignedWorkers;
  }
}

export default WorkAssignMent;
