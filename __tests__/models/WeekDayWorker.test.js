describe("WeekDayWorker 클래스 테스트", () => {
  test("평일 비상근무 사원에는 중복된 사람이 있으면 안된다.", () => {
    const workers = ["준팍", "준팍"];

    expect(() => WeekDayWorker(workers)).toThrow("[ERROR]");
  });
});
