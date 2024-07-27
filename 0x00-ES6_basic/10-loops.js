export default function appendToEachArrayValue(array, appendString) {
  const forValue = [];
  for (const idx of array) {
    forValue.push(appendString + idx);
  }
  return forValue;
}
