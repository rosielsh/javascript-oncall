import WeekDayWorker from "../../src/models/WeekDayWorker.js";

describe("WeekDayWorker 클래스 테스트", () => {
  test("평일 비상근무 사원에는 중복된 사람이 있으면 안된다.", () => {
    const workers = ["준팍", "준팍", '준팍', '준팍','준팍'];

    expect(() => new WeekDayWorker(workers)).toThrow("[ERROR]");
  });

  test("평일 비상근무 사원의 닉네임은 최소 1자 ~ 최대 5자 가능하다", () => {
    const workers = ["준팍", "도밥", "준", "루루루루루", '수아'];

    expect(() => new WeekDayWorker(workers)).not.toThrow();
  });

  test("평일 비상근무 사원의 닉네임이 1자 ~ 5자를 벗어나고 문자가 아니라면 예외가 발생한다", () => {
    const workers = [
      ["", "준팍", "루루", "도밥", "고니"],
      ["준팍준팍준팍", "루루", "도밥", "고니", "수아"],
      ["루루", undefined, "도밥", "고니", "수아"],
      ["루루", NaN, "도밥", "고니", "수아"],
    ];

    workers.forEach((worker) => {
      expect(() => new WeekDayWorker(worker)).toThrow("[ERROR]");
    });
  });

  test("평일 비상근무 사원은 최소 5명 ~ 최대 35명 가능하다", () => {
    const workers = [
      Array.from({ length: 40 }, (_, idx) => `루루_${idx}`),
      Array.from({ length: 2 }, (_, idx) => `루루_${idx}`),
    ];

    workers.forEach((worker) => {
      expect(() => new WeekDayWorker(worker)).toThrow("[ERROR]");
    });
  });
});
