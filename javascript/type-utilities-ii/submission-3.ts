export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export function isFunction(value: unknown): boolean {
  return typeof value === "function";
}

export function isObject(value: unknown): boolean {
  if (value === null) return false; // legacy bug in js where null is an object
  return typeof value === "object" || typeof value === "function";
}

export function isPlainObject(value: unknown): boolean {
  // doesn't inherit from any prototype just plain object
  // Object.create(null) -> has no constructor and no prototype.
  if (value == null) return false;

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
