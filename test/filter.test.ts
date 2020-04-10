import { Mapish } from "../source";

const userMap = Mapish.keyBy(
  [
    { id: "1", name: "sean", age: 23 },
    { id: "2", name: "arthur", age: 32 },
    { id: "3", name: "wong2", age: 25 },
  ],
  (user) => user.id
);

test("keepIf", () => {
  const elders = userMap.keepIf((user) => user.age > 30);
  expect(elders.size).toEqual(1);
  expect(JSON.stringify(elders)).toBe(
    `{"2":{"id":"2","name":"arthur","age":32}}`
  );
});

test("deleteIf", () => {
  const elders = userMap.deleteIf((user) => user.age < 30);
  expect(elders.size).toEqual(1);
  expect(JSON.stringify(elders)).toBe(
    `{"2":{"id":"2","name":"arthur","age":32}}`
  );
});
