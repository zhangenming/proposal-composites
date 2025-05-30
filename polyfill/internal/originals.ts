export const Number = globalThis.Number;
export const { isNaN, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;
export const { abs, floor, min, imul } = Math;
export const { apply, ownKeys, defineProperty, preventExtensions, getOwnPropertyDescriptor } = Reflect;
export const { is, freeze } = Object;
export const { sort, splice, includes, indexOf, lastIndexOf } = Array.prototype;
export const { keyFor, iterator } = Symbol;
export const { localeCompare, charCodeAt } = String.prototype;
export const Map = globalThis.Map;
export const { has: mapHas, set: mapSet, get: mapGet, delete: mapDelete, clear: mapClear } = Map.prototype;
export const mapSize = getOwnPropertyDescriptor(Map.prototype, "size")!.get!;
export const Set = globalThis.Set;
export const { has: setHas, add: setAdd, clear: setClear, delete: setDelete, values: setValues } = Set.prototype;
export const setSize = getOwnPropertyDescriptor(Set.prototype, "size")!.get!;
export const setNext = new Set().values().next;
export const WeakSet = globalThis.WeakSet;
export const { has: weakSetHas, add: weakSetAdd } = WeakSet.prototype;
export const WeakMap = globalThis.WeakMap;
export const { set: weakMapSet, get: weakMapGet } = WeakMap.prototype;
