import WeekDayWorker from "../../src/models/WeekDayWorker.js";

describe("WeekDayWorker 클래스 테스트", () => {
  test("평일 비상근무 사원에는 중복된 사람이 있으면 안된다.", () => {
    const workers = ["준팍", "준팍"];

    expect(() => new WeekDayWorker(workers)).toThrow("[ERROR]");
  });

  test("평일 비상근무 사원의 닉네임은 최소 1자 ~ 최대 5자 가능하다", () => {
    const workers = ["준팍", "도밥", "준", "루루루루루"];

    expect(() => new WeekDayWorker(workers)).not.toThrow();
  });

  test("평일 비상근무 사원의 닉네임이 1자 ~ 5자를 벗어나고 문자가 아니라면 예외가 발생한다", () => {
    const workers = [
      ["", "준팍"],
      ["준팍준팍준팍", "루루"],
      ["루루", undefined],
      ["루루", NaN],
    ];

    workers.forEach((worker) => {
      expect(() => new WeekDayWorker(worker)).toThrow("[ERROR]");
    });
  });
});
