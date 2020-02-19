import { Mapish } from "../source";

const map = new Mapish<string>([
  ["sean", "hello"],
  ["arthur", "bye"]
]);

const afterMap = map.toArray((v, k) => v + " " + k);

test("map values", () => {
  expect(JSON.stringify(afterMap)).toBe(`["hello sean","bye arthur"]`);
});
