import { Mapish } from "../source";

const map = new Mapish<string>([
  ["sean", "hello"],
  ["arthur", "bye"]
]);

test("batch get", () => {
  expect(map.get("sean")).toEqual("hello");
  expect(map.get("not exist")).toEqual(undefined);
  expect(map.get("sean", "arthur")).toEqual(["hello", "bye"]);
  expect(map.get("sean", "author")).toEqual(["hello", undefined]);
});
