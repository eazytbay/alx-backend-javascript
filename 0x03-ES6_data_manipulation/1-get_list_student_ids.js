export default function getListStudentIds(arrayOfObjects) {
  const arrayIds = [];
  if (!Array.isArray(arrayOfObjects)) return arrayIds;

  return arrayOfObjects.map((value) => value.id);
