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

//تمرین ترکیبی پیشرفته: سیستم مدیریت کاربران و محصولات

// 1. تعریف متغیرها با const و let
const MAX_USERS = 100;
const MAX_PRODUCTS = 50;
let currentUsers = 0;
let currentProducts = 0;

// 2. تعریف توابع با arrow functions و template literals
const registerUser = (name, age, email) => {
  if (currentUsers >= MAX_USERS) {
    return `❗ ظرفیت کاربران تکمیل است (حداکثر ${MAX_USERS} کاربر)`;
  }
  currentUsers++;
  return {
    id: Date.now(),
    name,
    age,
    email,
    registerDate: new Date().toLocaleDateString('fa-IR')
  };
};

const addProduct = (name, price, stock) => {
  if (currentProducts >= MAX_PRODUCTS) {
    return `❗ ظرفیت محصولات تکمیل است (حداکثر ${MAX_PRODUCTS} محصول)`;
  }
  currentProducts++;
  return {
    id: Date.now(),
    name,
    price,
    stock,
    createdAt: new Date().toLocaleDateString('fa-IR')
  };
};

// 3. توابع فیلتر و جستجو
const findUsersByAgeRange = (users, minAge, maxAge) => 
  users.filter(user => user.age >= minAge && user.age <= maxAge);

const findProductsByPriceRange = (products, minPrice, maxPrice) =>
  products.filter(product => product.price >= minPrice && product.price <= maxPrice);

// 4. محاسبات پیشرفته
const calculateAverageUserAge = users => {
  const total = users.reduce((sum, user) => sum + user.age, 0);
  return users.length > 0 ? Math.round(total / users.length) : 0;
};

const calculateTotalInventoryValue = products =>
  products.reduce((total, product) => total + (product.price * product.stock), 0);

// 5. نمونه داده‌ها
let users = [];
let products = [];

// ثبت کاربران
users.push(registerUser("علی رضوی", 25, "ali@example.com"));
users.push(registerUser("مریم محمدی", 30, "maryam@example.com"));
users.push(registerUser("رضا اکبری", 22, "reza@example.com"));

// افزودن محصولات
products.push(addProduct("لپ‌تاپ", 1500, 10));
products.push(addProduct("موبایل", 800, 20));
products.push(addProduct("هدفون", 100, 15));

// 6. گزارش‌گیری با template literals
const generateReport = () => {
  const avgAge = calculateAverageUserAge(users);
  const totalValue = calculateTotalInventoryValue(products);
  
  return `
📊 گزارش سیستم:
-----------------
👥 تعداد کاربران: ${currentUsers} از ${MAX_USERS}
🛒 تعداد محصولات: ${currentProducts} از ${MAX_PRODUCTS}
📈 میانگین سن کاربران: ${avgAge} سال
💰 ارزش کل موجودی: ${totalValue.toLocaleString()} تومان
🆕 آخرین کاربر ثبت‌شده: ${users[users.length-1].name}
🏷️ آخرین محصول اضافه‌شده: ${products[products.length-1].name}
`;
};

// 7. تست سیستم
console.log("--- کاربران بین 20 تا 30 سال ---");
console.log(findUsersByAgeRange(users, 20, 30));

console.log("--- محصولات بین 500 تا 1000 تومان ---");
console.log(findProductsByPriceRange(products, 500, 1000));

console.log(generateReport());

// 8. مدیریت خطا
try {
  // تست ظرفیت
  for (let i = 0; i < 120; i++) {
    const result = registerUser(`کاربر تست ${i}`, 20+i, `test${i}@example.com`);
    if (typeof result === 'object') {
      users.push(result);
    } else {
      console.log(result); // نمایش پیام خطا
    }
  }
} catch (error) {
  console.error("خطا در ثبت کاربر:", error);
}

// گزارش نهایی
console.log("=== گزارش نهایی ===");
console.log(generateReport());