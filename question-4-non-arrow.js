function sortProductsByPrice(products) {
  // sort method: เรียงลำดับ products ตามราคาจากน้อยไปมาก ใช้ compare function เปรียบเทียบราคา
  return products.sort(function(productA, productB) {
    return comparePrice(productA, productB);
  });
}

function comparePrice(productA, productB) {
  // เปรียบเทียบราคา ถ้า A ถูกกว่า B ให้ขึ้นก่อน ถ้าแพงกว่าให้ขึ้นทีหลัง
  return productA.price - productB.price;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
