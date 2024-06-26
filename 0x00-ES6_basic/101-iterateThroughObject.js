export default function iterateThroughObject(reportWithIterator) {
  console.log(reportWithIterator);
  const employeesList = [];
  for (const employee of reportWithIterator) {
    employeesList.push(employee);
  }
  return employeesList.join(' | ');
}
