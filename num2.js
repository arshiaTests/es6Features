//arrow function : short syntax for functions
const add = (a,b)=> a+b;
console.log(add(3,6));

// تمرین ۱: توابع ریاضی ساده
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (base, exp) => Math.pow(base, exp);

// تمرین ۲: کار با رشته‌ها
const greeting = name => `سلام ${name}!`;
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// تمرین ۳: توابع با منطق شرطی
const isAdult = age => age >= 18 ? "بزرگسال" : "کودک";
const getGrade = score => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    return "C";
};

// تمرین ۴: کار با آرایه‌ها
const doubleNumbers = arr => arr.map(num => num * 2);
const filterPositives = arr => arr.filter(num => num > 0);

// تمرین ۵: توابع با چند خط کد
const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
};

// تست توابع
console.log(multiply(4, 5));          // 20
console.log(greeting("آرش"));         // سلام آرش!
console.log(isAdult(20));            // بزرگسال
console.log(doubleNumbers([1,2,3])); // [2,4,6]
console.log(calculateBMI(70, 1.75)); // 22.86