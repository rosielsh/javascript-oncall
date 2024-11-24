import Month from "../../src/models/Month";

describe("Month 클래스 테스트", () => {
  test("월은 1~12 사이의 숫자로 입력할 수 있다", () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    months.forEach((month) => {
      expect(() => new Month(month, "월")).not.toThrow();
    });
  });

  test("월은 1~12 사이의 숫자가 아니면 에러가 발생한다", () => {
    const months = [0, 13, undefined, null, NaN, {}, [], "string"];

    months.forEach((month) => {
      expect(() => new Month(month, "월")).toThrow("[ERROR]");
    });
  });
});
