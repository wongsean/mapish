import { Mapish } from "../source";

const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);

test("patch on Map", () => {
  expect(() => map.ish).not.toThrowError();
  expect(map.ish).toBeInstanceOf(Mapish);
  expect(map.ish.entries()).toEqual(map.entries());
});
