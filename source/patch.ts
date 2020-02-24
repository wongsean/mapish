import { Mapish } from ".";

Object.defineProperty(Map.prototype, "ish", {
  get() {
    return new Mapish(this.entries());
  }
});

declare global {
  interface Map<K, V> {
    readonly ish: Mapish<V>;
  }
}

export {};
