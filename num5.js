//// 1. استخراج مقادیر از شیء کاربر

const user = { name: "عرشیا", age: 25, email: "arshia@gmail.com", city: "تهران" };
const { name, age, email, city } = user;
console.log(`نام: ${name}, سن: ${age}, ایمیل: ${email}, شهر: ${city}`);

//// 2. استخراج مقادیر از آرایه

const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers; // مقدار سوم نادیده گرفته شده است
console.log(`اولین عدد: ${first}, دومین عدد: ${second}, چهارمین عدد: ${fourth}`);

// 3. استخراج مقادیر تو در تو
const company = {
    name: "شرکت نمونه",
    address: {
      city: "تهران",
      street: "خیابان آزادی",
    },
    employees: ["آرشیا", "علی", "مریم"],
  };
  const {
    name: companyName,
    address: { city: companyCity, street },
    employees: [firstEmployee],
  } = company;
  console.log(`نام شرکت: ${companyName}, شهر شرکت: ${companyCity}, اولین کارمند: ${firstEmployee}`);