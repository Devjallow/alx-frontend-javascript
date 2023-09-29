export default function appendToEachArrayValue(array, appendString) {
  const valuetopprint = [];
  for (const value of array) {
    valuetopprint.push(appendString + value);
  }

  return valuetopprint;
}
