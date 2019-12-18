import { Mapish } from "../source";

const map = Mapish.fromObject({ sean: "hello", arthur: "bye" });

test("`fromObject` works as expectation", () => {
  expect(JSON.stringify(map)).toBe(`{"sean":"hello","arthur":"bye"}`);
});
