function findStudentById(students, id) {
  // find method: ไล่หา student ที่ id ตรงเป้า ถ้าเจอเอาตัวนั้นกลับ ถ้าไม่เจอก็ return null ไป
  const found = students.find(function(student) {
    return isIdMatch(student, id);
  });
  return handleEmptyResult(found);
}
function isIdMatch(student, targetId) {
  // เช็คว่า id ของ student ตรงกับที่หาหรือเปล่า
  return student.id === targetId;
}
function handleEmptyResult(result) {
  // ถ้าหาไม่เจอ (undefined) ให้ return null แทน
  if (result === undefined) {
    return null;
  }
  return result;
}
// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
