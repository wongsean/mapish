import { ObjectFromEntries } from "./polyfill";
import "./patch";

export class Mapish<T> extends Map<string, T> {
  constructor(entries?: readonly (readonly [string, T])[] | null) {
    const sanitized = [...(entries || [])].map(
      ([k, v]) => [k.toString(), v] as const
    );
    super(sanitized);
  }

  toJSON(): Record<string, T> {
    return ObjectFromEntries(this.entries());
  }

  toObject(): Record<string, T> {
    return this.toJSON();
  }

  toString(): string {
    return "[object Mapish]";
  }

  toArray<V>(mapper: (value: T, key: string, map: this) => V): V[] {
    const array = new Array<V>();
    this.forEach((v, k) => array.push(mapper(v, k, this)));
    return array;
  }

  get(key: string): T | undefined;
  get<Keys extends [string, string, ...string[]]>(
    ...keys: Keys
  ): { [E in keyof Keys]: T | undefined };
  get<Keys extends [string, ...string[]]>(
    ...keys: Keys
  ): T | undefined | { [E in keyof Keys]: T | undefined } {
    if (keys.length <= 1) {
      const [key] = keys;
      return super.get(key);
    }

    return keys.map(key => this.get(key)) as any;
  }

  map<V>(mapper: (value: T, key: string, map: this) => V): Mapish<V> {
    const entries: [string, V][] = [];
    this.forEach((v, k) => entries.push([k, mapper(v, k, this)]));
    return new Mapish(entries);
  }

  static keyBy<T>(
    items: readonly T[],
    iterator: (item: T) => string
  ): Mapish<T> {
    const entries = items.map(
      item => [iterator(item).toString(), item] as const
    );
    return new Mapish(entries);
  }

  static groupBy<T>(
    items: readonly T[],
    iterator: (item: T) => string
  ): Mapish<T[]> {
    return items.reduce((map, item) => {
      const key = iterator(item).toString();

      if (map.has(key)) {
        map.get(key)!.push(item);
      } else {
        map.set(key, [item]);
      }
      return map;
    }, new Mapish<T[]>());
  }

  static fromObject<T>(object: Record<string, T>): Mapish<T> {
    return new Mapish(Object.entries(object));
  }
}
