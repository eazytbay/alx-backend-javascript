export default function createInt8TypedArray(length, position, value) {
  const customBuffer = new ArrayBuffer(length);
  const x = new DataView(buffer);

  // check if position outside range
  if (position >= length) throw new Error('Position outside range');
  // set the new value in the desired position
  x.setInt8(position, value);

  return x;
}
