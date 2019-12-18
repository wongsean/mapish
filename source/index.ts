import { ObjectFromEntries } from "./polyfill";

export class Mapish<T> extends Map<string, T> {
  toJSON() {
    return ObjectFromEntries(this.entries());
  }

  static keyBy<T>(items: readonly T[], iterator: (item: T) => string) {
    const entries = items.map(item => [iterator(item), item] as const);
    return new Mapish(entries);
  }
}
