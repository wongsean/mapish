import { ObjectFromEntries } from "./polyfill";

export class Mapish<T> extends Map<string, T> {
  toJSON(): Record<string, T> {
    return ObjectFromEntries(this.entries());
  }

  toObject(): Record<string, T> {
    return this.toJSON();
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
    const entries = items.map(item => [iterator(item), item] as const);
    return new Mapish(entries);
  }

  static groupBy<T>(
    items: readonly T[],
    iterator: (item: T) => string
  ): Mapish<T[]> {
    return items.reduce((map, item) => {
      const key = iterator(item);

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
