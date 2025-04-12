/////////1 let&const
let name = "arshia"
const age = 30;
///let : block-scoped variable.
//const : immutable variable..

// تمرین ۱: متغیرهای ساده
let firstName = "سارا";
firstName = "مریم"; // امکان تغییر مقدار وجود دارد
const birthYear = 1990; // مقدار ثابت

// تمرین ۲: کار با اعداد
let score = 0;
score += 10; // افزایش امتیاز
const MAX_SCORE = 100; // مقدار ثابت حداکثر امتیاز

// تمرین ۳: کار با آرایه‌ها
let fruits = ["سیب", "پرتقال"];
fruits.push("موز"); // اضافه کردن به آرایه
const DAYS_OF_WEEK = ["شنبه", "یکشنبه", "دوشنبه"]; // آرایه ثابت

// تمرین ۴: محدوده بلوکی (Block Scope)
{
    let x = 10;
    const y = 20;
    console.log(x, y); // داخل بلوک قابل دسترسی است
}
// console.log(x); // خطا - خارج از بلوک قابل دسترسی نیست

// تمرین ۵: کار با شیء‌ها
let user = {
    name: "علی",
    age: 25
};
user.age = 26; // تغییر مقدار شیء

const settings = {
    theme: "dark",
    fontSize: 14
};
settings.theme = "light"; // می‌توان محتوای شیء را تغییر داد
// settings = {}; // خطا - نمی‌توان خود شیء را دوباره تعریف کرد

//تفاوت‌های کلیدی let و const

// 1. تعریف و تغییر مقدار
let variableLet = "قابل تغییر";
variableLet = "مقدار جدید"; // امکان تغییر وجود دارد

const variableConst = "ثابت";
// variableConst = "مقدار جدید"; // خطا: Assignment to constant variable

// 2. تعریف بدون مقدار اولیه
let x; // قابل تعریف بدون مقدار
// const y; // خطا: Missing initializer in const declaration