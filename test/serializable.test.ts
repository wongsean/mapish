import { Mapish } from "../source";

const map = new Mapish<string>([["sean", "hello"], ["arthur", "bye"]]);

test("simple map stringify", () => {
  expect(JSON.stringify(map)).toBe(`{"sean":"hello","arthur":"bye"}`);
});
