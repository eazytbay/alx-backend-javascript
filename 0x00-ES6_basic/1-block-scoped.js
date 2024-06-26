export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // assignment Destructuring and conditional logic
  const [newTask, newTask2] = trueOrFalse ? [true, false] : [task, task2];
  return [newTask, newTask2];
}



