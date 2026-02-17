/*  

What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.

Answer:

O(n log n) - เพราะ JavaScript's sort() method ใช้การจัดเรียงแบบ efficient sorting algorithm (เช่น Timsort, Quicksort, หรือ Merge sort) ซึ่งมีความซับซ้อนเวลาเฉลี่ยเป็น O(n log n) ไม่ใช่ O(n²) แบบ bubble sort หรือ selection sort ที่ช้ากว่ามาก



// v.short: เรียงของเยอะๆ ก็ยังไวกว่าเดินหาทีละตัว

// ตัวอย่างจาก question-4.js: products.sort() เรียงราคา 4 ชิ้นไวกว่าไล่หาทีละชิ้น 4 รอบ

*/

