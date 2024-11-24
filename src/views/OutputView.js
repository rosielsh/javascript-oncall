import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printEmergencySchedule(month, startDay, assigned) {
    const logs = [];
    const dayofWeek = ["월", "화", "수", "목", "금", "토", "일"];

    const startPointer = {
      월: 0,
      화: 1,
      수: 2,
      목: 3,
      금: 4,
      토: 5,
      일: 6,
    };

    let pointer = startPointer[`${startDay}`];
    assigned.forEach(([type, worker], idx) => {
      logs.push(`${month}월 ${idx + 1}일 ${dayofWeek[pointer % 7]}${type === "WH" ? "(휴일)" : ""} ${worker}`);
      pointer++;
    });

    Console.print(logs.join("\n"));
  }

  static printError(message) {
    Console.print(message);
    Console.print("");
  }
}

export default OutputView;
