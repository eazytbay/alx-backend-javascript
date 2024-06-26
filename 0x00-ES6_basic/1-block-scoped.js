export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // no-unused-vars eslint disabled
    const task2 = false; // no-unused-vars eslint disabled
  }

  return [task, task2];
}



