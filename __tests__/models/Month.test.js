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

  test("요일은 월~일 사이의 문자로 입력할 수 있다", () => {
    const dayofWeeks = ["월", "화", "수", "목", "금", "토", "일"];

    dayofWeeks.forEach((dayofWeek) => {
      expect(() => new Month(1, dayofWeek)).not.toThrow();
    });
  });

  test("요일은 월~일 사이의 문자가 아니면 에러가 발생한다", () => {
    const dayofWeeks = ["윌", "MON", "월월", 0, 12, undefined, NaN, null, {}, []];

    dayofWeeks.forEach((dayofWeek) => {
      expect(() => new Month(1, dayofWeek)).toThrow("[ERROR]");
    });
  });

  test("해당 일이 평일인지 휴일인지 알 수 있다", () => {
    const currentMonth = 5;
    const startDay = "월";

    const days = [1, 2, 3, 4, 5, 6, 7];
    const types = ["W", "W", "W", "W", "H", "H", "H"];

    days.forEach((day, idx) => {
      const month = new Month(currentMonth, startDay);

      expect(month.getDayType(day)).toEqual(types[idx]);
    });
  });
});
