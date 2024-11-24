import InputValidator from "../../src/validators/InputValidator";

describe("InputValidator 클래스 테스트", () => {
  test("특정 근무자가 평일에만 있거나 휴일에만 있으면 안된다", () => {
    const weekDay = ["준팍", "도밥", "우코", "루루", "수아"];
    const dayOff = ["글로", "도밥", "우코", "루루", "수아"];

    expect(() => InputValidator.checkTotalWorkers(weekDay, dayOff)).toThrow("[ERROR]");
  });

  test("근무자 명수가 일치하지 않으면 안된다", () => {
    const weekDay = ["준팍", "도밥", "고니", "루루", "수아", "우코"];
    const dayOff = ["준팍", "도밥", "고니", "루루", "수아"];

    expect(() => InputValidator.checkTotalWorkers(weekDay, dayOff)).toThrow("[ERROR]");
  });
});
