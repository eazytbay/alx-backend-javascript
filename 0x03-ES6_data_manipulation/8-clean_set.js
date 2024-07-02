export default function cleanSet(data, startString) {
  // Array to hold the filtered values
  const filteredValues = [];

  // Return an empty string if any input is invalid
  if (!data || !startString || !(data instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of data.values()) {
    // Check if the value is a string and starts with the given string
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the remaining string after the startString
      const remainingString = value.substring(startString.length);

      // Add the remaining string to filteredValues if it's not empty
      // and not equal to the original value
      if (remainingString && remainingString !== value) {
        filteredValues.push(remainingString);
      }
    }
  }

  // Join the filtered values with a hyphen (-) separator
  return filteredValues.join('-');
}
