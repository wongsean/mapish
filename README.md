# mapish

A serializable, string key map

## Usage

Extremely like creating a map, and it's serializable.

```
import { Mapish } from 'mapish'

const map = new Mapish<string>([
  ["sean", "hello"],
  ["arthur", "bye"]
])

JSON.stringify(map) // => `{"sean":"hello","arthur":"bye"}`

```

Simple helper function `keyBy` to create a Mapish instance, works just like lodash.

```
import { Mapish } from 'mapish'

const users = [
  { id: "1", name: "sean", age: 23 },
  { id: "2", name: "arthur", age: 32 }
];

const map = Mapish.keyBy(users, user => user.id)

map.has("1") // => true
map.get("1") // => { id: "1", name: "sean", age: 23 }
JSON.stringify(map) // => `{"1":{"id":"1","name":"sean","age":23},"2":{"id":"2","name":"arthur","age":32}}`
```
