export default function cleanSet(set, startString) {
  const rslt = [];

  for (const name of set) {
    if (startString && name.startsWith(startString)) {
      const stringToAppend = name.split(startString).join('');
      rslt.push(stringToAppend);
    }
  }

  return rslt.join('-');
}
