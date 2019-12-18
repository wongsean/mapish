import { Mapish } from "../source";

const users = [
  { id: "1", name: "sean", age: 23 },
  { id: "2", name: "arthur", age: 32 }
];

const userMap = Mapish.keyBy(users, user => user.id);

test("`keyBy` works as expectation", () => {
  expect(userMap.has("1")).toBeTruthy();
  expect(userMap.get("1")).toStrictEqual({ id: "1", name: "sean", age: 23 });
  expect(JSON.stringify(userMap)).toBe(
    `{"1":{"id":"1","name":"sean","age":23},"2":{"id":"2","name":"arthur","age":32}}`
  );
});
