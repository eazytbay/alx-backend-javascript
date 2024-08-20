
  /** A function that counts students by reading csv db synchrounously
    * Throws an error if the db is not available 
    * Otherwise, logs the Number of students: NUMBER_OF_STUDENTS
    * and also Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES */
const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
    for (let x = 0; x < lines.length; x += 1) {
      if (lines[x]) {
        length += 1;
        const field = lines[x].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = length - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
    
