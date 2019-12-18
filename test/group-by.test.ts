import { Mapish } from "../source";

const lessons = [
  { name: "math", on: "Tuesday" },
  { name: "math", on: "Thursday" },
  { name: "chinese", on: "Friday" }
];

const lessonMap = Mapish.groupBy(lessons, lesson => lesson.name);

test("`groupBy` works as expectation", () => {
  expect(lessonMap.has("math")).toBeTruthy();
  expect(lessonMap.get("math")).toStrictEqual([
    { name: "math", on: "Tuesday" },
    { name: "math", on: "Thursday" }
  ]);
  expect(JSON.stringify(lessonMap)).toBe(
    `{"math":[{"name":"math","on":"Tuesday"},{"name":"math","on":"Thursday"}],"chinese":[{"name":"chinese","on":"Friday"}]}`
  );
});
