import { Mapish } from "../source";

const map = new Mapish<string>([
  ["sean", "hello"],
  ["arthur", "bye"]
]);

const afterMap = map.map(v => v + "1");

test("map values", () => {
  expect(JSON.stringify(afterMap)).toBe(`{"sean":"hello1","arthur":"bye1"}`);
});
