// 1. محاسبه مجموع عناصر آرایه
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// 2. فیلتر کردن اعداد زوج از آرایه
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// 3. تبدیل هر عنصر آرایه به مربع آن
const squareNumbers = (arr) => arr.map((num) => num ** 2);

// 4. پیدا کردن بزرگ‌ترین عدد در آرایه
const findMaxNumber = (arr) => arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);

// تست توابع
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("مجموع آرایه:", sumArray(numbers)); // خروجی: 55
console.log("اعداد زوج:", filterEvenNumbers(numbers)); // خروجی: [2, 4, 6, 8, 10]
console.log("مربع اعداد:", squareNumbers(numbers)); // خروجی: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log("بزرگ‌ترین عدد:", findMaxNumber(numbers)); // خروجی: 10



