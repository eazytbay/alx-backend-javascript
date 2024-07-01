export const weakMap = new WeakMap();
let increment = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, increment);
  increment += 1;
  const queryIncrement = weakMap.get(endPoint);
  if (queryIncrement >= 5) {
    throw new Error('Endpoint load is high');
  }
}
