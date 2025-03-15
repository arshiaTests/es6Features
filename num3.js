//3.Template literals:string interpolation using backticks.
let name = "arshia"
console.log(`hello ${name}`);

// ========= راه‌حل‌ها | Solutions =========

// تمرین 1: تبدیل سانتیگراد به فارنهایت
// Exercise 1: Convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

// Test
console.log(celsiusToFahrenheit(30)); // 86
console.log(celsiusToFahrenheit(0));  // 32
console.log(celsiusToFahrenheit(25)); // 77


// تمرین 2: بررسی مجوز رانندگی
// Exercise 2: Check driving permission
const canDrive = age => age >= 18;

// Test
console.log(canDrive(20)); // true
console.log(canDrive(16)); // false
console.log(canDrive(18)); // true


// تمرین 3: فیلتر کردن اعداد زوج
// Exercise 3: Filter even numbers
const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);

// Test
console.log(getEvenNumbers([1,2,3,4,5]));     // [2,4]
console.log(getEvenNumbers([1,3,5,7]));       // []
console.log(getEvenNumbers([2,4,6,8]));       // [2,4,6,8]


// تمرین 4: محاسبه تخفیف
// Exercise 4: Calculate discount
const calculateDiscount = (price, discount) => {
    const discountAmount = price * (discount / 100);
    return price - discountAmount;
};

// Test
console.log(calculateDiscount(100, 20)); // 80
console.log(calculateDiscount(200, 10)); // 180
console.log(calculateDiscount(50, 50));  // 25


// تمرین 5: شمارش حروف صدادار
// Exercise 5: Count vowels
const countVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase()
              .split('')
              .filter(char => vowels.includes(char))
              .length;
};

// Test
console.log(countVowels("hello world")); // 3
console.log(countVowels("JAVASCRIPT")); // 2
console.log(countVowels("rhythm"));     // 0