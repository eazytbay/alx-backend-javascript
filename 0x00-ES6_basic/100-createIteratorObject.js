export default function createIteratorObject(report) {
  const values = Object.values(report);
  let idx = 0;

  const iteratorObject = {
    next() {
      if (idx < values.length) {
        return {
          value: values[idx++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };

  return iteratorObject;
}
