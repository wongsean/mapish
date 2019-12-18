import { ObjectFromEntries } from "./polyfill";

export class Mapish<T> extends Map<string, T> {
  toJSON(): Record<string, T> {
    return ObjectFromEntries(this.entries());
  }

  toObject(): Record<string, T> {
    return this.toJSON();
  }

  static keyBy<T>(
    items: readonly T[],
    iterator: (item: T) => string
  ): Mapish<T> {
    const entries = items.map(item => [iterator(item), item] as const);
    return new Mapish(entries);
  }
}

export default Mapish;
