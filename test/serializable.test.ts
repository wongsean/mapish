import { Mapish } from "../source";

const map1 = new Mapish<string | number | boolean>([
  ["a", 1],
  ["b", false],
  ["c", "3"]
]);

test("simple map stringify", () => {
  expect(JSON.stringify(map1)).toBe(`{"a":1,"b":false,"c":"3"}`);
});
