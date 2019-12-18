# mapish

A serializable, string key map

## Usage

```
npm i mapish
```

Extremely like creating a map, and it's serializable.

```typescript
import { Mapish } from "mapish";

const map = new Mapish<string>([["sean", "hello"], ["arthur", "bye"]]);

JSON.stringify(map); // => `{"sean":"hello","arthur":"bye"}`
```

Simple helper functions `keyBy`, `groupBy` and `fromObject` to create a Mapish instance, works just like lodash.

```typescript
import { Mapish } from "mapish";

/** ===== keyBy ===== */
const users = [
  { id: "1", name: "sean", age: 23 },
  { id: "2", name: "arthur", age: 32 }
];
const userMap = Mapish.keyBy(users, user => user.id);

userMap.has("1"); // => true
userMap.get("1"); // => { id: "1", name: "sean", age: 23 }
JSON.stringify(userMap); // => `{"1":{"id":"1","name":"sean","age":23},"2":{"id":"2","name":"arthur","age":32}}`

/** ===== groupBy ===== */
const lessons = [
  { name: "math", on: "Tuesday" },
  { name: "math", on: "Thursday" },
  { name: "chinese", on: "Friday" }
];
const lessonMap = Mapish.groupBy(lessons, lesson => lesson.name);

lessonMap.has("math"); // => true
lessonMap.get("lessonMap"); // => [{ name: "math", on: "Tuesday" }, { name: "math", on: "Thursday" }]
JSON.stringify(lessonMap); // => `{"math":[{"name":"math","on":"Tuesday"},{"name":"math","on":"Thursday"}],"chinese":[{"name":"chinese","on":"Friday"}]}`

/** ===== fromObject ===== */
const object = { sean: "hello", arthur: "bye" };
const objectMap = Mapish.fromObject(object);

JSON.stringify(map); // => `{"sean":"hello","arthur":"bye"}`
```
