const books = [
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "1984", author: "George Orwell" }
  ];
  
  for (const { title, author } of books) {
    console.log(`${title} by ${author}`);
  }
  const books = [
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "1984", author: "George Orwell" }
  ];
  
  for (const { title, author } of books) {
    if (author.startsWith("P") || author.startsWith("G")) {
      console.log(`${title} by ${author}`);
    }
  }
  
// 1. پیمایش آرایه‌ها
const numbers = [10, 20, 30, 40, 50];
console.log("پیمایش آرایه:");
for (const num of numbers) {
  console.log(num);
}
// خروجی:
// 10
// 20
// 30
// 40
// 50

// 2. پیمایش رشته‌ها
const text = "سلام دنیا!";
console.log("پیمایش رشته:");
for (const char of text) {
  console.log(char);
}
// خروجی:
// س
// ل
// ا
// م
//  
// د
// ن
// ی
// ا
// !

// 3. پیمایش مجموعه‌ها (Sets)
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 5, 4, 3]); // مقادیر تکراری حذف می‌شوند
console.log("پیمایش مجموعه:");
for (const num of uniqueNumbers) {
  console.log(num);
}
// خروجی:
// 1
// 2
// 3
// 4
// 5

// 4. پیمایش نقشه‌ها (Maps)
const userMap = new Map([
  ["name", "عرشیا"],
  ["age", 25],
  ["city", "تهران"],
]);
console.log("پیمایش نقشه:");
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
