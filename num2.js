///////war//arrow function : short syntax for functions
const add = (a,b)=> a+b;
console.log(add(3,6));

/////تمرین ۱: توابع ریاضی ساده
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (base, exp) => Math.pow(base, exp);

///// تمرین ۲: کار با رشته‌ها
const greeting = name => `سلام ${name}!`;
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

/////تمرین ۳: توابع با منطق شرطی
const isAdult = age => age >= 18 ? "بزرگسال" : "کودک";
const getGrade = score => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    return "C";
};

/// تمرین ۴: کار با آرایه‌ها
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

///تمرین ترکیبی پیشرفته: سیستم مدیریت کتابخانه

// 1. تعریف متغیرها با let و const
const MAX_BOOKS = 10;
let currentBooks = 0;

///// 2. تعریف توابع با arrow functions
const addBook = (title, author, year) => {
  if (currentBooks >= MAX_BOOKS) {
    return "ظرفیت کتابخانه تکمیل است";
  }
  currentBooks++;
  return { title, author, year, id: Date.now() };
};

const removeBook = (books, id) => books.filter(book => book.id !== id);

const findBooksByAuthor = (books, authorName) => 
  books.filter(book => 
    book.author.toLowerCase().includes(authorName.toLowerCase())
  );

// 3. استفاده از توابع و متغیرها
let libraryBooks = [];

// اضافه کردن کتاب‌ها
libraryBooks.push(addBook("شازده کوچولو", "آنتوان دوسنت اگزوپری", 1943));
libraryBooks.push(addBook("1984", "جورج اورول", 1949));
libraryBooks.push(addBook("انسان خردمند", "یووال نوح هراری", 2011));

// نمایش کتاب‌ها
console.log("کتاب‌های فعلی:", libraryBooks);

// حذف یک کتاب
libraryBooks = removeBook(libraryBooks, libraryBooks[0].id);
console.log("پس از حذف:", libraryBooks);

// جستجوی کتاب‌ها بر اساس نویسنده
const orwellBooks = findBooksByAuthor(libraryBooks, "Orwell");
console.log("کتاب‌های اورول:", orwellBooks);

// 4. محاسبات پیشرفته
const getAveragePublicationYear = books => {
  const total = books.reduce((sum, book) => sum + book.year, 0);
  return books.length > 0 ? Math.round(total / books.length) : 0;
};

console.log(
  "میانگین سال انتشار:",
  getAveragePublicationYear(libraryBooks)
);

// 5. مدیریت خطاها
try {
  // اضافه کردن کتاب‌های بیشتر تا رسیدن به حد مجاز
  for (let i = 0; i < 15; i++) {
    const result = addBook(`کتاب تست ${i}`, "نویسنده تست", 2000 + i);
    if (typeof result === 'object') {
      libraryBooks.push(result);
    } else {
      console.log(result); // نمایش پیام خطا
    }
  }
} catch (error) {
  console.error("خطا در اضافه کردن کتاب:", error);
}

// 6. نتیجه نهایی
console.log("وضعیت نهایی کتابخانه:", {
  totalBooks: libraryBooks.length,
  books: libraryBooks,
  averageYear: getAveragePublicationYear(libraryBooks),
  remainingCapacity: MAX_BOOKS - currentBooks
});