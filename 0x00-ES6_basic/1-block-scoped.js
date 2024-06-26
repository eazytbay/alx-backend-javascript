export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // eslint-disable-the-next-line-no-used-vars
    let task = true;
    // eslint-disable-next-line
    let task2 = false;
  }

  return [task, task2];
}
