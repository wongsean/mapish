import { Mapish } from "../source";

const map = new Mapish<string>([
  ["sean", "hello"],
  ["arthur", "bye"],
]);

test("map to array", () => {
  const arr = map.map((v, k) => `${v} ${k}`);
  expect(arr).toEqual(["hello sean", "bye arthur"]);
});

test("map keys", () => {
  const after = map.mapKeys((_, k) => k + 1);
  expect(JSON.stringify(after)).toEqual('{"sean1":"hello","arthur1":"bye"}');
});

test("map values", () => {
  const after = map.mapValues((v) => v + 1);
  expect(JSON.stringify(after)).toEqual('{"sean":"hello1","arthur":"bye1"}');
});
