// ===== BIG O NOTATION EXAMPLES =====
// แบบฝึกหัดเข้าใจง่ายๆ พร้อมคอมเมนต์วัยรุ่น

// ===== O(n) - Linear Time =====
// ยิ่งข้อมูลเยอง ยิ่งใช้เวลานานขึ้นตามเนื้อผ้า
// ตัวอย่างจาก question-3.js ข้อที่ 1 และ 2

function findStudentById(students, id) {
  // find method: ไล่หา student ที่ id ตรงเป้า ถ้าเจอเอาตัวนั้นกลับ ถ้าไม่เจอก็ return null ไป
  // ตัวอย่างจาก question-3.js ข้อที่ 1: Big O ของ findStudentById
  return students.find(student => student.id === id) || null;
}

function findProductPrice(products, name) {
  // find method: ไล่หา product ที่ชื่อตรงเป้า ถ้าเจอเอาราคากลับ ถ้าไม่เจอก็ return -1 ไป
  // ตัวอย่างจาก question-3.js ข้อที่ 2: Big O ของ findProductPrice
  return products.find(product => product.name === name)?.price || -1;
}

// ===== O(n log n) - Linearithmic Time =====
// เรียงข้อมูลเยอะๆ ก็ยังไวกว่าไล่หาทีละตัว
// ตัวอย่างจาก question-5.js: Big O ของ sortProductsByPrice

function sortProductsByPrice(products) {
  // sort method: เรียงลำดับ products ตามราคาจากน้อยไปมาก ใช้ arrow function เปรียบเทียบราคา
  // ตัวอย่างจาก question-5.js: Big O ของ sortProductsByPrice
  return products.sort((productA, productB) => productA.price - productB.price);
}

// ===== TEST CASES =====
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];

console.log("=== O(n) Examples ===");
console.log("Find student 302:", findStudentById(students, 302));
console.log("Find student 999:", findStudentById(students, 999));
console.log("Find Banana price:", findProductPrice(products, "Banana"));
console.log("Find Durian price:", findProductPrice(products, "Durian"));

console.log("\n=== O(n log n) Example ===");
console.log("Original products:", products);
console.log("Sorted by price:", sortProductsByPrice([...products]));

// ===== SPEED COMPARISON =====
// เปรียบเทียบประสิทธิภาพระหว่าง O(n) และ O(n log n)
// ตัวอย่างจาก question-3.js ข้อที่ 3: ฟังก์ชันไหมมีประสิทธิภาพมากกว่า
console.log("\n=== Speed Comparison ===");
console.log("O(n) vs O(n log n):");
console.log("- หาของ 1,000 ชิ้น = 1,000 ครั้ง (O(n))");
console.log("- เรียงของ 1,000 ชิ้น = ~10,000 ครั้ง (O(n log n))");
console.log("- แต่ถ้าหาของ 1,000,000 ชิ้น = 1,000,000 ครั้ง");
console.log("- ส่วนเรียงของ 1,000,000 ชิ้น = ~20,000,000 ครั้ง");
console.log("=> เรียงเยอะๆ ก็ยังเร็วกว่าหาทีละตัวมาก!");
