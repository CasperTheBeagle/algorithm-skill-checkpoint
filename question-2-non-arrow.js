function findProductPrice(products, name) {
  // find method: ไล่หา product ที่ชื่อตรงเป้า ถ้าเจอเอาราคากลับ ถ้าไม่เจอก็ return -1 ไป
  const found = products.find(function(product) {
    return isNameMatch(product, name);
  });
  return handlePriceResult(found);
}

function isNameMatch(product, targetName) {
  // เช็คว่าชื่อของ product ตรงกับที่หาหรือเปล่า
  return product.name === targetName;
}

function handlePriceResult(result) {
  // ถ้าหาไม่เจอ (undefined) ให้ return -1 แทน ถ้าเจอก็เอา price กลับไป
  if (result === undefined) {
    return -1;
  }
  return result.price;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
