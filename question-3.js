/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n) - เพราะต้องวนลูปผ่าน array ของ students 
ในกรณีที่ worst case คือต้องหา id ที่อยู่ตำแหน่งสุดท้าย 
หรือไม่เจอเลย จะต้องตรวจสอบทุก element n ตัว

// v.short: ยิ่งคนเยอะ ยิ่งหานานขึ้นตามเนื้อผ้า
// ตัวอย่างจาก question-1.js: students.find() ต้องไล่ดูทีละคนจนกว่าจะเจอ id 302
*/


/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(n) - เหตุผลเดียวกับ findStudentById คือต้องวนลูปผ่าน array ของ products 
ในกรณี worst case ต้องตรวจสอบทุก element n ตัว 
ถึงจะหา product ที่ต้องการเจอ

// v.short: สินค้าเยอะขึ้น หานานขึ้นเท่ากัน
// ตัวอย่างจาก question-2.js: products.find() ต้องไล่หา "Banana" ทีละชิ้นจนกว่าจะเจอ
*/


/* 
Which function is more efficient and why?
Answer:
ทั้งสองฟังก์ชันมีประสิทธิภาพเท่ากัน (O(n)) 
เพราะใช้หลักการเดียวกันคือ find() method ที่ต้องวนลูปผ่าน array 
ในกรณี worst case ความซับซ้อนเวลาเท่ากัน 
แต่ findProductPrice อาจจะดีกว่าเล็กน้อยตรงที่ return -1 แทน null 
ซึ่งบางครั้งจัดการง่ายกว่า

// v.short: เท่ากันหมด แต่ return -1 ดูกวนๆ น้อยกว่า
// ตัวอย่าง: question-1.js ต้องเช็ค null ส่วน question-2.js ต้องเช็ค -1
*/
