function findStudentById(students, id) {
  // Your code here
  return students.find(student => student.id === id) || null;
  // find method: ไล่หา student ที่ id ตรงเป้า ถ้าเจอเอาตัวนั้นกลับ ถ้าไม่เจอก็ return null ไป 
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
